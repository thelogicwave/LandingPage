import Header from '@components/CloudHosting/Header';import Navbar from '@components/Navbars/CloudNav';
import Link from 'next/link';


const Generalheader = () => {
  return (
    <header className="style-9">
   
      <Navbar />
      <div className="navs-container">
        <div className="hosting-links py-4 text-white text-center">
          <div className="container">
            <div className="links">
            <Link href="#section2" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Domain </Link>
              <Link href="#section3" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Web Hosting </Link>
              <Link href="/page-services-app#section4" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Web developement </Link>
              <Link href="/page-services-app#section5" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Graphic Designings </Link>
              <Link href="/page-services-app" className="hover-darkBlue"> Social Media Marketing </Link>
            </div>
          </div>
        </div>
      </div>
   
    </header>
  )
}

export default Generalheader;