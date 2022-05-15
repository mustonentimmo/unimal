import { LeapFrog } from '@uiball/loaders';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharacteristicSection from '@/components/CharacteristicSection/CharacteristicSection';
import { getAnimalDataByID, getShelterDataByID } from '@/shared/utilities';

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
  const { character } = animalData;

  return animalData ? (
    <CharacteristicSection characteristics={character} />
  ) : (
    <div className="flex justify-center align-middle">
      <LeapFrog size={50} speed={2.25} color="#1a56db" />
    </div>
  );
};

export default Animal;
