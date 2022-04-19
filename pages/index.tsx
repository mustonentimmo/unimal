import { Jelly } from '@uiball/loaders';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import ShelterCard from '@/components/ShelterCard/ShelterCard';

import { locationFilterSelector } from '../features/filtersSlice';
import { fetchShelters, loadingSelector, sheltersSelector } from '../features/sheltersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const shelters = useSelector(sheltersSelector);
  const isLoading = useSelector(loadingSelector);
  const locationFilter = useSelector(locationFilterSelector);

  const totalShelters = shelters.length;

  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  const filteringCriteria = (shelter: any) => {
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
      <Hero totalShelters={totalShelters} />
      <section id="shelter" className="mt-[3rem]">
        <Filter />
        <motion.div layout className="grid gap-4 py-7 sm:grid-cols-1 lg:grid-cols-3">
          <AnimatePresence>
            {isLoading ? (
              <Jelly size={80} speed={0.9} color="black" />
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
