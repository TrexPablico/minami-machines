// src/components/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-5">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">Description of the product goes here.</p>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <ul className="list-none space-y-2">
            <li>
              <strong>Type:</strong> Type of the product
            </li>
            <li>
              <strong>Screen frame size:</strong> Size of the screen frame
            </li>
            <li>
              <strong>Accommodated PCB/substrate size:</strong> Size of the
              PCB/substrate
            </li>
            <li>
              <strong>Overall Size:</strong> Overall size of the product
            </li>
            <li>
              <strong>Weight:</strong> Weight of the product
            </li>
            <li>
              <strong>Repetitive positioning accuracy for printing:</strong>{" "}
              Accuracy details
            </li>
            <li>
              <strong>Power Used:</strong> Power used by the product
            </li>
            <li>
              <strong>Image processing method:</strong> Method used for image
              processing
            </li>
            <li>
              <strong>Standard accessory:</strong> Standard accessories included
            </li>
            <li>
              <strong>Options:</strong> Optional features available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
