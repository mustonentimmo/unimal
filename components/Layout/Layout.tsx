import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
