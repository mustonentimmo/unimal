import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import ShelterCard from '@/components/ShelterCard/ShelterCard';

const Home = ({ shelters }: any) => {
  const totalShelter = shelters.data.length;

  return (
    <>
      <Hero />
      <section id="shelter" className="mt-[3rem]">
        <div className="text-center text-2xl font-bold">Varjupaigad ({totalShelter})</div>
        <Filter />
        <div className="flex flex-wrap gap-5 py-7">
          {shelters.data.map((shelter: any) => (
            <ShelterCard
              key={shelter.id}
              id={shelter.id}
              name={shelter.attributes.shelter_name}
              description={shelter.attributes.shelter_description}
              image={shelter.attributes.shelter_image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
