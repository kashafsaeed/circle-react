import React from 'react'
import img from "../assets/images/third.png"
const Thirdsection = () => {
    return (
        <>
            <div className=' grid grid-cols-2 gap-4 mt-10  justify-center items-center  '>
                <div className=' bg-amber-400 justify-center items-center'>

                    <button>
                        <p className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            OUR PROMISE
                        </p>
                    </button>


                    <h1 className='text-2xl font-bold mt-4 mb-4 '>
                        Tool built for people.

                    </h1>

                    <p>
                        Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.

                    </p>
                    <p>

                        Circle has 100+ integrations with tools you already use and love.
                        Get started free
                    </p>







                </div>
                <div className=' bg-fuchsia-600'>
                    {/* <img src={img} alt="third image" 
                className='w-456px  h-480px'

                /> */}
                    <h1>hdh</h1>

                </div>










            </div>

        </>
    )
}

export default Thirdsection