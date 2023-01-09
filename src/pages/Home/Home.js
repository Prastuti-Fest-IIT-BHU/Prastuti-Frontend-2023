import React from 'react'

import Testimonial from "../../components/Testimonial/Testimonial";
import Faq from "../../components/Faq/Faq";
import About from "../../components/About/About";
import Events from "../../components/Event/Events"
import Footer from "../../components/Footer/Footer";
import StickyNav from "../../components/Navbars/stickyNav";
import Intro from "../../components/Intro/Intro";
import Sponsor from "../../components/Sponsor/Sponsor"



export default function Home() {
  return (
    <>
                <StickyNav />
                <Intro />
                <About/>
                <Events/>
                <Faq />
                <Testimonial />
                <Sponsor/>               
                <Footer />
              </>
  )
}
