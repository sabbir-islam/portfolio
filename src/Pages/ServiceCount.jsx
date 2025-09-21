import React from "react";
import CountUp from "react-countup";

const CounterCard = ({ icon, endValue, label, suffix = "" }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#2a2d3e] rounded-md w-16 h-16 flex items-center justify-center mb-4">
        <div className="text-gray-400 text-2xl">{icon}</div>
      </div>
      <div className="text-white text-5xl font-semibold mb-2">
        <CountUp
          start={0}
          end={endValue}
          duration={2.5}
          separator=","
          suffix={suffix}
          enableScrollSpy
        />
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const ServiceCount = () => {
  return (
    <div className="bg-[#282A37] py-24">
      <div className="w-[70%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-24">
          <CounterCard
            icon={<i className="fa-solid fa-users"></i>}
            endValue={2}
            suffix="+"
            label="Happy Clients"
          />

          <CounterCard
            icon={<i className="fa-solid fa-gear"></i>}
            endValue={5}
            suffix="+"
            label="Project Complete"
          />

          <CounterCard
            icon={<i className="fa-solid fa-calendar"></i>}
            endValue={2}
            suffix="+"
            label="Years of Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCount;