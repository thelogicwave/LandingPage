import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/CloudHosting/Generalheader';
import SideMenu from '@components/CloudHosting/SideMenu';
import Navbar from '@components/Navbars/CloudNav';
import TopNav from '@components/Navbars/CloudNav/TopNav';
// import TopNav from '@components/Navbars/TopNav';
// import Navbar from '@components/Navbars/AppNav';
import Services from '@components/App/Services';
import About from '@components/App/About';
// import Testimonials from '@components/App/Testimonials';
 import Footer from '@components/CloudHosting/Gfooter';

const PageServicesApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Estifix - Services App</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        {/* <Navbar navbarRef={navbarRef} /> */}
        <Header/>
        <SideMenu />
        <main className="services-page style-5">
          <Services />
          <About noFirstContent noIntegration noWave />
  
        </main>
        <Footer/>
     
      </MainLayout>
    </>
  )
}

export default PageServicesApp;