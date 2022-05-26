import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Document() {
  return (
    <Html className="scroll-smooth text-gray-900">
      <Head />
      <body className="mx-auto max-w-[1400px] px-3 md:px-9">
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
