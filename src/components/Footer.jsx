import React from "react";

const navItems = [
  "Home",
  "About Us",
  "Products",
  "Services",
  "Affiliates",
  "Contact Us",
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-500">
        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Google Maps Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 px-8">
          <h3 className="font-semibold text-lg mb-4">Our Location</h3>
          <div className="w-full h-40 bg-gray-400 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.190648163546!2d121.11239350000001!3d14.242098199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6292930445b9%3A0x8c652543e3009035!2sThe%20Centrale%20Building!5e0!3m2!1sen!2sph!4v1738871098926!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p>Phone: 0917-5207550</p>
          <p>Email: sales-tech@mkminami.com.ph</p>
          <p>
            Address: Unit 307 The Centrale Building, Southpoint Subd. ,
            Banay-Banay, Cabuyao,Laguna
          </p>
          <div className="mt-4">
            <p className="text-sm">
              Copyright © 2025 MINAMI Machineries & Equipment Inc.
              <br />
              All Rights Reserved. Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
