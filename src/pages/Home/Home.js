import React from 'react'
import { useState } from 'react';
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
  // const spinner = document.getElementById('spinner');
  // const [landingLoader, setlandingLoader] = useState((spinner.style.display !== "none")? true: false);
  // if(spinner && (spinner.style.display !== "none")){
  //   setTimeout(()=>{
  //     setlandingLoader(false)
  //     spinner.style.backgroundColor = "transparent";
  //     spinner.style.opacity = "0"
  //     spinner.style.transition = "all 1s ease-in"; 
  //     spinner.style.visibility = "none"   
  //   },2000)
  //   setTimeout(()=>{
  //     spinner.style.display="none"
  //   },3000)
  // }

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
      <Testimonial />
      <Faq />
      <Sponsor />
      <Footer />
    </>
  )
}
