import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-800 text-white  w-full'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-1xl font-bold'>
          <ul className='flex space-x-4'>
            <li><a href="#" className='hover:text-gray-400'>Feature</a></li>
            <li><a href="#" className='hover:text-gray-400'>Pricing</a></li>
            <li><a href="#" className='hover:text-gray-400'>Testimonial</a></li>
            <li><a href="#" className='hover:text-gray-400'>Resources</a></li>
            
           <img src="" alt="" />
           
          </ul>
          </div>
          <div>
            <ul className='flex space-x-4'>
            <li><a href="#" className='hover:text-gray-400'>Company</a></li>
            <li><a href="#" className='hover:text-gray-400'>Contact</a></li>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Login
            </button>
            </ul>
          </div>
          
          
            
          </div>
        
        
      </nav>


    </>
  )
}

export default Navbar