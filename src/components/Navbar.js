import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaArrowLeft} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { IconContext } from "react-icons";
import { useState } from "react";
const Navbar = () =>{
    const [mobMenu,setMobMenu] = useState(false);
    const body = document.getElementsByTagName("body")[0];

    const handleMenu = () =>{
        setMobMenu(!mobMenu);
        if(!mobMenu){
            body.style.overflow = "hidden"
        }
        if(mobMenu){
            body.style.overflow = "auto"
        }
    }
    return (
        <>
        <nav className="navbar bg-[#003247]">
        <div className="flex justify-between items-center max-h-[15vh]">
            <div className="md:hidden mx-5 " onClick={handleMenu}>
            {!mobMenu ? <IconContext.Provider value={{ className: 'react-icons' }}><FaBars className="cursor-pointer "/></IconContext.Provider>: <></>}
            {mobMenu ? <IconContext.Provider value={{ className: 'react-icons' }}><FaArrowLeft className="cursor-pointer"/></IconContext.Provider> : <></>}
            </div>
            {/* <div className="text-right"> */}
                <h1 className="text-white text-2xl font-['Manrope'] font-black px-3 ml-2 drop-shadow-lg">
                    <Link to="/" >Prastuti'23</Link>
                </h1>
                {/* <img src="Prastuti-Frontend-2023/src/assets/prastuti.png" alt='logo' className=""></img> */}
            {/* </div> */}

            <div className=" flex items-center py-3 relative">
                <ul className="hidden md:flex px-2 lg:px-5 ">
                    <li className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l" >
                        <Link to="#about">About</Link>
                    </li>
                    <li className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l" href="#">
                        <Link to="#events">Events</Link>
                    </li>
                    <li className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l" href="#">
                        <Link to="#faqs">FAQs</Link>
                    </li>
                    <li className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l" href="#">
                        <Link to="#sponsors">Sponsors</Link>
                    </li>
                    <li className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l" href="#">
                        <Link to="team">Team</Link>
                    </li>
                    
                </ul>
                    <button className="invisible sm:visible drop-shadow-xl font-['Manrope'] px-4 py-2 border rounded-lg font-bold text-[#003247] 
                            sm:text-l text-sm hover:border-[#004C7D] hover:border-1 bg-white hover:text-[#29ffff] transition duration-300 
                            ease-in-out">Register/Login</button>
            </div>
        </div>

        <div className={mobMenu? 'md:hidden ease-in-out duration-500  overflow-y-hidden absolute left-0 navMobile bg-[#003247] h-screen w-full z-20 px-5 py-8' : 'absolute left-[-100%] h-screen ease-in-out duration-500'}>
                <ul className="m-auto px-5 py-8">
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-2xl" onClick={handleMenu} >
                            <Link to="#about">About</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-2xl" onClick={handleMenu} >
                            <Link to="#events">Events</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-2xl" onClick={handleMenu}>
                            <Link to="#faqs">FAQs</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-2xl" onClick={handleMenu}>
                            <Link to="#sponsors">Sponsors</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-2xl" onClick={handleMenu}>
                            <Link to="#team">Team</Link>
                        </li>
                        <li className="px-4 py-5 text-center font-['Manrope'] text-2xl" onClick={handleMenu}>
                            <button className="drop-shadow-xl font-['Manrope'] px-4 py-2 border rounded-lg font-bold text-[#003247] 
                                text-2xl hover:border-[#004C7D] hover:border-1 bg-white hover:text-[#29ffff] transition duration-300 
                                ease-in-out">Register</button>
                        </li>                        
                    </ul>
                    <ul className='flex justify-center py-2'>
              <li className='social-links font-["Manrope"] text-white mx-5 text-l my-4 '>
              <a href="https://www.facebook.com/prastuti.iitbhu"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>Facebook</p></a>
              </li>
              <li className='social-links font-["Manrope"] justify-center text-white mx-5 text-l my-4 '>
              <a href="https://www.instagram.com/prastuti.iitbhu/"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>Instagram</p></a>
              </li>
              <li className='social-links font-["Manrope"] text-white mx-5 text-l my-4 '>
              <a href="https://www.linkedin.com/company/prastuti/"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin className="sm:hidden"/></IconContext.Provider>
              <p className='hidden sm:flex'>LinkedIn</p></a>
              </li>
              <li className="social-links font-['Manrope'] text-white mx-5 text-l my-4">
              <a href="https://github.com/Prastuti-Fest-IIT-BHU"><IconContext.Provider value={{ className: 'react-icons' }}><BsGithub className="sm:hidden"/></IconContext.Provider>
                <p className='hidden sm:flex'>Github</p></a>
              </li>
            </ul>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar


// #004C7D
// #4B7CB2
// #DBF2FF
// #29ffff