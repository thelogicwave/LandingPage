import React from 'react'

const TopNav = () => {
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

  return (
    <div className="top-navbar style-9">
    <div className="container">
    <div className="row justify-content-between align-items-center gx-0">
    <div className="col-7">
    <div className="top_info">
    <a href="mailto:estifix9@gmail.com" className="me-4">
    <i className="fas fa-envelope-open me-1"></i>
    <span>estifix9@gmail.com</span>
    </a>
    <a href="https://wa.me/971564848434" target="_blank noopener noreferrer">
    <i className="fas fa-phone me-1"></i>
    <span>(+971) 56 484 8434</span>
    </a>
    </div>
    </div>
    </div>
  </div>
</div>

)
}

export default TopNav
