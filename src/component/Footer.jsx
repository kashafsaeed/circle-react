import React from 'react';
import img from '../assets/images/map.png';

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1e] text-gray-400 py-16 px-10">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Logo & Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand/Location Section */}
                    <div className="flex flex-col items-start">
                        <div className="relative w-48 h-28 flex items-center justify-center overflow-hidden">
                            {/* Map Image as Background */}
                            <img
                                src={ img  }
                                alt="map"
                                className="absolute inset-0  w-full h-full brightness-50 object-cover"
                            />
                            {/* Overlay Text */}
                            <span className="relative z-10 text-[11px] text-white font-bold text-center px-4 leading-tight">
                                Made with lots of ❤️ <br /> in San Francisco
                            </span>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Products</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-cyan-400 transition">Delta</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Sigma</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Zeta</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Alpha</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Acumen</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-cyan-400 transition">Help</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Training Videos</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Webinars</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Request a Demo</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Create Surveys</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Quiz Maker</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Team</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-wide">
                    <p className="mb-4 md:mb-0">Copyright 2022 Circle. All rights reserved.</p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-cyan-400 transition">in</div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-cyan-400 transition">🐦</div>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 text-gray-500">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition">Data & Security</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition">Data & Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;