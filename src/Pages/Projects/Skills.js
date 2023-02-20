import React from 'react'
import tailwind from '../../img/tailwind.png'
import daisi from '../../img/daisi.jpeg'
// import js from '../../img/js.jpeg'
import react from '../../img/react.png'
import router2 from '../../img/router2.png'
import redux from '../../img/redux.png'
import node from '../../img/node.png'
import express from '../../img/express.png'
import mongo from '../../img/mongo.png'
import firebase from '../../img/firebase.png'
import tp2 from '../../img/tp2.png'
import next from '../../img/next.jpeg'
import strip2 from '../../img/strip2.jpeg'
import html from "../../img/html.png"
import './Skilss.css'

const Skills = () => {

    // const expert = [  Html, CSS, SASS, Bootstrap, Tailwind, DaysiUI, Javascript(es6), React.Js, React-Router, React-
    //     Redux, React-Typescript.]
  return (
    <div className='bg-[#2e3434] skill-bg py-10 '>
        <h2 className='text-3xl font-bold text-center text-gray-200 my-5'>My Technical Skills</h2>

    <div className="mx-auto text-center">
    <h2 className='text-2xl px-5 mx-auto font-semibold text-gray-200 inline-block border-b-2 border-emerald-500 '>Expertice</h2>
    </div>

    <div className=" flex flex-col md:flex-row flex-wrap gap-y-6 my-16 max-w-4xl mx-auto gap-4 justify-center text-center">

        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-2xl font-bold'>HTML</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-2xl font-bold'>CSS</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-2xl font-bold'>SASS</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-[20px] font-bold'>BOOTSTRAP </h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-[20px] font-bold'>TAILWIND</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto flex items-center justify-center ">
            <h2 className='text-purple-100 text-[20px] font-bold'>DaisyUI</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto md:mx-0  flex items-center justify-center ">
            <h2 className='text-purple-100 text-2xl font-bold'>JS</h2>
        </div>
        
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto md:mx-0 flex items-center justify-center ">
            <h2 className='text-purple-100 text-[20px] font-bold'>ReactJS</h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto md:mx-0  flex items-center justify-center ">
            <h2 className='text-purple-100 text-[20px] font-bold'>React <span>Router</span>  </h2>
        </div>
        <div className="w-32 h-32 bg-slate-900 shadow-lg border-b-4 border-primary grayscale-0 rounded-sm p-2 mx-auto md:mx-0  flex items-center justify-center ">
            <h2 className='text-purple-100 text-2xl font-bold'>Redux </h2>
        </div>
    </div>


    <div className="mx-auto text-center">
    <h2 className='text-2xl px-5 mx-auto font-semibold text-gray-200 inline-block border-b-2 border-emerald-500 mb-8'>Comfortable</h2>
    </div>

    <div className=" flex flex-col md:flex-row flex-wrap gap-y-6 my-16 max-w-4xl mx-auto gap-4 justify-center text-center">
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={node} alt="" />
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={express} alt="" />
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={mongo} alt="" />
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={firebase} alt="" />
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={tp2} alt="" />
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={next} alt="" />
        </div>
        
    </div>




    <div className="mx-auto text-center ">
    <h2 className='text-2xl px-5 mx-auto font-semibold text-gray-200 inline-block border-b-2 border-emerald-500 my-8'>Deploy and Tools</h2>
    </div>
    
    {/* <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-6 my-5 space-x-6 mx-auto max-w-7xl px-10 lg:px-32">

    

      <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Git</h2>
        </div>
      <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>GitHub</h2>
        </div>
      <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Figma</h2>
        </div>
      <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>VS Code</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Img BB</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Postman</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Heroku</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Netlify</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Render</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Vercel</h2>
        </div>
       <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <h2 className=' flex items-center justify-center w-full h-full bg-slate-200 text-black font-bold text-2xl'>Trello</h2>
        </div>
        </div> */}

         <div className="flex justify-center flex-wrap px-10 mx-auto max-w-4xl mb-16">
         <button className="skill-btn p-2">Git</button>
            <button className="skill-btn py-3 px-4">Figma</button>
            <button className="skill-btn py-3 px-4">Img BB</button>
            <button className="skill-btn py-3 px-4">GitHub</button>
            <button className="skill-btn py-3 px-4">Netlify</button>
            <button className="skill-btn py-3 px-4">Firebase</button>
            <button className="skill-btn py-3 px-4">Heroku</button><br/>
            <button className="skill-btn py-3 px-4">VS Code</button>
            <button className="skill-btn py-3 px-4">Figma</button>
            <button className="skill-btn py-3 px-4">PhotoShop</button>
            <button className="skill-btn py-3 px-4">Postman</button>
            <button className="skill-btn py-3 px-4">Vercel</button>
            <button className="skill-btn py-3 px-4">Render</button>
            <button className="skill-btn py-3 px-4">Trello</button>

         </div>


    </div>
  )
}

export default Skills