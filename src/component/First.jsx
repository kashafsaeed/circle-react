import React from 'react';

import capgemini from '../assets/images/cap.png'; 
import yamaha from '../assets/images/yamaha.png';
import biocon from '../assets/images/biocon.png';
import dell from '../assets/images/dell.png';
import birla from '../assets/images/ck.png';
import shell from '../assets/images/shell.png';

const First = () => {
  const companies = [
    { name: 'Capgemini', logo: capgemini }, 
    { name: 'Yamaha', logo: yamaha },
    { name: 'Biocon', logo: biocon },
    { name: 'Dell', logo: dell },
    { name: 'CK Birla Group', logo: birla },
    { name: 'Shell', logo: shell },
  ];

  return (
    <section className="py-16 bg-white flex flex-col items-center px-4">
      <span className="bg-cyan-50 text-cyan-500 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
        Our Customers
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
        Trusted by <span className="font-bold">100,000+ customers</span> in 90+ countries
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80 mb-16">
        {companies.map((company, index) => (
          <img 
            key={index} 
            src={company.logo} 
            alt={company.name} 
            className="h-9 md:h-8 object-contain  transition duration-300"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-600 border-t border-gray-100 pt-8 w-full max-w-4xl">
        <div className="flex items-center space-x-2">
          <span className="text-cyan-500 font-bold">✓</span>
          <p><span className="text-cyan-500 font-bold">18281</span> signed up last month</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-cyan-500 font-bold">✓</span>
          <p><span className="text-cyan-400 font-bold">GDPR</span>- & <span className="text-cyan-400 font-bold">CCPA</span>-ready</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-cyan-500 font-bold">✓</span>
          <p><span className="text-cyan-400 font-bold">Leader@G2</span> Summer</p>
        </div>
      </div>
    </section>
  );
};

export default First;