import React from 'react'
import img from "../assets/images/third.png"
const Thirdsection = () => {
    return (
        <>

         <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-16 gap-6 items-center">
        
          <div className="p-15">
            <button className="mb-4 bg-[#E0F7F8] px-3 py-1 rounded-full ">
                <span className="text-xs font-bold text-[#0CBBC7] tracking-wide">OUR PROMISE </span>
            </button>
            <h1 className="text-2xl md:text-3xl font-normal text-black mb-5">
              Tool <span className="font-bold">built for people .</span>
            </h1>
        
            
        
            <p className="text-base font-normal text-[#676767] mb-4 line-clamp-2">
                Whether you want to edit your Google Docs, <br />
                 resolve Jira issues, or collaborate over Zoom.

            </p>
            <p className="text-base font-normal text-[#676767] mb-5">
            Circle has 100+ integrations with tools you <br />
            already use and love.

            </p>
        
            <div className="flex flex-wrap gap-4 ">
              <button className="text-base font-bold bg-[#0CBBC7] px-5 py-3 text-white tracking-wide mt-8">
                Get free started
              </button>
        
              
            </div>
          </div>
        
          <div className="flex justify-center p-5 ">
            <img src={img} alt="business solution" className="w-full md:w-5/5 rounded-lg" />
          </div>
        
        </div>
        
          
        </>
    )
}

export default Thirdsection