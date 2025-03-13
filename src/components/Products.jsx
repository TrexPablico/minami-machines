import React, { useState } from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/Products/img01.jpg";
import product2 from "../assets/Products/img02.png";
import product3 from "../assets/Products/img03.jpg";
import product4 from "../assets/Products/img04.jpg";
import product5 from "../assets/Products/img05.jpg";
import product6 from "../assets/Products/img06.jpg";
import product7 from "../assets/Products/img07.jpg";
import product8 from "../assets/Products/img08.jpg";
import product9 from "../assets/Products/img09.jpg";
import product10 from "../assets/Products/img10.jpg";
import product11 from "../assets/Products/img11.jpg";
import product12 from "../assets/Products/img12.jpg";
import product13 from "../assets/Products/img13.jpg";
import product14 from "../assets/Products/img14.jpg";
import product15 from "../assets/Products/img15.png";

const Products = () => {
  const [categories, setCategories] = useState([
    { title: "High accuracy special printer", active: true },
    { title: "Ball Placer with Screen Printer", active: false },
    { title: "Ball Inspection & Rework", active: false },
    { title: "Laser Reflow", active: false },
    // Add more categories as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productsToShow, setProductsToShow] = useState(3);

  const products = [
    {
      name: "MK-D13",
      category: "Machineries",
      image: product1,
    },
    {
      name: "MK-888SV(MA)",
      category: "High accuracy special printer",
      image: product2,
    },
    {
      name: "MK-838SV",
      category: "High accuracy special printer",
      image: product3,
    },
    {
      name: "MK-BP1888",
      category: "Ball Placer with Screen Printer",
      image: product4,
    },
    {
      name: "MK-BP2000",
      category: "Ball Placer with Screen Printer",
      image: product5,
    },
    {
      name: "MK-BP5000",
      category: "Ball Placer with Screen Printer",
      image: product6,
    },
    {
      name: "MK-BP5000IR",
      category: "Ball Inspection & Rework",
      image: product7,
    },
    {
      name: "PLA-400",
      category: "Laser Reflow",
      image: product8,
    },
    {
      name: "MK-D11",
      category: "General-purpose type Screen Printer",
      image: product9,
    },
    {
      name: "MK-878SV",
      category: "General-purpose type Screen Printer",
      image: product10,
    },
    {
      name: "MK-MINI",
      category: "General-purpose type Screen Printer",
      image: product11,
    },
    {
      name: "MK-888SV",
      category: "High specification type Screen Printer",
      image: product12,
    },
    {
      name: "MK-888SV(LL)",
      category: "High specification type Screen Printer",
      image: product13,
    },

    {
      name: "PLR-100",
      category: "Laser Reflow",
      image: product15,
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
    <div
      className="w-full flex flex-col items-center justify-center gap-6 mt-20 px-5"
      id="products"
    >
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
          <Link
            to={`/products/${product.name}`}
            key={product.name}
            className="max-w-xs"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <p className="text-lg font-medium mt-2">{product.name}</p>
            <p className="text-sm text-gray-500">{product.price}</p>
          </Link>
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
