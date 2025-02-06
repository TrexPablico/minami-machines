import React from "react";
import heroimg from "../assets/Hero/hero.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/5 flex flex-col justify-center items-start p-8 bg-white">
        <div className="lg:mt-[-150px] md:mt-0">
          <h1 className="text-7xl font-bold text-primaryGreen">MINAMI</h1>
          <h1 className="text-4xl font-bold text-primaryGreen mt-4">
            Machineries & Equipment Inc.
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            At Minami, we meet society's needs through innovative surface
            mounting equipment. As electronic demands grow and values diversify,
            our mission is to develop technology from users' perspectives. We
            prioritize environmental care, creating eco-friendly products like
            Pb-free screen printers. For details, see our "Eco-Friendly" page.
          </p>
          <button className="mt-6 px-6 py-3 bg-primaryYellow text-white rounded-lg text-lg hover:bg-primaryGreen">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-3/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-100"></div>
        <img src={heroimg} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
