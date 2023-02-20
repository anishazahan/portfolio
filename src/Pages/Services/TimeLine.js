import React from 'react'

const TimeLine = () => {
  return (
    <>

<div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>Why you can Chose Me!!!</h2>
        </div>


          {/* <!-- component --> */}
<div className=" max-w-7xl px-10 lg:px-20 mt-20 bg-black mx-auto w-full h-full hidden lg:block">
  <div className="relative wrap overflow-hidden p-5 md:p-10 h-full">
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-bold text-lg text-black">1</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-900 text-xl">Web Design and ,React .Js ,Fronted,Junior Mern Stack Developer.</h3>
        
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-black font-bold text-lg">2</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-900 text-xl">Cross browser operability,Responsive design for all devices.</h3>
       
      </div>
    </div>
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-bold text-lg text-black">3</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-900 text-xl">Process improvement,workflow optimization.User Requirement Gathering.</h3>
        
      </div>
    </div>
    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-black font-bold text-lg">4</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-900 text-xl">Fresh, Commentable, Clean Code, Error handling, Debugging, fixing problems.Client Interaction about the project. </h3>
      </div>
    </div>
  </div>
</div>

{/* <!-- component -->  for medium device */}
<div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20 lg:hidden">
     
      <div class="border-l-2 mt-10">
        {/* <!-- Card 1 --> */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div class="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div class="flex-auto">
          <h3 className="mb-3 font-bold text-gray-900 text-xl">Web Design and ,React .Js ,Fronted,Junior Mern Stack Developer.</h3>
          </div>
         
        </div>

        {/* <!-- Card 2 --> */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div class="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div class="flex-auto">
          <h3 className="mb-3 font-bold text-gray-900 text-xl">Cross browser operability,Responsive design for all devices.</h3>
          </div>
         
        </div>
        {/* <!-- Card 3 --> */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div class="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div class="flex-auto">
          <h3 className="mb-3 font-bold text-gray-900 text-xl">Process improvement,workflow optimization.User Requirement Gathering.</h3>
          </div>
         
        </div>
        {/* <!-- Card 4--> */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div class="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div class="flex-auto">
          <h3 className="mb-3 font-bold text-gray-900 text-xl">Fresh, Commentable, Clean Code, Error handling, Debugging, fixing problems.Client Interaction about the project. </h3>
          </div>
         
        </div>


       

    

      

      </div>
    
    </div>
    
    </>
  )
}

export default TimeLine