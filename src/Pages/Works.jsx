import React, { useEffect, useState } from "react";

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [myWorks, setMyWorks] = useState([])
  
  useEffect(()=>{
    fetch('myWorkData.json')
    .then(res=>res.json())
    .then(data=>setMyWorks(data))
  })

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div className="">
      <div className="bg-[#252734] py-16 md:py-24">
        <div className="md:w-[65%] mx-auto">
          <h1 className="text-3xl md:text-4xl text-center text-white">
            My Works
          </h1>
        </div>
      </div>
      <div className="bg-[#2A2C39] py-16 md:py-28">
        <div className="md:w-[65%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {myWorks.map((item, index) => (
              <div
                key={index}
                className="px-[25px] py-[18px] bg-[#252734] rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(item)}
              >
                <img
                  className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                  src={item.image}
                  alt={item.name}
                />
                <div className="mt-4">
                  <h1 className="text-white text-xl font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-gray-300 mt-2 text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <button 
                      className="btn text-white hover:bg-[#2A2C39] bg-[#252734] border-[#343643] shadow shadow-0 flex-1 rounded-xl text-sm py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.repository, '_blank');
                      }}
                    >
                      Git-Repo
                    </button>
                    <button 
                      className="btn text-white hover:bg-[#2A2C39] bg-[#252734] border-[#343643] shadow shadow-0 flex-1 rounded-xl text-sm py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.liveDemo, '_blank');
                      }}
                    >
                      Live View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#252734] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#343643]">
              <h2 className="text-2xl font-bold text-white">{selectedWork.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image and Basic Info */}
                <div>
                  <img
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                    src={selectedWork.image}
                    alt={selectedWork.name}
                  />
                  
                  {/* Role */}
                  {/* <div className="mb-4">
                    <span className="text-white font-semibold">Role: </span>
                    <span className="text-gray-300">{selectedWork.role}</span>
                  </div> */}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#2A2C39] text-gray-300 px-3 py-2 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedWork.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#2A2C39] hover:bg-[#343643] text-white py-3 px-4 rounded-xl text-center transition-colors font-medium"
                    >
                      View Repository
                    </a>
                    <a
                      href={selectedWork.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-center transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Right Column - Detailed Information */}
                <div>
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3 text-lg">Description:</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedWork.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3 text-lg">Key Features:</h3>
                    <ul className="space-y-2">
                      {selectedWork.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Improvements */}
                  {/* <div>
                    <h3 className="text-white font-semibold mb-3 text-lg">Future Improvements:</h3>
                    <ul className="space-y-2">
                      {selectedWork.futureImprovements.map((improvement, improvementIndex) => (
                        <li key={improvementIndex} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1 text-lg">→</span>
                          <span className="text-gray-300">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;