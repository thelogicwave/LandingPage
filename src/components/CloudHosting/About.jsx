import React from 'react'

const About = () => {
  return (
      <section className="about style-9 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img wow fadeIn">
                <img src="/assets/img/about/about9.svg" alt="Landing Page Experts" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head style-9 mb-40">
                  <h6 className=" wow fadeInUp"> THE LANDING PAGE EXPERTS </h6>
                  <h2 className=" wow fadeInUp"> Transform Your Website into a Lead-Generating Machine </h2>
                </div>
                <p className="wow fadeInUp">
                  Beautiful, high-converting landing pages designed to grow your business. Our team of web designers will create a design that converts visitors into long-term clients.
                </p>
                <ul>
                  <li className="wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/ab9_1.png" alt="Experience" />
                  </span>
                    <p> We specialize in creating high-conversion landing pages across industries like Law, Technology, B2B, Sales, Marketing, Fashion, and more. </p>
                  </li>
                  <li className="wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/ab9_2.png" alt="SEO Driven" />
                  </span>
                    <p> <strong className="color-darkBlue2"> SEO Driven, Mobile Friendly: </strong> Our landing pages are optimized for search engines and designed to look stunning on all devices. </p>
                  </li>
                  <li className="wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/ab9_1.png" alt="Client-Focused" />
                  </span>
                    <p> <strong className="color-darkBlue2"> Client-Focused Results: </strong> We prioritize your goals to make sure each project maximizes your potential for new clients. </p>
                  </li>
                </ul>
                <div className="call-info pt-40 mt-40 wow fadeInUp">
                  <h5> Ready to Boost Your Conversions? </h5>
                  <p>Schedule a free consultation today and start your journey to better business results.</p>
                  {/*<p> Call (+971) 56 484 8434 or Chat Now (International calling fees may apply) </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
