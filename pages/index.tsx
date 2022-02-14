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

export async function getStaticProps() {
  const res = await fetch(`http://65.108.153.196:1337/api/shelters/`)
  const shelters = await res.json()

  return { props: { shelters } }
}
export default Home
