import React from 'react'
import Vector1 from "../assets/images/1.png"
import vector2 from "../assets/images/2.png"
import vector3 from "../assets/images/3.png"
import vector4 from "../assets/images/4.png"
import vector5 from "../assets/images/5.png"
import vector6 from "../assets/images/6.png"

const fourth = () => {
    return (
        <>

            <section className=' h-auto flex justify-center items-center '>

                <div className=' p-8 rounded-lg  text-center'>
                    <button className='rounded-full  bg-[#E0F7F8]  px-3 py-1 mb-4 '>
                        <span className='text-xs font-bold text-[#0CBBC7] tracking-wide'>awards</span>

                    </button>
                    <h1 className=' text-3xl text-[#000000] font-bold '>
                        <span className=' font-normal'>An</span>  award winning <span href="" className='font-normal'>platform</span>, loved by customers.
                    </h1>

                </div>

            </section>


            <section className=' h-auto flex justify-center items-center  text-[#000000] font-bold text-base '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   p-5 w-5/8 gap-8  '>

                    <div className='bg-[#FFF5F3]  p-4 w-50 justify-center text-center items-center h-50 '>
                        <img src={Vector1} alt="" width={85} className='ml-10 mt-4 ' />
                        <h1 className='  mb-4 line-clamp-2'>
                            Market leader acrocss 18 categories.
                        </h1>

                    </div>
                    <div className=' bg-[#FFF0F9] p-4 w-50 justify-center text-center items-center h-50 '>
                        <img src={vector2} alt="" width={80} className='ml-10 mt-4' />
                        <h1 className='  line-clamp-2'>
                            Most koved SaaS tool  in 2021
                        </h1>
                    </div>

                    <div className='bg-[#ECFFFF] p-5 w-50 justify-center text-center items-center h-50 '>
                        <img src={vector3} alt="" width={100} className='ml-5 mt-4' />
                        <h1 className=' line-clamp-2'>
                            Category leader in 2022
                        </h1>
                    </div>
                    <div className='bg-[#F6F4FF] p-4 w-50 justify-center text-center items-center h-50   ' >
                        <img src={vector4} alt="" width={94} className='ml-8 mt-4' />
                        <h1 className='line-clamp-2'>
                            Most recommended  tool in 2021
                        </h1>
                    </div>
                    <div className='bg-[#FFF9E7] px-4 py- w-50 text-center justify-center items-center h-50' >
                        <img src={vector5} alt="" width={80} className='ml-8 mt-4' />
                        <h1 className=' line-clamp-2'>
                            Champion in survey tool 2022
                        </h1>
                    </div>
                    <div className='bg-[#FFEDE4] p-4 w-50 justify-center text-center items-center h-50 '>
                        <img src={vector6} alt="" width={88} className='ml-8 mt-4' />
                        <h1 className=' line-clamp-2'>
                            Top performer spring 2021
                        </h1>
                    </div>
                </div>
            </section>














        </>

    )
}

export default fourth