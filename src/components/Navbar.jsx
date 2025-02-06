import React, { useState } from "react";
import logo from "../assets/Navbar/mklogo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Affiliates",
    "Contact Us",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-[60px] object-cover" />
          </div>
          <div className="hidden md:flex space-x-7 font-bold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-800 hover:text-primaryGreen"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="bg-primaryYellow text-white px-4 py-2 rounded hover:bg-primaryGreen">
              Call Us
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg ${isOpen ? "open" : ""}`}
      >
        <div className="px-4 pb-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-gray-800 py-2 hover:text-primaryGreen"
            >
              {item}
            </a>
          ))}
          <button className="w-40 bg-primaryYellow text-white px-4 py-2 rounded hover:bg-primaryGreen mt-4">
            Call Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
