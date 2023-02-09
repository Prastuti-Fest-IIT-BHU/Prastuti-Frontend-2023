import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {IoLogoGooglePlaystore} from "react-icons/io5";
import { IconContext } from "react-icons";
const Footer = () => {

  const handleScroll = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <footer className='footer justify-center bg-[#003247] items-center min-h-[20vh]'>
      <div className='py-5 flex flex-col justify-center items-center'>
        {/* <div className="up flex items-center justify-center max-w-[40vw]  mx-auto " > */}

        <div className="up" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} >
            {/* <Link class-name="" to="/"></Link> */}
            {/* <img className="h-20 sm:max-w-[7vw] sm:drop-shadow-lg sm:w-full sm:h-full mx-auto cursor-pointer" onClick={handleScroll} src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img> */}
            <div className="top flex justify-center items-center cursor-pointer" >
              {/* {isShown && <div className="toptext">Top</div>} */}
            <img className="cursor-pointer" onClick={handleScroll} src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img>
            </div>
            
            
          <div className="vline"></div>
          <div className="conduct"> <a href="https://github.com/Prastuti-Fest-IIT-BHU/Prastuti-Frontend-2023/blob/main/public/code_of_conduct.md" target="_blank" rel="noreferrer">Code of Conduct</a></div>
          {/* <li className="social-links font-['Nunito'] text-[#003247] mx-5 text-l my-4 flex">
          <a href="https://play.google.com/store/apps/details?id=com.prastuti.prastuti_23" target="_blank" rel="noreferrer" 
          className=' h-[20px] w-auto'>
            <IconContext.Provider value={{ className: 'react-icons', size: "2em"  }}><IoLogoGooglePlaystore className=""/></IconContext.Provider>
              </a> 
              </li> */}
              {/* <p className="text-white font-['Nunito'] mt-[5px]">Our App</p> */}
          </div>
          
          <ul className='flex justify-center py-2'>
              <li className="social-links font-['Nunito'] text-white mx-5 text-l my-4">
              <a href="https://twitter.com/fest_prastuti?t=KdlkevmuvhbFQHx63dibXA&s=08" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons'}}><BsTwitter className=""/></IconContext.Provider>
                </a>
              </li>
              <li className='social-links font-["Nunito"] text-white mx-5 text-l my-4 '>
              <a href="https://www.linkedin.com/company/prastuti/" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] text-white mx-5 text-l my-4 '>
              <a href="https://www.facebook.com/prastuti.iitbhu" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] justify-center text-white mx-5 text-l my-4 '>
              <a href="https://www.instagram.com/prastuti.iitbhu/" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] justify-center text-white mx-5 text-l my-4 '>
              <a href="https://www.youtube.com/@prastuti2023" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsYoutube className=""/></IconContext.Provider>
              </a>
              </li>
              
              
            </ul>

      </div>
      </footer>

    </>
  )
}

export default Footer