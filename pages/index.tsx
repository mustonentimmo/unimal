import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import { Loader } from '@/components/Loader/Loader';
import ShelterCard from '@/components/ShelterCard/ShelterCard';

import { locationFilterSelector } from '../features/filtersSlice';
import { fetchShelters, loadingSelector, sheltersSelector } from '../features/sheltersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const shelters = useSelector(sheltersSelector);
  const isLoading = useSelector(loadingSelector);
  const locationFilter = useSelector(locationFilterSelector);

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const totalShelters = shelters.length;
  const filteringCriteria = (shelter) => {
    if (locationFilter === 'all' || locationFilter === '') {
      return shelters;
    }
    if (
      shelter.attributes.shelter_location !== null &&
      shelter.attributes.shelter_location.county.toLowerCase() === locationFilter.toLowerCase()
    ) {
      return shelter;
    }
  };

  return (
    <>
      <Hero />
      <section id="shelter" className="mt-[3rem]">
        <div className="text-center text-2xl font-bold">Varjupaigad ({totalShelters})</div>
        <Filter />
        <motion.div layout className="flex flex-wrap gap-5 py-7">
          <AnimatePresence>
            {isLoading ? (
              <Loader />
            ) : (
              shelters
                .filter(filteringCriteria)
                .map((shelter: any) => (
                  <ShelterCard
                    key={shelter.id}
                    id={shelter.id}
                    name={shelter.attributes.shelter_name}
                    description={shelter.attributes.shelter_description}
                    image={shelter.attributes.shelter_image}
                  />
                ))
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
