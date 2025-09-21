import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img from "../assets/b1.png";

const Banner = () => {

  const handleDownload = () => {
    // Method 1: Direct download from public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in public folder
    link.download = 'Sabbir_Islam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-[#252734]">
      <div className="w-[90%] md:w-[65%] mx-auto pt-5">
        <div className="flex flex-col-reverse items-center md:flex-row md:py-0 py-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 md:w-[500px] ">
              Hello! I'm
            </h1>
            <h1 className="text-white font-bold text-6xl md:text-7xl mt-6 md:mt-8 mb-7">
              Sabbir Islam
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 md:mb-8">
              Frontend Web Developer
            </p>
            <button onClick={handleDownload} className="btn bg-[#252734] border border-[#5F616A] hover:bg-white/10 shadow shadow-0 text-white rounded-4xl py-4 px-4 md:py-10 md:px-14">
              Get Resume <FiDownload />
            </button>
          </div>
          <div className="relative">
            <img src={img} alt="" className="md:h-[800px] object-cover" />

            {/* Social Media Icons Container - Positioned on the right side with responsive sizing */}
            <div className="absolute right-5 md:-right-10 top-1/3 flex flex-col items-center z-10">
              {/* Vertical Line and Icons */}
              <div className="relative">
                {/* Vertical Line - Responsive height */}
                <div className="absolute left-1/2 transform -top-6 md:-top-11 -translate-x-1/2 h-[250px] md:h-[430px] w-[1px] bg-[#3B3D49]"></div>

                {/* Icons positioned vertically along the line */}
                <div className="flex flex-col gap-6 md:gap-12 items-center relative">
                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/fakesabbir007/"
                    target="_blank"
                  >
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-[#252734] border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <FaFacebookF className="text-white text-xs md:text-lg" />
                    </div>
                  </a>

                  {/* GitHub Icon */}
                  <a href="https://github.com/sabbir-islam" target="_blank">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-[#252734] border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <FaGithub className="text-white text-xs md:text-lg" />
                    </div>
                  </a>

                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/sabbir-islam00/" target="_blank">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-[#252734] border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <FaLinkedinIn className="text-white text-xs md:text-lg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
