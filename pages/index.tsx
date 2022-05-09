import { LeapFrog } from '@uiball/loaders';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Hero from '@/components/Hero/Hero';
import SelectField from '@/components/SelectField/SelectField';
import ShelterCard from '@/components/ShelterCard/ShelterCard';
import { counties } from '@/shared/filters';

import { locationFilterSelector, setLocationFilter } from '../features/filtersSlice';
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
      <section className="mt-[3rem]">
        <SelectField
          label="Maakond"
          placeholder="Vali"
          options={counties}
          defaultValue={{ label: 'Kõik', value: 'Kõik' }}
          onChange={(location) => dispatch(setLocationFilter(location))}
        />
        <motion.div layout className="grid gap-4 py-7 sm:grid-cols-1 lg:grid-cols-3">
          <AnimatePresence>
            {isLoading ? (
              <motion.div layout className="align-center col-span-full flex justify-center">
                <LeapFrog size={50} speed={2.25} color="#1a56db" />
              </motion.div>
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
                    location={shelter.attributes.shelter_location}
                    animalsCount={shelter.attributes.shelter_animals.length}
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
