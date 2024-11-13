import Navbar from '@components/Navbars/CloudNav';
import TopNav from '@components/Navbars/CloudNav/TopNav';
import Link from 'next/link';

const Header = () => {
  return (
      <header className="style-9">
        {/*<TopNav />*/}
        <Navbar />
        <div className="navs-container">
          <div className="hosting-links py-4 text-white text-center">
            <div className="container">
              <div className="links">
                <Link href="#section-discovery" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Discovery Phase </Link>
                <Link href="#section-design" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Design & Development </Link>
                <Link href="#section-optimization" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Optimization & Testing </Link>
                <Link href="#section-launch" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Launch & Support </Link>
                <Link href="#cta" className="hover-darkBlue"> Call to Action </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content section-padding">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="info">
                  <h6> THE LANDING PAGE EXPERTS </h6>
                  <h1> Transform Your Website into a <span>Lead-Generating Machine</span> </h1>
                  <p>Beautiful, high-converting landing pages designed to grow your business. Our team will create a design that converts visitors into long-term clients.</p>
                  <ul>
                    <li>SEO-driven, mobile-friendly designs</li>
                    <li>Client-focused results for repeat business</li>
                    <li>Over 15 years of experience across industries</li>
                  </ul>
                  <Link href="#cta" className="butn border-2 border-white border rounded-3 text-white mt-40">
                    <span> Schedule a Free Consultation </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/img/header/header9.svg" alt="Landing Page Experts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;
