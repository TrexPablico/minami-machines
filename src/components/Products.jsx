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

import product15 from "../assets/Products/img15.png";
import product16 from "../assets/Products/img16.jpg";
import product17 from "../assets/Products/img17.jpg";
import product18 from "../assets/Products/img18.jpg";
import product19 from "../assets/Products/img19.jpg";
import product20 from "../assets/Products/img20.jpg";
import product21 from "../assets/Products/img21.jpg";
import product22 from "../assets/Products/img22.jpg";
import product23 from "../assets/Products/img23.jpg";
import product24 from "../assets/Products/img24.jpg";
import product25 from "../assets/Products/img25.jpeg";
import product26 from "../assets/Products/img26.jpeg";
import product27 from "../assets/Products/img27.jpeg";
import product28 from "../assets/Products/img28.jpeg";
import product29 from "../assets/Products/img29.jpeg";
import product30 from "../assets/Products/img30.jpeg";
import product31 from "../assets/Products/img31.jpeg";
import product32 from "../assets/Products/img32.jpeg";
import product33 from "../assets/Products/img33.jpeg";
import product34 from "../assets/Products/img34.jpeg";
import product35 from "../assets/Products/img35.jpg";
import product36 from "../assets/Products/img36.jpg";
import product37 from "../assets/Products/img37.jpg";
import product38 from "../assets/Products/img38.jpg";

const Products = () => {
  const [categories, setCategories] = useState([
    { title: "High accuracy special printer", active: true },
    { title: "Ball Placer with Screen Printer", active: false },
    { title: "Ball Inspection & Rework", active: false },
    { title: "Laser Reflow", active: false },
    { title: "Spare Parts", active: false },
    { title: "Loader / Unloader", active: false },
    { title: "Conveyor", active: false },
    { title: "Microscope", active: false },
    { title: "Paints & Coatings", active: false },

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
    {
      name: "PCB Magazine Loader",
      category: "Loader / Unloader",
      image: product16,
    },
    {
      name: "PCB Magazine Unloader",
      category: "Loader / Unloader",
      image: product17,
    },
    {
      name: "AC/DC Motor & Driver",
      category: "Spare Parts",
      image: product18,
    },
    {
      name: "Adhesive Tape",
      category: "Spare Parts",
      image: product19,
    },
    {
      name: "Cotton Rolls",
      category: "Spare Parts",
      image: product20,
    },
    {
      name: "Conston Spring",
      category: "Spare Parts",
      image: product21,
    },
    {
      name: "Hytalex Tape",
      category: "Spare Parts",
      image: product22,
    },
    {
      name: "Ball Screw",
      category: "Spare Parts",
      image: product23,
    },
    {
      name: "Stencils (Metal/Eform/Mesh)",
      category: "Spare Parts",
      image: product24,
    },
    {
      name: "Alpine Conveyor",
      category: "Conveyor",
      image: product25,
    },
    {
      name: "Inclined Conveyor",
      category: "Conveyor",
      image: product26,
    },
    {
      name: "Spiral Conveyor",
      category: "Conveyor",
      image: product27,
    },
    {
      name: "Wedge Conveyor",
      category: "Conveyor",
      image: product28,
    },
    {
      name: "Dovetails",
      category: "Microscope",
      image: product29,
    },

    {
      name: "Measuring Scopes",
      category: "Microscope",
      image: product30,
    },
    {
      name: "Airpits",
      category: "Microscope",
      image: product31,
    },
    {
      name: "Lens",
      category: "Microscope",
      image: product32,
    },
    {
      name: "IC Transport Tray",
      category: "",
      image: product33,
    },
    {
      name: "Facilea",
      category: "",
      image: product34,
    },
    {
      name: "Structural Epoxies",
      category: "Paints & Coatings",
      image: product35,
    },
    {
      name: "Protective Coatings",
      category: "Paints & Coatings",
      image: product36,
    },
    {
      name: "Epoxy Floor Coating System",
      category: "Paints & Coatings",
      image: product37,
    },
    {
      name: "Ultracote Paints & Coating",
      category: "Paints & Coatings",
      image: product38,
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
