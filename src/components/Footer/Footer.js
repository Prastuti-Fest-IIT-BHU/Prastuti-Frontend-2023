import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { IconContext } from "react-icons";
const Footer = () => {

  const handleScroll = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  return (
    <>
      <footer className='footer justify-center bg-[#003247] items-center min-h-[20vh]'>
      <div className='py-5'>
        {/* <div className="up flex items-center justify-center max-w-[40vw]  mx-auto " > */}
        <div className="up" >
            {/* <Link class-name="" to="/"></Link> */}
            {/* <img className="h-20 sm:max-w-[7vw] sm:drop-shadow-lg sm:w-full sm:h-full mx-auto cursor-pointer" onClick={handleScroll} src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img> */}
            <img className="cursor-pointer" onClick={handleScroll} src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img>
            
          <div className="vline"></div>
          <div className="conduct"> <a href="/">Code of Conduct</a></div>
          </div>
          <ul className='flex justify-center py-2'>
              <li className="social-links font-['Nunito'] text-white mx-5 text-l my-4">
              <a href="https://twitter.com/fest_prastuti?t=KdlkevmuvhbFQHx63dibXA&s=08" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsGithub className="sm:hidden"/></IconContext.Provider>
                <p className='hidden sm:flex'>Twitter</p></a>
              </li>
              <li className='social-links font-["Nunito"] text-white mx-5 text-l my-4 '>
              <a href="https://www.linkedin.com/company/prastuti/" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>LinkedIn</p></a>
              </li>
              <li className='social-links font-["Nunito"] text-white mx-5 text-l my-4 '>
              <a href="https://www.facebook.com/prastuti.iitbhu" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>Facebook</p></a>
              </li>
              <li className='social-links font-["Nunito"] justify-center text-white mx-5 text-l my-4 '>
              <a href="https://www.instagram.com/prastuti.iitbhu/" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>Instagram</p></a>
              </li>
            </ul>

      </div>
      </footer>

    </>
  )
}

export default Footer