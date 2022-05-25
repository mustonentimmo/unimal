import { LeapFrog } from '@uiball/loaders';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHeader from '@/components/PageHeader/PageHeader';
import ShelterAnimals from '@/components/ShelterAnimals/ShelterAnimals';
import ShelterDetails from '@/components/ShelterDetails/ShelterDetails';
import { getShelterDataByID } from '@/shared/utilities';

import { fetchShelters, sheltersSelector } from '../../../features/sheltersSlice';

const Shelter = () => {
  const router = useRouter();
  const { shelterID } = router.query;
  const dispatch = useDispatch();
  const shelters = useSelector(sheltersSelector);

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const shelterData = getShelterDataByID(shelters, shelterID);

  return (
    <main>
      {shelterData ? (
        <>
          <PageHeader title={shelterData.shelter_name} />
          <ShelterDetails
            description={shelterData.shelter_description}
            contact={shelterData.shelter_contact}
            pictures={shelterData.shelter_pictures.data}
            location={shelterData.shelter_location}
            animalsCount={shelterData.shelter_animals.length}
          />
          <ShelterAnimals animals={shelterData.shelter_animals} shelterID={shelterID} />
        </>
      ) : (
        <div className="flex justify-center align-middle">
          <LeapFrog size={50} speed={2.25} color="#1a56db" />
        </div>
      )}
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.API_HOST + '/api/shelters');
  const shelters = await res.json();

  return {
    props: {
      shelters,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_HOST + '/api/shelters');
  const shelters = await res.json();

  let paths = shelters.data.map((shelter) => `/shelter/${shelter.id}`);

  return { paths, fallback: false };
}

export default Shelter;
