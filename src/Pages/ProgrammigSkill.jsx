import React, { useState, useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const ProgrammingSkill = () => {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#2A2C39] min-h-screen flex items-center">
      <div className="hidden md:block bg-[#252734] w-[25%] mx-auto"></div>
      <div className="bg-[#252734] w-full max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto flex flex-col justify-center items-center md:flex-row py-10 md:py-20 lg:py-28">
        <div className="w-full max-w-4xl text-center md:text-left">
          <div className="mb-4 text-gray-400">|| Technologies</div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-12">
            Technologies I Use.
          </h1>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center justify-center p-4 bg-[#2A2C39] rounded-lg hover:bg-[#3A3C49] transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden ${
                  showSkills ? "animate-pulse" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationDuration: "2s",
                  animationIterationCount: "1",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                <skill.icon
                  className="text-4xl md:text-5xl mb-2 transition-all duration-300 group-hover:drop-shadow-lg relative z-10"
                  style={{
                    color: skill.color,
                    filter: "drop-shadow(0 0 8px rgba(255,255,255,0.1))",
                  }}
                />
                <span className="text-gray-400 text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300 relative z-10">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkill;
