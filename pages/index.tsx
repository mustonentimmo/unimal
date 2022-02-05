import Head from 'next/head'
import Shelter from '@/components/Shelter/Shelter'

export default function Home() {
  return (
    <section className="flex flex-wrap gap-5">
      <Shelter />
      <Shelter />
      <Shelter />
      <Shelter />
    </section>
  )
}
