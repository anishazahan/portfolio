import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
  return (
    <div className=" p-10 bg-black px-20 text-gray-400">
    <footer className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:marker:items-center space-y-7 ld:space-y-0">
    <div className='flex flex-col'>
      <span className="font-semibold uppercase">Services</span> 
      <Link to='/services' className="link link-hover">React Application</Link> 
      <Link to='/services' className="link link-hover">Mern Application</Link> 
      <Link to='/services' className="link link-hover">UX Design</Link> 
      <Link to='/services' className="link link-hover">Web Design</Link>
    </div> 
    <div className='flex flex-col'>
      <span className="font-semibold uppercase">Portfolio</span> 
      <Link to='/about' className="link link-hover">About us</Link> 
      <Link to='/contact' className="link link-hover">Contact</Link> 
      <Link to='/service' className="link link-hover">Services</Link> 
      <Link to='/portfolio' className="link link-hover">Projects</Link> 
      <Link to='/blog' className="link link-hover">Blog</Link>
    </div> 
    <div className='flex flex-col'>
      <span className="font-semibold uppercase">Social</span> 
      <div className="flex flex-col md:flex-row flex-wrap ">
      <a href='https://github.com/anishazahan' target="_blank" className='footer-icon shadow-lg '><FaFacebookSquare></FaFacebookSquare> </a>
                <a href='https://www.linkedin.com/in/anisha-zahan/' target="_blank" className='footer-icon shadow-lg'><FaLinkedin></FaLinkedin> </a>
                <a href='' className='footer-icon shadow-lg'><FaSkype></FaSkype> </a>
                <a href='anishazahan13@gmail.com' className='footer-icon shadow-lg'><FaGooglePlus></FaGooglePlus> </a>
                
      </div>
      <h2 className='text-center'>Copyright &copy; By <span className='text-primary font-bold'>Anisha Zahan </span> {(new Date().getFullYear())}</h2>
    </div>
    </footer>
  </div>
  )
}

export default Footer
