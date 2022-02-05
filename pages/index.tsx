import Head from 'next/head'
import ShelterCard from '@/components/ShelterCard/ShelterCard'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-wrap gap-5">
        <ShelterCard />
        <ShelterCard />
      </section>
    </>
  )
}
