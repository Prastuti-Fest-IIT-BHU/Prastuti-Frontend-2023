import React from 'react'

import Testimonial from "../../components/Testimonial/Testimonial";
import Faq from "../../components/Faq/Faq";
import About from "../../components/About/About";
import Events from "../../components/Event/Events"
import Footer from "../../components/Footer/Footer";
import StickyNav from "../../components/Navbars/stickyNav";
import Intro from "../../components/Intro/Intro";
import Sponsor from "../../components/Sponsor/Sponsor"
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();





export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
  <motion.div
          className="progress"
          style={{
            scaleX,
            position: "fixed",
            left: "0",
            right: "0",
            height: "4px",
            backgroundColor: "#29ffff",
            top: "0px",
            zIndex: "1000"
          }}
        /> 
      <StickyNav />
      <Intro />
      <About />
      <Events />
      <Faq />
      <Testimonial />
      <Sponsor />
      <Footer />
    </>
  )
}
