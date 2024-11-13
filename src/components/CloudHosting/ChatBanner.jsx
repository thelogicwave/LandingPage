import React from 'react'
import Link from 'next/link'

const ChatBanner = () => {
  return (
      <section className="chat-banner style-9">
        <div className="container">
          <div className="content text-center wow zoomIn">
            <div className="section-head text-center style-9">
              <h6 className="text-white"> The Landing Page Experts </h6>
              <h2 className="text-white"> Transform Your Website with Just One Click <br /> to a Lead-Generating Machine </h2>
              <p className="text-white mt-3">
                Discover how our beautifully designed, high-converting landing pages can grow your business and turn visitors into loyal clients.
              </p>
              {/*<div className="btns mt-40">*/}
              {/*  <Link href="/page-contact-app" className="butn bg-darkBlue2 border-darkBlue2 border-2 text-white rounded-3">*/}
              {/*    <span> Book a Free Consultation </span>*/}
              {/*  </Link>*/}
              {/*  <Link href="/page-contact-app" className="butn text-white border-2 border-white rounded-3 ms-3">*/}
              {/*    <span> Learn More </span>*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <img src="/assets/img/chat_back9_icons.png" alt="Background Icons" className="img_back slide_up_down" />
      </section>
  )
}

export default ChatBanner
