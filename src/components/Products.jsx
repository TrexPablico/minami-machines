import React, { useState } from "react";
import product1 from "../assets/Products/p1.jpg";
import product2 from "../assets/Products/p2.jpg";
import product3 from "../assets/Products/p3.jpg";
import product4 from "../assets/Products/p4.jpg";
import product5 from "../assets/Products/p5.jpg";
import product6 from "../assets/Products/p6.jpg";
import product7 from "../assets/Products/p7.jpg";
import product8 from "../assets/Products/p8.jpg";
import product9 from "../assets/Products/p9.jpg";

const Products = () => {
  const [categories, setCategories] = useState([
    { title: "Machineries", active: true },
    { title: "Sensors", active: false },
    { title: "Emergency Switch", active: false },
    { title: "Screws", active: false },
    // Add more categories as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productsToShow, setProductsToShow] = useState(3);

  const products = [
    {
      name: "MK-878sVII",
      category: "Machineries",
      image: product1,
    },
    {
      name: "Sensor ISE40-01-22-MEx129",
      category: "Sensors",
      image: product2,
    },
    {
      name: "PCB MAGAZINE UNLOADER",
      category: "Machineries",
      image: product3,
    },
    {
      name: "Digital Scope",
      category: "Machineries",
      image: product4,
    },
    {
      name: "MK-1208",
      category: "Machineries",
      image: product5,
    },
    {
      name: "Screw for Warp Plates",
      category: "Screws",
      image: product6,
    },
    {
      name: "Vacuum Sensor",
      category: "Sensors",
      image: product7,
    },
    {
      name: "Emergency Switch",
      category: "Emergency Switch",
      image: product8,
    },
    {
      name: "Ball Screw",
      category: "Screws",
      image: product9,
    },
    // Add more products as needed
  ];

  const handleClick = (title) => {
    setSelectedCategory(title);
    setProductsToShow(3); // Reset products to show when category changes
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const showMoreProducts = () => {
    setProductsToShow((prev) => prev + 3);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mt-20 px-5">
      {/* Header */}
      <div className="flex flex-col gap-3 self-start">
        <div className="flex items-center gap-2">
          <span className="w-[24px] h-[2px] bg-primaryYellow"></span>
          <span className="text-4xl text-primaryGreen uppercase font-bold">
            Our Products
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold">Discover our range</span>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-6 pb-3">
          {categories.map((item) => (
            <div
              key={item.title}
              onClick={() => handleClick(item.title)}
              className={`${
                item.title === selectedCategory
                  ? "text-primaryGreen border-b-2 border-primaryYellow"
                  : "text-gray-600"
              } text-lg font-medium cursor-pointer whitespace-nowrap`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredProducts.slice(0, productsToShow).map((product) => (
          <div key={product.name} className="max-w-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <p className="text-lg font-medium mt-2">{product.name}</p>
            <p className="text-sm text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProducts.length > productsToShow && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreProducts}
            className="px-4 py-2 bg-primaryYellow text-white rounded-md hover:bg-primaryGreen transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
