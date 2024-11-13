import Link from 'next/link';

const ThirdContent = ({ features, rtl }) => {
  return (
    <div  className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/about_s4_img3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <h2 className="mb-30">{ rtl ? 'ركز أكثر مع' : 'Our Designing ' } <span>{ rtl ? 'المظهر الداكن' : 'Services include' }</span> </h2>
              </div>
              <p className="text mb-40">
                { rtl ? 'قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء.' : 'we have team of expert graphic designers' }
              </p>
              <ul>
                {
                  features.map((feature, index) => (
                    <li className={`d-flex align-items-center ${feature.active ? '':'op-4'}`} key={index}>
                      <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                      <h6 className="fw-bold">{ feature.title }</h6>
                    </li>
                  ))
                }
              </ul>
              <Link href="/page-contact-app">
                <a className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                  <small>{ rtl ? 'اكتشف الآن' : 'Discovery Now' }</small>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" />
    </div>
  )
}

export default ThirdContent