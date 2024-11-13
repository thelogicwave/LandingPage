import plans from '@data/CloudHosting/plans.json';
import Link from 'next/link';

const Pricing = () => {
  return (
    <section id="section3" className="pricing style-9 section-padding bg-gray2">
      <div className="container">
        <div className="section-head text-center style-9 mb-80 wow fadeInUp">
          <h6> best plans </h6>
          {/*<h2> Hosting Plans Include </h2>*/}
          <p> Free to focus on growing your business, let us handle your site </p>
        </div>
        {/*<div className="content">*/}
        {/*  <div className="row">*/}
        {/*    {*/}
        {/*      plans.map((plan, index) => (*/}
        {/*        <div className="col-lg-4" key={index}>*/}
        {/*          <div className="pricing-card wow fadeInUp">*/}
        {/*            <div className="card-head">*/}
        {/*              <h5> { plan.title } </h5>*/}
        {/*              <p> { plan.description } </p>*/}
        {/*            </div>*/}
        {/*            <div className="pricing-cont">*/}
        {/*              <h2 className="price"> ${plan.price} <small> /mo </small> </h2>*/}
        {/*              <p className="hightLight"> { plan.highlight } </p>*/}
        {/*              <p className="color-999"> { plan.text } </p>*/}
        {/*              <Link href="#" className="butn border-2 border-darkBlue2 border rounded-3 color-darkBlue2 fw-bold mt-30 w-100 mb-20">*/}
        {/*                <span> Purchase Plan </span>*/}
        {/*              </Link>*/}
        {/*              <ul>*/}
        {/*                {*/}
        {/*                  plan.features.map((feature, i) => (*/}
        {/*                    <li key={i}> */}
        {/*                      <p><strong className="color-darkBlue2"> { feature.value } </strong> { feature.title } </p> */}
        {/*                      <span className="icon"> <i className="fal fa-check"></i> </span> */}
        {/*                    </li>*/}
        {/*                  ))*/}
        {/*                }*/}
        {/*              </ul>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      ))*/}
        {/*    }*/}
        {/*  </div>*/}

        {/*</div>*/}

      </div>
    </section>
  )
}

export default Pricing