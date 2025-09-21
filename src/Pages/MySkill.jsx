import React, { useState, useEffect, useRef } from "react";

const MySkill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Communication", percentage: 75 },
    { name: "Design", percentage: 75 },
    { name: "Development", percentage: 85 },
    { name: "Problem Solving", percentage: 70 },
  ];

  return (
    <div className="bg-[#2A2C39] min-h-screen flex items-center">
      <div className="bg-[#252734] w-full max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto flex flex-col md:flex-row py-10 md:py-20 lg:py-28">
        <div className="flex-1 flex flex-col justify-center px-6 md:pl-10 lg:pl-16 mb-10 md:mb-0">
          <div className="mb-4 text-gray-400">|| Special Skills</div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Technical & Soft Skills.
          </h1>
        </div>
        <div ref={skillsRef} className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:pr-16 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#232434] rounded-md p-6 md:p-8 lg:p-10">
              <div className="flex justify-between text-gray-300 mb-2">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div 
                  className={`h-2 bg-white rounded transition-all duration-2000 ease-out ${
                    isVisible ? '' : 'w-0'
                  }`}
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block bg-[#252734] w-[25%] mx-auto"></div>
    </div>
  );
};

export default MySkill;