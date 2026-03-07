import React , { useState } from 'react'
import fifth from "../assets/images/fifth.png"

const Fifth = () => {




  
  return (
    <> 
   <div className='mt-24'>

   </div>



    <div className=' justify-center text-center items-center mt-15 mb-10'>
        <button className="text-sm font-bold bg-[#EFFEFF] px-4 py-2 text-[#0CBBC7] tracking-wide rounded-full">
             BUILT FOR PEOPLE
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-10">
            Easy <span className='font-normal'> for beginners. </span> Powerful <span className='font-normal'> for experts. </span>
        </h1>
    </div>

















  
     <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-16 gap-6 i
     tems-center ">
    
      <div className=" p-10 pt-16 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Create
        </h1>

        <h2 className='text-base font-bold text-black mb-4'>
            Advanced  research software
        </h2>

    
        
    
        <p className="text-base font-normal text-[#676767] mb-8">
      Ask the right questions and get the answers you <br /> need with the
       most secure and collaborative <br /> survey platform on the market 
       featuring <br /> powerful logic, sophisticated analytics, and <br /> built-in
        automation and integration. 
        </p>
       
    
        <div className="flex flex-wrap gap-4 mt-5">
          <button className="text-sm font-bold bg-[#0CBBC7] px-5 py-3 text-white tracking-wide">
            Get Started for Free
          </button>
    
          
        </div>
      </div>
    
      <div className="flex justify-center p-5 ">
        <img src={fifth} alt="business solution" className="w-full md:w-4/5" />
      </div>
    
    </div>





    </>
 )
}

export default Fifth