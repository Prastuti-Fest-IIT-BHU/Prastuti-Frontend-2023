import React from "react";
import { Data } from './Data';
import { Link } from "react-router-dom";
import "./Events.css"


import { motion} from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Card = (prop) => {
  /*const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });*/

    
  return (

    // <div id="events" style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}}>
    <div id="events">
      <h1 className='EventHead font-Manrope font-extrabold text-6xl mt-[20px] mb-[10px]'>Events</h1>
    {Data.map((item, index) => (
    <>
    
        <div
          key={index}
          id="card" 
          class="pt-8 pb-12 x  {item.float} sm:m-0"
          data-aos={item.slide}
          data-aos-duration="1000"
          // variants={boxVariant}
          // initial="hidden"
          // whileInView={"visible"}
          
        >
            <motion.div class="p-0 w-full min-h-[41vh] lg:w-4/5 mx-auto shadow-lg flex flex-col rounded-lg hover:shadow-xl" style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}}
            whileHover={{ scale: 1.05 }}
            >
              <Link
              to={item.path}
                v-for="card in cards"
                class="flex flex-col md:flex-row overflow-hidden
                                    rounded-lg w-100"
              >
                <div class="h-[41vh] w-auto md:w-1/2 ">
                  <img
                    class="inset-0 h-full w-full object-cover object-center rounded-l-lg" alt="event pic"
                    src={item.image}
                  />
                </div>

                <div class="w-full py-6 px-8 text-gray-800 flex flex-col " style={{background:'linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)'}} >
                  <h3
                    class="text-lg leading-tight truncate mb-2 px-2 py-1"
                    style={{ fontFamily: "Poppins" ,color: '#fff',fontSize:'25px',
                    textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6', backgroundColor:"#003247"}}
                    
                  >
                  
               {item.title}
               
                  </h3>
                  <p class="mt-2 info">
                    {item.information}
                    
                  </p>
                  <p
                    className="text-xl text-gray-700 tracking-wide font-black mt-2"
                    style={{ fontFamily: "Nunito",color: "#003247" }}
                  >
                    {item.infoinfo}
                  </p>
                  <p className="text-base text-gray-700 tracking-wide font-black ">
                  { item.team && <div className=""> Team Event</div> }
                  { !item.team && <div className=""> Solo Event</div> }
                  </p>
                  
                </div>
              </Link>
            </motion.div>
          </div>

        {/* <motion.div
          className="progress"
          style={{
            scaleX,
            position: "fixed",
            left: "0",
            right: "0",
            height: "5px",
            backgroundColor: "#29ffff",
            bottom: "10px",
            zIndex: "10"
          }}
        />  */}
        
    </>
    ))}

    </div>
   );
};

export default Card;
