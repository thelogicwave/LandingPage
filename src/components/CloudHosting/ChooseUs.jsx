import React from 'react'
import Link from 'next/link'

const ChooseUs = () => {
  return (
      <section className="choose-us style-9 section-padding bg-gray2">
        <div className="container">
          <div className="section-head text-center style-9 mb-80 wow fadeInUp">
            <h6> Why Choose Us? </h6>
            <h2> The Landing Page Experts: From Vision to Success </h2>
          </div>
          <div className="content">
            <ul className="nav nav-pills mb-3 wow fadeInUp" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="choose1-tab" data-bs-toggle="pill" data-bs-target="#choose1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  <img src="/assets/img/icons/features/9.svg" alt="" /> Custom Design
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="choose2-tab" data-bs-toggle="pill" data-bs-target="#choose2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  <img src="/assets/img/icons/features/10.svg" alt="" /> SEO Optimization
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="choose3-tab" data-bs-toggle="pill" data-bs-target="#choose3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <img src="/assets/img/icons/features/11.svg" alt="" /> Mobile Responsiveness
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="choose4-tab" data-bs-toggle="pill" data-bs-target="#choose4" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <img src="/assets/img/icons/features/12.svg" alt="" /> Performance Testing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="choose5-tab" data-bs-toggle="pill" data-bs-target="#choose5" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <img src="/assets/img/icons/features/13.svg" alt="" /> Ongoing Support
                </button>
              </li>
            </ul>
            <div className="tab-content pt-2 wow fadeInUp" id="pills-tabContent">
              <div className="tab-pane fade show active" id="choose1" role="tabpanel">
                <p className="text-center fs-6 color-darkBlue2"> Our team creates visually stunning, tailored landing pages to fit your brand and target audience. </p>
                <div className="feat-content">
                  <div className="row align-items-center gx-0">
                    <div className="col-lg-6">
                      <div className="img img-cover">
                        <img src="/assets/img/choose_us/3d_vector1.png" alt="Custom Design" />
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="info mt-4 mt-lg-0">
                        <div className="icon">
                          <img src="/assets/img/icons/cart_light.png" alt="Custom Design Icon" />
                        </div>
                        <h2> Custom Designs that Convert </h2>
                        <p> Our designs are created with a focus on aesthetics and functionality, ensuring each visitor's journey is engaging and impactful. </p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="tab-pane fade" id="choose2" role="tabpanel">
                <p className="text-center fs-6 color-darkBlue2"> Maximize visibility with SEO-optimized landing pages to drive traffic and convert leads. </p>
                <div className="feat-content">
                  <div className="row align-items-center gx-0">
                    <div className="col-lg-6">
                      <div className="img img-cover">
                        <img src="/assets/img/choose_us/choose_brands.png" alt="SEO Optimization" />
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="info mt-4 mt-lg-0">
                        <div className="icon">
                          <img src="/assets/img/icons/ab9_2.png" alt="SEO Icon" />
                        </div>
                        <h2> SEO Optimized for Success </h2>
                        <p> Our landing pages are built to rank, enhancing organic search visibility to drive targeted traffic. </p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="tab-pane fade" id="choose3" role="tabpanel">
                <p className="text-center fs-6 color-darkBlue2"> Our landing pages are designed to be responsive, ensuring a seamless experience on any device. </p>
                <div className="feat-content">
                  <div className="row align-items-center gx-0">
                    <div className="col-lg-6">
                      <div className="img img-cover">
                        <img src="/assets/img/choose_us/3d_vector1.png" alt="Mobile Responsiveness" />
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="info mt-4 mt-lg-0">
                        <div className="icon">
                          <img src="/assets/img/icons/code3d.png" alt="Mobile Icon" />
                        </div>
                        <h2> Mobile Responsiveness </h2>
                        <p> Our designs look great on any device, helping you reach customers on the go with a fully optimized experience. </p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="tab-pane fade" id="choose4" role="tabpanel">
                <p className="text-center fs-6 color-darkBlue2"> Each page undergoes rigorous testing for speed, functionality, and user experience. </p>
                <div className="feat-content">
                  <div className="row align-items-center gx-0">
                    <div className="col-lg-6">
                      <div className="img img-cover">
                        <img src="/assets/img/choose_us/choose9.png" alt="Performance Testing" />
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="info mt-4 mt-lg-0">
                        <div className="icon">
                          <img src="/assets/img/icons/ab9_2.png" alt="Performance Icon" />
                        </div>
                        <h2> Performance Testing </h2>
                        <p> We test each design to ensure fast loading times and seamless functionality, providing an optimal user experience. </p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="tab-pane fade" id="choose5" role="tabpanel">
                <p className="text-center fs-6 color-darkBlue2"> We provide ongoing support to ensure your page continues to deliver results. </p>
                <div className="feat-content">
                  <div className="row align-items-center gx-0">
                    <div className="col-lg-6">
                      <div className="img img-cover">
                        <img src="/assets/img/choose_us/circles.png" alt="Ongoing Support" />
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="info mt-4 mt-lg-0">
                        <div className="icon">
                          <img src="/assets/img/icons/code3d.png" alt="Support Icon" />
                        </div>
                        <h2> Ongoing Support </h2>
                        <p> After launch, our team continues to support you, making sure your landing page remains effective and up-to-date. </p>
                      </div>
                    </div>
                  </div>
                  <Link href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ChooseUs
