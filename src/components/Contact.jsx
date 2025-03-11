import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 mt-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
          {/* Left Div */}
          <div className="md:w-1/2 p-4 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-4 text-primaryGreen">
              Send us a message
            </h1>
            <p className="mb-8 text-primaryYellow">
              We'd love to hear from you! Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <FaEnvelope className="inline-block mr-2 text-primaryGreen" />
              <span>sales-tech@mkminami.com.ph</span>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <FaEnvelope className="inline-block mr-2 text-primaryGreen" />
              <span>jcorrales@mkminami.com.ph</span>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="inline-block mr-2 text-primaryGreen" />
              <span>0917-5207550</span>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="inline-block mr-2 text-primaryGreen" />
              <span>
                Unit 307 The Centrale Building, Southpoint Subd. , Banay-Banay,
                Cabuyao,Laguna
              </span>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <FaFacebook className="inline-block mr-2 text-primaryGreen" />
              <a
                href="https://web.facebook.com/minamimachineries"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minami Machineries and Equipment Inc.
              </a>
            </div>
          </div>

          {/* Right Div */}
          <div className="md:w-1/2 w-full p-4 bg-white rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primaryGreen text-white py-2 rounded-md hover:bg-primaryYellow transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
