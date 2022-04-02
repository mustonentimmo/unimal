import React from 'react';

import Header from '@/components/Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
