import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components

import Navbar from '@components/Navbars/SaasNav';
import Features from '@components/Saas/Features';
import Services from '@components/Saas/Services';
import About from '@components/Saas/About';
import Testimonials from '@components/Saas/Testimonials';
import Pricing from '@components/Saas/Pricing';


const PageServices5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Estifix - Services 5</title>
      </Head>

      <MainLayout>
       
        <Navbar navbarRef={navbarRef} />
        <main className="services-page style-5">
          <Features isServices />
          <Services />
          <About noPaddingTop />
          <Testimonials />
          <Pricing />
        </main>
    
      </MainLayout>
    </>
  )
}

export default PageServices5;