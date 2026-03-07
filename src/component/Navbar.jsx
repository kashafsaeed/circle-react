import React from 'react'
const Navbar = () => {
  return (
    <>
    <nav className="w-full border-b border-gray-200 bg-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="hidden md:flex space-x-8 items-center text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Testimonials</a>
          <a href="#" className="hover:text-black transition">Resources</a>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-4 border-cyan-400"></div> 
          <span className="text-2xl font-bold text-gray-800 tracking-tight">circle</span>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">Company</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </div>
          
          <button className="border-2 border-cyan-400 text-cyan-500 px-8 py-2 rounded-sm font-bold hover:bg-cyan-50 transition">
            Login
          </button>
        </div>

      </div>
    </nav>
 


    </>
  )
}

export default Navbar