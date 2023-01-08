import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { IconContext } from "react-icons";

const Thank_you = () => {
  return (
    <div className='flex flex-col justify-center text-[#DBF2FF] md:flex-row'>
      <div className="flex justify-evenly align-middle flex-col w-full h-[75vh] text-center space-between p-4 md:w-1/2 md:h-screen ">
        <div>
          <h1 className="mb-10 text-3xl font-extrabold text-white :text-5xl lg:text-6xl font-Manrope"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#DBF2FF] from-sky-500 font-Manrope">SUCCESSFULLY </span>REGISTERED.</h1>
          <p className='text-lg m-2 font-Catamaran'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quibusdam asperiores nisi, quasi laboriosam soluta hic totam explicabo amet ex.</p>
        </div>
        <div>
          <h2 className='text-3xl m-2 font-Catamaran'>your registration id is :</h2>
          <h1 className='m-2 text-3xl font-extrabold text-white :text-5xl lg:text-6xl font-Manrope'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        </div>
        <span><a href="" className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-[#DBF2FF] transition duration-300 ease-out border-2 border-[#DBF2FF] rounded-full shadow-md group w-1/2 lg:w-1/4">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#003247] duration-300 -translate-x-full bg-[#DBF2FF] group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full font-Catamaran text-[#DBF2FF] transition-all duration-300 transform group-hover:translate-x-full ease">Home</span>
          <span className="relative invisible">Go Back To Home</span>
        </a></span>
      </div>
      <div className='flex w-full h-auto justify-items-start align-middle flex-col md:w-1/2 md:h-screen md:justify-evenly'>
        <span className='max-w-[400px] max-h-[400px] w-fit h-fit flex justify-center py-2 mx-auto m-5'>
          <img className="w-25 h-25 sm:drop-shadow-lg sm:w-full sm:h-full mx-auto" src="https://files.catbox.moe/uqbxcf.png" alt="logo"></img>
        </span>
        <div className='flex flex-col justify-between align-middle '>
          <h1 className='flex justify-center py-2 text-2xl font-bold m-2 font-Catamaran'>for more update follow us on</h1>
          <ul className='flex justify-center py-2'>
            <li className='social-links font-["Manrope"] text-white mx-5 text-l my-4 '>
              <a href="https://www.facebook.com/prastuti.iitbhu"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook className="" /></IconContext.Provider>
              </a>
            </li>
            <li className='social-links font-["Manrope"] justify-center text-white mx-5 text-l my-4 '>
              <a href="https://www.instagram.com/prastuti.iitbhu/"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram className="" /></IconContext.Provider>
              </a>
            </li>
            <li className='social-links font-["Manrope"] text-white mx-5 text-l my-4 '>
              <a href="https://www.linkedin.com/company/prastuti/"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin className="" /></IconContext.Provider>
              </a>
            </li>
            <li className="social-links font-['Manrope'] text-white mx-5 text-l my-4">
              <a href="https://github.com/Prastuti-Fest-IIT-BHU"><IconContext.Provider value={{ className: 'react-icons' }}><BsGithub className="" /></IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Thank_you