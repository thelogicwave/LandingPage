import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
import SideMenu from '@components/CloudHosting/SideMenu';
import Header from '@components/CloudHosting/Generalheader';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import header from '@components/CloudHosting/Generalheader'
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import Community from '@components/Contact/Community';
import Form from '@components/Contact/Form';
// import Map from '@components/Contact/Map';
import Footer from '@components/CloudHosting/Footer';

const PageContactApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Estifix - Contact App</title>
      </Head>
   <header/>
      <MainLayout>

      <SideMenu />
        <Header />
      
        <main className="contact-page style-5">
          <Community />
          <Form />
          {/* <Map /> */}
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default PageContactApp;