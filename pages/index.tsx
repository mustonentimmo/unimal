import { LeapFrog } from '@uiball/loaders';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import CTASection from '@/components/CTASection/CTASection';
import Hero from '@/components/Hero/Hero';
import SelectField from '@/components/SelectField/SelectField';
import ShelterCard from '@/components/ShelterCard/ShelterCard';
import { counties } from '@/shared/filters';
import { getFullAPIUrl } from '@/shared/utilities';

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
      <CTASection
        topTitle="Oled varjupaiga haldaja"
        bottomTitle="ning soovid Unimaliga ühineda?"
        buttonText="võta ühendust"
        href="mailto:timmo.mustonen@voco.ee"
      />
      <section className="mt-[6rem]">
        <div className="inline-flex rounded-lg bg-white px-9 py-5 drop-shadow-xl ">
          <div className="mr-3 flex items-center justify-center rounded-md bg-indigo-600 p-3 text-white shadow-md">
            <MdLocationOn size="1.25em" />
          </div>
          <SelectField
            placeholder="Vali"
            options={counties}
            defaultValue={{ label: 'Kõik', value: 'Kõik' }}
            onChange={(location) => dispatch(setLocationFilter(location))}
          />
        </div>
        <motion.div
          layout
          initial={false}
          className="grid gap-5 py-10 sm:grid-cols-1 lg:grid-cols-3"
        >
          <AnimatePresence>
            {isLoading ? (
              <motion.div layout className="align-center col-span-full flex justify-center">
                <LeapFrog size={50} speed={2.25} color="#1a56db" />
              </motion.div>
            ) : (
              shelters.filter(filteringCriteria).map((shelter: any) => {
                const logoPath = shelter.attributes.shelter_logo.data.attributes.url;
                const logo = logoPath ? getFullAPIUrl(logoPath) : '/placeholder.svg';

                return (
                  <ShelterCard
                    key={shelter.id}
                    id={shelter.id}
                    name={shelter.attributes.shelter_name}
                    description={shelter.attributes.shelter_description}
                    logo={logo}
                    county={shelter.attributes.shelter_location.county}
                    animalsCount={shelter.attributes.shelter_animals.length}
                  />
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
