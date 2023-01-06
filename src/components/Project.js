import React from "react";
//import MainTitle from "./MainTitle";
//import Image from "next/image";
import { Data } from './Data';
//import { ArrowUpIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
//const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {});
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project({ }) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    //console.log(hover);
    let tl = gsap.timeline();
  }, [hover]);
  return (
    <div style={{position:'relative'}}>
        {Data.map((item, index) => (
    <>
    <div
      className={`flex ${
        item.slide && `flex-row-reverse`
      }  w-full py-10 px-2 relative lg:space-x-10 h-[50vh] overflow-hidden`}
      data-aos={item.slide}
    >
      <div  className="absolute top-2 md:top-0 ">
        gfhgh
      </div>
      <div
        className={`flex w-full py-5 flex-col cursor-pointer relative  ${
          item.slide && "pl-10" && "items-end"
        } `}
      >
        <div className="w-8/12 h-full min-w-[300px] min-h-[200px] bg-slate-200 rounded-lg ">
          <img
            src={item.image}
            className="rounded-lg w-full h-full object-cover -z-[2]  "
          />
        </div>
        <div
          className={`${
            item.slide && `flex-row-reverse`
          } flex w-10/12 min-w-[300px] pt-5 pb-1  justify-end items-center space-x-2`}
        >
          <h1 className="relative z-10 text-left BGB">item.info</h1>
          <div className="relative px-2">
          jcdjcndc
            <div
              className="w-5 h-5 bg-[#fe0944] absolute rounded-full top-0 -z-[1] "
            ></div>
          </div>
        </div>
        <div
          className={`  flex items-center space-x-2 pl-10 font-semibold ${
            item.slide && `flex-row-reverse` && ` justify-end pr-10`
          }`}
        >
          <span className="w-8 h-[1px] bg-white"></span>
          <p>date</p>
        </div>
      </div>

      <div
        className={` hidden py-10 lg:inline-flex relative w-[100%] OS ${
          !item.slide && "-left-20"
        } `}
      >
        paragjwdhksjedhfkjdsnn kjnsedkjfnesk nksenfksenfknsd
      </div>
      
    </div>
    </>
     ))}
    </div>
  );
}

export default Project;