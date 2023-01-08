import React from "react";
import { Data } from './Data';


 import { motion, useScroll, useSpring } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = (prop) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  return (

    <div  style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}}>
    {Data.map((item, index) => (
    <>
    
        <div
          id="card" 
          class="pt-8 pb-12 x  {item.float}"
          data-aos={item.slide}
          data-aos-duration="1000"
          // variants={boxVariant}
          // initial="hidden"
          // whileInView={"visible"}
          
        >
            <motion.div class="container w-100 lg:w-4/5 mx-auto shadow-md flex flex-col rounded-lg" style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}}
            whileHover={{ scale: 1.05 }}
            >
              <a
              href="/"
                v-for="card in cards"
                class="flex flex-col md:flex-row overflow-hidden
                                    rounded-lg mt-4 w-100 mx-2"
              >
                <div class="h-64 w-auto md:w-1/2">
                  <img
                    class="inset-0 h-full w-full pt-2 pb-2 object-cover object-center rounded-lg" alt="event pic"
                    src={item.image}
                  />
                </div>

                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between" style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}} >
                  <h3
                    class="text-lg leading-tight truncate"
                    style={{ fontFamily: "Manrope" ,color: '#fff',fontSize:'25px',
                    textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6'}}
                    
                  >
               {item.title}
                  </h3>
                  <p class="mt-2" style={{ fontFamily: "Catarman" ,color: "#003247"}}>
                    {item.information}
                  </p>
                  <p
                    class="text-sm text-gray-700 tracking-wide font-semibold mt-2"
                    style={{ fontFamily: "Catarman",color: "#003247" }}
                  >
                    {item.infoinfo}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

        <motion.div
          className="progress"
          style={{
            scaleX,
            position: "fixed",
            left: "0",
            right: "0",
            height: "5px",
            backgroundColor: "black",
            bottom: "10px",
          }}
        /> 
        
    </>
    ))}

    </div>
   );
};

export default Card;
