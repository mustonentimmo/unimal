import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import ScrollToTop from '@/components/ScrollToTop/scrollToTop';

import { store } from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {isVisible && <ScrollToTop />}
    </Provider>
  );
};

export default MyApp;
