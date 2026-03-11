// import React from 'react'
// const Navbar = () => {
//   return (
//     <>
    {/* <nav className="w-full border-b border-gray-200 bg-white py-4 px-6">
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
  */}

{/* 
    </>
  )
}
export default Navbar; */}


import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons ke liye: npm install lucide-react

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. HAMBURGER (Mobile Only) */}
        <div className="md:hidden flex flex-1">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 2. DESKTOP LINKS (Left Side) */}
        <div className="hidden md:flex flex-1 space-x-6 lg:space-x-8 items-center text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Testimonials</a>
          <a href="#" className="hover:text-black transition">Resources</a>
        </div>

        {/* 3. LOGO (Centered on Mobile, Auto on Desktop) */}
        <div className="flex items-center space-x-2 shrink-0">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-4 border-cyan-400"></div> 
          <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">circle</span>
        </div>

        {/* 4. RIGHT SECTION (Login + Extra Desktop Links) */}
        <div className="flex flex-1 justify-end items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">Company</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </div>
          
          <button className="border-2 border-cyan-400 text-cyan-500 px-4 md:px-8 py-1.5 md:py-2 rounded-sm font-bold text-sm md:text-base hover:bg-cyan-50 transition">
            Login
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50 md:hidden flex flex-col py-4 px-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#" className="text-gray-700 font-semibold text-lg py-2 border-b border-gray-50">Features</a>
          <a href="#" className="text-gray-700 font-semibold text-lg py-2 border-b border-gray-50">Pricing</a>
          <a href="#" className="text-gray-700 font-semibold text-lg py-2 border-b border-gray-50">Testimonials</a>
          <a href="#" className="text-gray-700 font-semibold text-lg py-2 border-b border-gray-50">Resources</a>
          <a href="#" className="text-gray-700 font-semibold text-lg py-2 border-b border-gray-50">Company</a>
          <a href="#" className="text-gray-700 font-semibold text-lg py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}