import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <span className="bg-cyan-50 text-cyan-500 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            See how customers <br />
            <span className="font-bold italic">drive impact</span>
          </h2>
          <button className="bg-[#0CBBC7] text-white px-8 py-3 rounded-md font-bold">
            See case studies
          </button>
        </div>

        {/* Right Side: Video Card & Overlapping Review */}
        <div className="relative">
          {/* Navigation Arrows (Top Right) */}
          <div className="absolute -top-12 right-0 flex space-x-2">
            <button className="w-8 h-8 rounded-full  text-cyan-400 flex items-center justify-center ">
              ←
            </button>
            <button className="w-8 h-8 rounded-full bg-[#0CBBC7] text-white flex items-center justify-center hover:bg-cyan-500 transition">
              →
            </button>
          </div>

          {/* Main Image/Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Customer" 
              className="w-full h-[500px] object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-[#0CBBC7] rounded-full flex items-center justify-center text-white text-2xl pl-1 h">
                ▶
              </button>
            </div>
          </div>

          {/* Overlapping PayPal Card */}
          <div className="absolute -bottom-8 -right-4 md:right-[-10%] bg-cyan-50 p-8 rounded-xl shadow-xl max-w-sm border border-white">
            <div className="flex items-center space-x-2 mb-4">
               {/* PayPal Logo Placeholder */}
              <span className="text-blue-800 font-bold text-xl italic">PayPal</span>
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
            </p>
            <div>
              <h4 className="font-bold text-gray-900">Michel Dedrick</h4>
              <p className="text-sm text-gray-500">Senior Conversion Optimizer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;