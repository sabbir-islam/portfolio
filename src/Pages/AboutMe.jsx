import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleDownload = () => {
    // Method 1: Direct download from public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in public folder
    link.download = 'Sabbir_Islam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const educationData = [
    {
      years: "2022 - Ongoing",
      title: "Bsc in Computer Science and Engineering",
      institution: "Daffodil International University",
    },
    {
      years: "2019 - 2020",
      title: "Higher Secondary School Certificate",
      institution: "Alamgir Monsur Memorial College, Mymensingh",
    },
    {
      years: "2017 - 2018",
      title: "Secondary School Certificate",
      institution: "Ideal Model Academy High School, Mymensingh",
    }
  ];

  const experienceData = [
    {
      years: "2024 - present",
      title: "Frontend Developer",
      institution: "Self Project",
    }
  ];

  const currentData = activeTab === "education" ? educationData : experienceData;

  return (
    <div className="">
      <div className="bg-[#252734] py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl text-center text-white">About Me</h1>
      </div>
      
      <div className="bg-[#2A2C39] py-16 md:py-28">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 px-4">
          <div className="order-2 md:order-1">
            <button onClick={handleDownload} className="flex items-center gap-3 bg-[#252734] border border-[#5F616A] hover:bg-white/10 text-white rounded-full py-3 px-6 md:py-6 md:px-14 transition-colors duration-300 text-sm md:text-base">
              Get Resume <FiDownload />
            </button>
          </div>
          <div className="w-full md:max-w-[600px] space-y-3 md:space-y-4 text-center md:text-left order-1 md:order-2">
            <h1 className="text-3xl md:text-5xl font-medium text-white">I'm Sabbir Islam</h1>
            <h2 className="text-xl md:text-3xl font-light text-white">Front-end Web developer</h2>
            <p className="text-lg md:text-xl font-normal text-white">
              I am a passionate and aspiring frontend web developer, dedicated to mastering the MERN stack and modern web technologies. My expertise includes JavaScript, React, MongoDB, and Firebase, with hands-on experience building interactive and responsive web applications. I value innovation, efficiency, and collaborative work environments. I am eager to join a dynamic startup or company where I can contribute my frontend development skills, grow professionally, and work remotely with talented teams.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#252734] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="flex space-x-2 md:space-x-4">
              <button 
                onClick={() => setActiveTab("education")}
                className={`px-6 md:px-14 py-3 md:py-5 text-lg md:text-2xl text-white rounded-sm transition-colors duration-300 ${
                  activeTab === "education" 
                    ? "bg-[#2A2C39]" 
                    : "bg-[#252734] border border-[#5F616A] hover:bg-[#2A2C39]"
                }`}
              >
                Education
              </button>
              <button 
                onClick={() => setActiveTab("experience")}
                className={`px-6 md:px-14 py-3 md:py-5 text-lg md:text-2xl text-white rounded-sm transition-colors duration-300 ${
                  activeTab === "experience" 
                    ? "bg-[#2A2C39]" 
                    : "bg-[#252734] border border-[#5F616A] hover:bg-[#2A2C39]"
                }`}
              >
                Experience
              </button>
            </div>
          </div>

          {/* Timeline Content - Desktop */}
          <div className="hidden md:flex justify-center items-start gap-12">
            {/* Left Side - Timeline */}
            <div className="relative">
              <div className="border border-gray-600 w-80 h-[800px] relative">
                {/* Vertical line */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-600"></div>
                
                {/* Timeline items */}
                {currentData.map((item, index) => (
                  <div key={index} className="absolute right-0" style={{ top: `${index * 260 + 100}px` }}>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm mr-4">{item.years}</span>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-2xl space-y-36">
              {currentData.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-8">
                    {item.title}
                  </h2>
                  <h3 className="text-gray-400 text-xl font-medium">
                    {item.institution}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Content - Mobile */}
          <div className="md:hidden">
            <div className="relative max-w-lg mx-auto">
              {/* Vertical line for mobile */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-600"></div>
              
              {currentData.map((item, index) => (
                <div key={index} className={`relative flex items-start ${index !== currentData.length - 1 ? 'mb-16' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gray-600 rounded-full border-2 border-[#252734] z-10"></div>
                  
                  {/* Year box */}
                  <div className="w-28 flex-shrink-0 mr-6">
                    <div className="border border-gray-600 p-3 text-center">
                      <span className="text-gray-400 text-xs font-medium">{item.years}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 ml-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <h3 className="text-gray-400 text-base mb-3 font-medium">
                      {item.institution}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;