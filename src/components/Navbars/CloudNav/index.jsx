import { useEffect, useRef } from 'react';
import Link from 'next/link';
import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  const toggleSideMenu = (e) => {
    e.preventDefault();

    document.querySelector('.side_menu_btn').classList.toggle('active');

    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.toggle('show');
    side_overlay && side_overlay.classList.toggle('show');
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-dark style-2" ref={navbarRef}>
        <div className="container content">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/tle.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
              <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Link href="#">
                  <a className="nav-link">
                    Home
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">
                    Hosting
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">
                    Services
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            {/*<div className="nav-side">*/}
            {/*  <div className="d-flex align-items-center">*/}
            {/*    <a href="#0" className="side_menu_btn" onClick={toggleSideMenu}>*/}
            {/*      <img src="/assets/img/icons/4dots_light.png" alt="" />*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </nav>
  )
}

export default Navbar;
