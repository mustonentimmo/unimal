import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import Header from '@/components/Header/Header';

export default function Document() {
  return (
    <Html className="scroll-smooth text-gray-900">
      <Head>
        <title>Unimal</title>
      </Head>
      <body className="mx-auto max-w-[1400px] px-3 md:px-9">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
