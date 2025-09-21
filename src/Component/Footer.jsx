import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#2A2C39] py-8 md:py-12 lg:pt-16">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Name/Logo */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              Sabbir Islam
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="text-white mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:space-x-6 md:space-x-8 space-y-3 sm:space-y-0">
              <NavLink 
                to="/" 
                className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
              >
                About
              </NavLink>
              <NavLink 
                to="/works" 
                className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Works
              </NavLink>
              <NavLink 
                to="/contact" 
                className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Contact
              </NavLink>
            </div>
          </div>

          
          {/* Copyright */}
          <div className="border-t border-gray-600 pt-6 w-full">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              © {new Date().getFullYear()} All rights reserved by Sabbir Islam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;