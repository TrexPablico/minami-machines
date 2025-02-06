import React from "react";
import aboutimg from "../assets/About/aboutimg.jpg";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen lg:mt-1 mt-[500px]">
      <div className="w-full md:w-2/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-100"></div>
        <img
          src={aboutimg}
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center items-start p-8 bg-white">
        <h1 className="text-5xl font-bold text-primaryGreen">
          COMPANY PROFILE
        </h1>
        <p className="text-lg text-gray-700">
          Established in Manila in 1998, MINAMI Machineries & Equipment Inc. is
          a trading company which specializes in sales and services of Minami
          Screen Printer Machine, Ball Placer, Reflow Machine (Vacuum, Cure
          Oven), Chipmounter, Auto Inspection Machine, spare parts & consumables
          for Semicon and Electronics industries. Our company is affiliated with
          Minami Co. Ltd. Japan with common goals to provide high quality of
          products to our customers through high quality technical services at
          all times. Our primary measure of success is satisfaction.
        </p>
        <h1 className="text-5xl font-bold text-primaryGreen mt-7">VISION</h1>
        <p className="text-lg text-gray-700">
          To provide our customer's with high quality, reliable products and
          services 100% on time.
        </p>
        <h1 className="text-5xl font-bold text-primaryGreen mt-5">MISSION</h1>
        <p className="text-lg text-gray-700">
          Minami Machineries supplies high quality and pre customized machines
          at reasonable cost.
        </p>
      </div>
    </div>
  );
};

export default About;
