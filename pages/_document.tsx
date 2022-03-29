import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth text-gray-900">
      <Head />
      <body className="mx-auto max-w-[1400px] px-3 md:px-9">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
