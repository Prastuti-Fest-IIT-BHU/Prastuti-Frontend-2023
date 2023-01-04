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
      <footer className='footer justify-center bg-[#003247] items-center min-h-[35vh]'>
      <div className='py-5'>
        <div className="py-4 max-w-[40vw] sm:max-w-[10vw] mx-auto cursor-pointer" onClick={handleScroll}>
            {/* <Link class-name="" to="/"></Link> */}
            <img className="w-40 h-40 sm:drop-shadow-lg sm:w-full sm:h-full mx-auto" src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img>
          </div>
          <ul className='flex justify-center'>
              <li className='social-links font-["Manrope"] text-white mx-5 text-xl my-4 '>
              <a href="https://www.facebook.com/prastuti.iitbhu"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook/></IconContext.Provider>
              <p className='hidden sm:flex'>Facebook</p></a>
              </li>
              <li className='social-links font-["Manrope"] justify-center text-white mx-5 text-xl my-4 '>
              <a href="https://www.instagram.com/prastuti.iitbhu/"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram/></IconContext.Provider>
              <p className='hidden sm:flex'>Instagram</p></a>
              </li>
              <li className='social-links font-["Manrope"] text-white mx-5 text-xl my-4 '>
              <a href="https://www.linkedin.com/company/prastuti/"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin/></IconContext.Provider>
              <p className='hidden sm:flex'>LinkedIn</p></a>
              </li>
              <li className="social-links font-['Manrope'] text-white mx-5 text-xl my-4">
              <a href="https://github.com/Prastuti-Fest-IIT-BHU"><IconContext.Provider value={{ className: 'react-icons' }}><BsGithub/></IconContext.Provider>
                <p className='hidden sm:flex'>Github</p></a>
              </li>
            </ul>

      </div>
      </footer>

    </>
  )
}

export default Footer