import communityData from '@data/Contact/community.json';
import Link from 'next/link';

const Community = () => {
  return (
    <section className="community section-padding style-5">
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <small className="title_small">Contact us</small>
          <h2 className="mb-20">Get In <span>Touch</span> </h2>
          <p>We will contact again after receive your request in 24h</p>
        </div>
        <div className="content rounded-pill">
          {
              <div className="commun-card" >
              <div className="icon icon-45">
                <img src='/assets/img/icons/location.png' alt="" />
              </div>
              <div className="inf">
                <h5>UNITED ARAB EMIRATES</h5>
              </div>
            </div>
          }

          {
              <div className="commun-card" >
              <div className="icon icon-45">
                <img src='/assets/img/icons/gmail.png' alt="" />
              </div>
              <div className="inf">
              <Link href="mailto:estifix9@gmail.com" className="me-4">
                <h5>estifix9@gmail.com</h5>
                </Link>
              </div>
            </div>
          }

          {
              <div className="commun-card" >
              <div className="icon icon-45">
                <img src='/assets/img/icons/msg3d.png' alt="" />
              </div>
              <div className="inf">
                
                {/* <h5>(+971) 56 484 8434</h5> */}
                <Link href="https://wa.me/971564848434" target="_blank"  rel="noopener  noreferrer">
                <h5>(+971) 56 484 8434</h5>
                </Link>
              </div>
            </div>
          }



        </div>
      </div>
    </section>
  )
}

export default Community