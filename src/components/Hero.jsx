import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/Hero/hero1.jpeg";
import slider2 from "../assets/Hero/hero2.jpeg";
import slider3 from "../assets/Hero/hero3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/5 flex flex-col justify-center items-start p-8 bg-white">
        <div className="lg:mt-[-150px] md:mt-0">
          <h1 className="text-4xl font-bold text-primaryGreen">
            Minami Machineries & Equipment Inc.
          </h1>

          <p className="text-lg text-gray-700 mt-4">
            At Minami, we meet society's needs through innovative surface
            mounting equipment. As electronic demands grow and values diversify,
            our mission is to develop technology from users' perspectives. We
            prioritize environmental care, creating eco-friendly products like
            Pb-free screen printers. For details, see our "Eco-Friendly" page.
          </p>
          <a href="#about">
            <button className="mt-6 px-6 py-3 bg-primaryYellow text-white rounded-lg text-lg hover:bg-primaryGreen">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-3/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-100"></div>
        <Slider {...settings} className="w-full h-full">
          <img
            src={slider1}
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
          <img
            src={slider2}
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
          <img
            src={slider3}
            alt="Slider 3"
            className="w-full h-full object-cover"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
