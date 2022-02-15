import Head from 'next/head'
import ShelterCard from '@/components/ShelterCard/ShelterCard'
import Hero from '@/components/Hero/Hero'

const Home = ({ shelters }) => {
  console.log(shelters.data)
  const totalShelter = shelters.data.length

  return (
    <>
      <Hero />
      <section id="shelter" className="mt-[3rem]">
        <div className="text-center text-2xl font-bold">
          Varjupaigad ({totalShelter})
        </div>
        <div className="flex flex-wrap gap-5 py-7">
          {shelters.data.map((shelter) => (
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
  )
}

export default Home
