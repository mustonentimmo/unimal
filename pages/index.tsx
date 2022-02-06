import Head from 'next/head'
import ShelterCard from '@/components/ShelterCard/ShelterCard'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <div className="text-center text-2xl font-bold">Varjupaigad ()</div>
        <div className="flex flex-wrap gap-5 py-10">
          <ShelterCard />
          <ShelterCard />
        </div>
      </section>
    </>
  )
}
