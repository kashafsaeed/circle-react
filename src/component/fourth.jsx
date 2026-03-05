import React from 'react'

const fourth = () => {
  return (
    <>
      <section className='bg-gray-200 h-96 flex justify-center items-center'>
        <div className='bg-white p-8 rounded-lg shadow-md text-center'>
            <button>
                <p className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    AWARDS </p>
            </button>
            <h1>
                An award winning platform, loved by customers.
            </h1>

        </div>
          <div className='grid grid-cols-3 gap-4  bg-emerald-400'>
            <div className='bg-[#FFF5F3]'>
                <img src="" alt="" />
                <h1>
                    Market leader acrocss
                    18 categories.
                </h1>

            </div>
            <div className=' bg-[#FFF0F9]'>
                <img src="" alt="" />
                <h1>
                    Most koved SaaS tool in 2021
                </h1>
            </div>
            <div className='bg-[#ECFFFF]'>
                <img src="" alt="" />
                <h1>
                    Category leader in 2022
                </h1>
            </div>
            <div className='bg-[#F6F4FF]' >
                <img src="" alt="" />
                <h1>
                    Most recommended tool in 2021
                </h1>
            </div>
            <div className='bg-[#FFF9E7]' >
                <img src="" alt="" />
                <h1>
                    Champion in survey tool 2022
                </h1>
            </div>
            <div className='bg-[#FFEDE4]: '>
                <img src="" alt="" />
                <h1>
                    Top performer spring 2021
                </h1>
            </div>
          </div>

      </section>
    </>
  )
}

export default fourth