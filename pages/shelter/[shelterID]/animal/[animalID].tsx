import { LeapFrog } from '@uiball/loaders';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharacteristicSection from '@/components/CharacteristicSection/CharacteristicSection';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import PageHeader from '@/components/PageHeader/PageHeader';
import Subsection from '@/components/Subsection/Subsection';
import {
  getAnimalDataByID,
  getFullAPIUrl,
  getGalleryData,
  getShelterDataByID,
} from '@/shared/utilities';

import { fetchShelters, sheltersSelector } from '../../../../features/sheltersSlice';

const Animal = () => {
  const router = useRouter();
  const { isReady } = router;
  const { shelterID, animalID } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const shelters = useSelector(sheltersSelector);

  if (!isReady || shelters.length === 0) {
    return (
      <div className="flex justify-center align-middle">
        <LeapFrog size={50} speed={2.25} color="#1a56db" />
      </div>
    );
  }

  const shelter = shelters && getShelterDataByID(shelters, shelterID);
  const [animalData] = shelter && getAnimalDataByID(shelter.shelter_animals, animalID);

  const { character, description, images, name, sex, species, color, size } = animalData;
  const profileImage = images.data[0].attributes.url
    ? getFullAPIUrl(images.data[0].attributes.url)
    : '/animalPlaceholder.jpg';

  return (
    <main>
      <PageHeader />
      <div className="grid grid-cols-1 grid-rows-[2fr]  gap-10 rounded-md bg-gray-50 p-3 md:grid-cols-[1fr_2fr] md:grid-rows-1 md:p-7">
        <div className="col-span 2 col-start-1 col-end-2 row-start-1 row-end-2 flex h-[30rem] flex-col items-center rounded-lg bg-white p-7 shadow-lg md:max-h-[35rem]">
          <div className="relative h-[10rem] w-[10rem] overflow-hidden rounded-full ring-2 ring-indigo-600">
            <Image src={profileImage} className="p-1" alt="" objectFit="cover" layout="fill" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-600">{name}</h2>
          <ul className="mt-4 text-center">
            <li>
              <b>Sugu:</b> {sex}
            </li>
            <li>
              <b>Liik:</b> {species}
            </li>
            <li>
              <b>Värvus:</b> {color}
            </li>
            <li>
              <b>Suurus:</b> {size}
            </li>
          </ul>
        </div>
        <div className="col-start-1 row-start-2 row-end-3 md:col-start-2 md:row-start-1">
          <Subsection title="Kirjeldus">
            <p className="md:max-w-[40rem]">{description}</p>
          </Subsection>
          <Subsection className="mt-10" title="Iseloom">
            <CharacteristicSection characteristics={character} />
          </Subsection>
          <Subsection className="mt-10" title="Pildid">
            <ImageCarousel images={getGalleryData(images.data)} />
          </Subsection>
        </div>
      </div>
    </main>
  );
};

export default Animal;
