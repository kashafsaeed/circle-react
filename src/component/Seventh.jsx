import React from 'react'
import seventh from "../assets/images/seventh.png"

const Seventh = () => {
    return (
        <>
 <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-16 gap-6 items-center">

  <div className="p-5 ">
    <h1 className="text-2xl md:text-3xl font-normal text-black">
      Looking for a <span className="font-bold">solution</span>
    </h1>

    <h1 className="text-2xl md:text-3xl font-normal text-black mb-5">
      for your business?
    </h1>

    <p className="text-base font-normal text-[#676767] mb-1">
      Check out Sogolytics enterprise feedback and
    </p>
    <p className="text-base font-normal text-[#676767] mb-5">
     experience management platform
    </p>

    <div className="flex flex-wrap gap-4">
      <button className="text-sm font-bold bg-[#0CBBC7] px-5 py-3 text-white tracking-wide">
        Learn more
      </button>

      <button className="text-sm font-bold text-[#0CBBC7] px-5 py-3 border-2 border-[#0CBBC7] tracking-wide">
        Schedule a consultation
      </button>
    </div>
  </div>

  <div className="flex justify-center p-5 ">
    <img src={seventh} alt="business solution" className="w-full md:w-4/5" />
  </div>

</div>

        </>

    )
}

export default Seventh