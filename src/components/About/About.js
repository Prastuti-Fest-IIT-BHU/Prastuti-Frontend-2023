import React from 'react'
import './About.css'
const About = () => {

  return (
    <>
      {/* <video autoPlay muted loop className="myVideo">
      <source src={bgv} type="video/mp4"/>
      <source src={bgv} type="video/ogg"/>

      </video> */}
      <div id="about">
      <h1 className='aboutHead font-Manrope font-extrabold text-6xl '>About Us</h1>
      <h4 class="aboutPara  text-xl text-justify lg:text-1.5xl sm:w-[60%]">Prastuti was started as an All India Students’ Paper Presentation contest organized by the Electrical Engineering Society (EES) in 2001. It was Prof. S.N. Mahendra’s pioneering design that materialized the idea of Prastuti as an event. </h4>

      <h4 class="aboutPara text-xl text-justify lg:text-1.5xl sm:w-[60%]">Since then, Prastuti has grown in eminence and, through its nationwide notability, has impacted many curious minds. The primary intention behind organizing Prastuti is to stimulate research instincts and instill an analytical spirit amongst the scholars of various technical institutes. </h4>

      <h4 class="aboutPara text-xl text-justify lg:text-1.5xl sm:w-[60%]">Over the years, as technology has developed, we also expanded our horizons. We give all the young minds a first-hand experience of the fast-paced technological world by conducting new advanced events. The Electrical Engineering department of IIT (BHU), Varanasi, following its glorious legacy, proudly presents the 23rd iteration of its annual fiesta from April 14th to April 16th, 2022. This year, Prastuti emerges to be better than ever by putting forward a series of innovative competitions in Power Electronics, Digital Electronics, Analog Electronics, DSA, Software Development, Artificial Intelligence and Machine Learning, thereby taking you through the technological renaissance.</h4>
      </div>
    </>
  )
}

export default About