import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaArrowLeft} from 'react-icons/fa'

import { IconContext } from "react-icons";
import { useState } from "react";
const Navbar = () =>{
    const [mobMenu,setMobMenu] = useState(false);

    const handleMenu = () =>{
        setMobMenu(!mobMenu);
    }
    return (
        <>
        <nav className="navbar bg-[#003247]">
        <div className="flex justify-between items-center py-4 min-h-full">
            <div className="sm:hidden mx-5 " onClick={handleMenu}>
            {!mobMenu ? <IconContext.Provider value={{ className: 'react-icons' }}><FaBars className="cursor-pointer "/></IconContext.Provider>: <></>}
            {mobMenu ? <IconContext.Provider value={{ className: 'react-icons' }}><FaArrowLeft className="cursor-pointer"/></IconContext.Provider> : <></>}
            </div>
            {/* <div className="text-right"> */}
                <h1 className="text-white text-3xl font-['Manrope'] font-black px-3 ml-2 drop-shadow-lg">
                    <Link to="/" >Prastuti'23</Link>
                </h1>
                {/* <img src="Prastuti-Frontend-2023/src/assets/prastuti.png" alt='logo' className=""></img> */}
            {/* </div> */}

            <div className="sm:px-2 flex items-center sm:py-5 sm:my-2 relative">
                <ul className="hidden sm:flex px-5 ">
                    <li className="px-2 text-white font-['Manrope'] hover:text-[#4B7CB2] text-xl" >
                        <Link to="#about">About</Link>
                    </li>
                    <li className="px-2 text-white font-['Manrope'] hover:text-[#4B7CB2] text-xl" href="#">
                        <Link to="#events">Events</Link>
                    </li>
                    <li className="px-2 text-white font-['Manrope'] hover:text-[#4B7CB2] text-xl" href="#">
                        <Link to="#faqs">FAQs</Link>
                    </li>
                    <li className="px-2 text-white font-['Manrope'] hover:text-[#4B7CB2] text-xl" href="#">
                        <Link to="#sponsors">Sponsors</Link>
                    </li>
                    <li className="px-2 text-white font-['Manrope'] hover:text-[#4B7CB2] text-xl" href="#">
                        <Link to="#team">Team</Link>
                    </li>
                    
                </ul>
                    <button className="drop-shadow-xl font-['Manrope']  sm:px-6 sm:py-3 px-4 py-2 border rounded-lg font-bold text-[#003247] sm:text-2xl text-sm hover:border-[#004C7D] hover:border-1 bg-white hover:text-[#29ffff] transition duration-300 ease-in-out">Register</button>
            </div>
        </div>

        <div className={mobMenu? 'sm:hidden ease-in-out duration-500  overflow-y-hidden absolute left-0 navMobile bg-[#003247] h-screen w-full z-20 px-5 py-8' : 'absolute left-[-100%] h-screen ease-in-out duration-500'}>
                <ul className="m-auto px-5 py-8">
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-xl" onClick={handleMenu} >
                            <Link to="#about">About</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-xl" onClick={handleMenu} >
                            <Link to="#events">Events</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-xl" onClick={handleMenu}>
                            <Link to="#faqs">FAQs</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-xl" onClick={handleMenu}>
                            <Link to="#sponsors">Sponsors</Link>
                        </li>
                        <li className="px-4 py-5 text-white text-center font-['Manrope'] text-xl" onClick={handleMenu}>
                            <Link to="#team">Team</Link>
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