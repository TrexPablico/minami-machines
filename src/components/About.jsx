import React from "react";
import aboutimg from "../assets/About/aboutimg.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row h-screen lg:mt-1 mt-[500px]"
      id="about"
    >
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
          To be a global leader in the machinery and equipment industry, known
          for our cutting-edge technology, exceptional customer service, and
          dedication to creating value for our stakeholders. We aspire to drive
          progress in the industrial sector by offering solutions that not only
          meet but exceed the expectations of our clients, contributing to a
          more productive and sustainable future.
        </p>
        <h1 className="text-5xl font-bold text-primaryGreen mt-5">MISSION</h1>
        <p className="text-lg text-gray-700">
          To deliver innovative and high-quality machinery and equipment
          solutions that empower industries to achieve operational excellence.
          We are committed to providing our clients with reliable, efficient,
          and sustainable products, while fostering a culture of integrity,
          safety, and continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
