import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/shelters/`);
  const shelters = await res.json();

  return { pageProps: { shelters } };
};

export default MyApp;
