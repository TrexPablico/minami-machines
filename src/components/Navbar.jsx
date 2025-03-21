import React, { useState } from "react";
import logo from "../assets/Navbar/mklogo.jpg";
import logo1 from "../assets/Navbar/mklogo1.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Tracks which dropdown is open

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    /*{
      name: "Affiliates",
      href: "#",
      subItems: [
        {
          name: "Mishima Kosan Co.",
          href: "https://en.mishimakosan.com/business/product/",
        },
        { name: "CKD", href: "https://www.ckd.co.jp/en/productinfo/" },
        {
          name: "Kano Engineering Co., Ltd.",
          href: "https://kano-web.co.jp/en/product.html",
        },
        {
          name: "Miruc Optical Co., Ltd",
          href: "https://mirucoptical.com/",
        },
      ],
    },*/
    { name: "Contact Us", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Toggles visibility for the correct dropdown
  };

  const handleSubItemClick = (href) => {
    setOpenDropdownIndex(null); // Closes dropdown
    setIsOpen(false); // Closes mobile menu
    window.open(href, "_blank");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src={logo1}
                alt="Logo"
                className="h-[90px] object-cover cursor-pointer"
              />
            </a>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-7 font-bold">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {!item.subItems ? (
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-primaryGreen"
                  >
                    {item.name}
                  </a>
                ) : (
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="cursor-pointer text-gray-800 hover:text-primaryGreen flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className="text-sm" />
                    {openDropdownIndex === index && (
                      <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded w-64 z-50">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            onClick={() => handleSubItemClick(subItem.href)}
                            className="block px-4 py-2 text-gray-800 hover:bg-primaryGreen hover:text-white whitespace-nowrap"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call Us Button for Desktop */}
          <div className="hidden md:block">
            <button className="bg-primaryYellow text-white px-4 py-2 rounded hover:bg-primaryGreen">
              Call Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pb-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {!item.subItems ? (
                <a
                  href={item.href}
                  className="block text-gray-800 py-2 hover:text-primaryGreen"
                >
                  {item.name}
                </a>
              ) : (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="block w-full text-left py-2 text-gray-800 hover:text-primaryGreen flex items-center space-x-2"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className="text-sm" />
                  </button>
                  <div
                    className={`pl-4 transition-all duration-300 ease-in-out ${
                      openDropdownIndex === index
                        ? "max-h-screen"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        onClick={() => handleSubItemClick(subItem.href)}
                        className="block text-gray-800 py-2 hover:text-primaryGreen whitespace-nowrap"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="tel:0495441684">
            <button className="w-40 bg-primaryYellow text-white px-4 py-2 rounded hover:bg-primaryGreen mt-4">
              Call Us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
