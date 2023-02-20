import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Capture-removebg-preview.png'
import resume1 from './resume.pdf'

const Menubar = () => {
    const [nav, setNav] = useState(false);
    const [navbar, setNavbar] = useState(false);
  return (
    <>
   

          <nav className="w-full bg-[#1D1D1D] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:py-2 md:block">
                        <Link to='/'>
                        <img src={logo} alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-center items-center pl-10 md:pl-0 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center w-full  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="about">About</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="service">Services</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="portfolio">Portfolio</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="blog">Blogs</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>

                       
                    </div>
                </div>
                <div className="hidden md:block space-x-2 ">
                    <a
                        href={resume1}  target='_blank' rel="noreferrer"
                        className="px-5 py-3 font-semibold duration-500 hover:text-white text-black bg-primary rounded-sm shadow hover:bg-gray-800"
                    >
                        See Resume
                    </a>
                    
                </div>
            </div>
        </nav>



    </>
  )
}

export default Menubar