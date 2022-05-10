import { LeapFrog } from '@uiball/loaders';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAnimalDataByID, getShelterDataByID } from '@/shared/utilities';

import { fetchShelters, sheltersSelector } from '../../../../features/sheltersSlice';

const Animal = () => {
  const router = useRouter();
  const { shelterID, animalID } = router.query;

  const dispatch = useDispatch();
  const shelters = useSelector(sheltersSelector);

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const shelter = shelters && getShelterDataByID(shelters, shelterID);
  const animalData = shelter && getAnimalDataByID(shelter.shelter_animals, animalID);

  return animalData ? (
    'loaded'
  ) : (
    <div className="flex justify-center align-middle">
      <LeapFrog size={50} speed={2.25} color="#1a56db" />
    </div>
  );
};

export default Animal;
