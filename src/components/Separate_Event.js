import React from 'react'
import { Link } from "react-router-dom";
import '../assets/seperateEvents/SeperateEvents.css'
const Separate_Event = ({data}) => {
      return(
        <>
          <div className="min-h-screen min-w-screen m-0 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${data.imgpath})`}} >
              <div className=" min-h-screen w-full md:w-3/5 lg:w-[45%] bg-black md:opacity-[0.8] opacity-[0.7] text-white p-[3rem]">
                <h1 className= "font-bold text-xl xl:text-3xl md:text-2xl mt-10 mb-4 font-Manrope" >{data.title}</h1>
                <h2 className="md:text-xl xl:text-2xl mb-4 text-[#29ffff] font-Manrope text-lg">{data.subtitle}</h2>
                <p className="md:text-md xl:text-lg text-justify font-Catamaran text-md mb-4">{data.eventInfo}</p>
                <h3 className="md:text-md xl:text-lg text-justify font-Catamaran text-md">Participants : <span>000</span></h3>
                <Link to='/login'>
                  <button className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  " >Register</button>
                </Link>
              </div>
          </div>
        </>
    );
}
export default Separate_Event;