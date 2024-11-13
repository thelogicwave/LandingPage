import Link from 'next/link';
import React from 'react'

const SideMenu = () => {
  const toggleSideMenu = (e) => {
    e.preventDefault();
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.remove('show');
    side_overlay && side_overlay.classList.remove('show');
  }

  return (
    <>
      <div className="side_menu style-7 dark_theme" id="side_menu">
        <a href="#0" className="side_menu_cls" onClick={toggleSideMenu}>
          <img src="/assets/img/icons/4dots_light.png" alt="" />
        </a>
        <div className="content">
          <div className="logo">
            <a href="#" className="w-100">
              <img src="/assets/img/estifix" alt="" />
            </a>
          </div>
          <div className="pages_links">
            <ul>
              <li><Link href="/home-cloud-hosting" className="active">Home</Link></li>
              <li><Link href="/home-cloud-hosting/#section2">Domain</Link></li>
              <li><Link href="/home-cloud-hosting/#section3">Hosting</Link></li>
              <li><Link href="/page-services-app">Services</Link></li>
              <li><Link href="/page-contact-app">contact</Link></li>
              {/* <li><a href="#">contact</a></li>
              <li><a href="#">shop</a></li> */}
            </ul>
          </div>
          <div className="side_foot">
            <h5> get in touch </h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="https://wa.me/971564848434"  target="_blank"  rel="noopener  noreferrer"> <i className="fal fa-phone-alt me-2"></i> (+971) 56 484 8434 </a>
              </div>
              <div className="col-lg-6">
                <a href="mailto:estifix9@gmail.com" className="me-4"> <i className="fal fa-envelope me-2 mt-4 mt-lg-0"></i> estifix9@gmail.com </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay"></div>
    </>
  )
}

export default SideMenu