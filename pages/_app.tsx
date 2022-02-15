import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async () => {
  const res = await fetch(`http://65.108.153.196:1337/api/shelters/`)
  const shelters = await res.json()

  return { pageProps: { shelters } }
}

export default MyApp
