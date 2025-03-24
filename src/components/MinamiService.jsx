import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
import { FaDraftingCompass } from "react-icons/fa";

const MinamiService = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center text-primaryGreen mb-8">
        Services
      </h1>

      {/* Service Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Service 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <GrVirtualMachine className="text-primaryGreen text-6xl mb-4" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Machine Re-Layout
          </h1>
          <p className="text-gray-600 text-center">
            Streamline your operations with our expert machine re-layout
            services.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <FaDraftingCompass className="text-primaryYellow text-6xl mb-4" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Preventive Maintenance & Calibration
          </h1>
          <p className="text-gray-600 text-center">
            Ensure efficiency and accuracy with regular maintenance and
            calibration.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <GiAutoRepair className="text-primaryGreen text-6xl mb-4" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Machine Repairs
          </h1>
          <p className="text-gray-600 text-center">
            Get professional and reliable repairs for all your machinery needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinamiService;
