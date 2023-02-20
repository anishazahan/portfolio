import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#1D1D1D] pt-10 pb-16'>

        <h2 className='text-3xl font-bold text-center text-gray-300 mt-8 mb-10'>Contact Me</h2>



        {/* <!-- component --> */}

<div className="relative flex items-top justify-center sm:items-center sm:pt-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className=" overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-6 mr-4  bg-black sm:rounded-md">
                        <h1 className="text-3xl sm:text-4xl text-gray-300  font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-300  mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-300 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Jashore,Khulna,Bangladesh
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-300 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +8801979552658
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-300 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                anishazahan13@gmail.com
                            </div>
                        </div>
                    </div>



                <form action="https://formspree.io/f/myyovplp" method='post' className="mt-10 px-5 md:px-0">
                
                

                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative z-0">
                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">Your name</label>
                    </div>
                    <div className="relative z-0">
                    <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">Your email</label>
                    </div>
                    <div className="relative z-0 col-span-2">
                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">Your message</label>
                    </div>
                </div>
                <button type="submit" className="mt-5 bg-black px-10 py-3 text-white">Send Message</button>
                </form>

                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Contact