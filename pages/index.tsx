import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import ShelterCard from '@/components/ShelterCard/ShelterCard';
import { Spinner } from '@/components/Spinner/Spinner';

import { fetchShelters, loadingSelector, sheltersSelector } from '../features/sheltersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const shelters = useSelector(sheltersSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const totalShelters = shelters.length;

  return (
    <>
      <Hero />
      <section id="shelter" className="mt-[3rem]">
        <div className="text-center text-2xl font-bold">Varjupaigad ({totalShelters})</div>
        <Filter />
        <div className="flex flex-wrap gap-5 py-7">
          {isLoading ? (
            <Spinner />
          ) : (
            shelters.map((shelter: any) => (
              <ShelterCard
                key={shelter.id}
                id={shelter.id}
                name={shelter.attributes.shelter_name}
                description={shelter.attributes.shelter_description}
                image={shelter.attributes.shelter_image}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
