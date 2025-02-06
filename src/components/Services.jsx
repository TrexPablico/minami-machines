import React from "react";
import Slider from "react-slick";
import p1 from "../assets/Services/m1.JPG";
import p2 from "../assets/Services/m2.JPG";
import p3 from "../assets/Services/m3.JPG";
import p4 from "../assets/Services/m4.JPG";
import p5 from "../assets/Services/m5.JPG";
import p6 from "../assets/Services/m6.JPG";
import p7 from "../assets/Services/m7.JPG";
import p8 from "../assets/Services/m8.JPG";
import p9 from "../assets/Services/m9.JPG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceItems = [
  { id: 1, title: "", description: "", image: p1 },
  { id: 2, title: "", description: "", image: p2 },
  { id: 3, title: "", description: "", image: p3 },
  { id: 4, title: "", description: "", image: p4 },
  { id: 5, title: "", description: "", image: p5 },
  { id: 6, title: "", description: "", image: p6 },
  { id: 7, title: "", description: "", image: p7 },
  { id: 8, title: "", description: "", image: p8 },
  { id: 9, title: "", description: "", image: p9 },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // large devices
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // medium devices
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480, // small devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const Services = () => {
  return (
    <section className="py-16 bg-slate-100 mt-10">
      <div className="w-4/5 m-auto">
        <h1 className="text-3xl font-bold text-primaryGreen text-center mb-8 font-Quicksand">
          Our Services
        </h1>
        <div className="w-full px-4">
          <Slider {...settings} className="gap-1">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-slate-100 rounded-lg  text-center mx-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
