import footerLinks from '@data/CloudHosting/footerLinks.json';

const Gfooter = () => {
  return (
    <footer className="style-9">
      <div className="container">
        <div className="content">
          <div className="row gx-0 justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <h5 className="foot-title"> About Estifix </h5>
              <div className="links">
                <ul className="d-flex flex-wrap">
                  {
                    footerLinks.links.map((link, index) => (
                      <li className="w-50" key={index}>
                        <a href={link.href}> { link.text } {link.badge && <small className="text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-1 lh-1"> { link.badge } </small>} </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="foot-title"> Resources </h5>
              <div className="links">
                <ul className="">
                  {
                    footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}> { link.text } </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="foot-title"> Shopping </h5>
              <div className="links">
                <ul>
                  {
                    footerLinks.shopping.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}> { link.text } </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-2 border-1 border-end brd-light">
              <a className="navbar-brand pe-4" href="#">
                <img src="/assets/img/logo_9.png" alt="" />
              </a>
            </div>
            <div className="col-lg-7">
              
            </div>
            <div className="col-lg-3 col-sm-6 text-lg-end">
              <div className="social-icons">
                <a href="#" className="me-1"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#" className="me-1"> <i className="fab fa-twitter"></i> </a>
                {/* <a href="#" className="me-1"> <i className="fab fa-behance"></i> </a> */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Gfooter;