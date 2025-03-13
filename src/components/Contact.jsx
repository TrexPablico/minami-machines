import React, { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.user_message.value;

    const nameRegex = /^[A-Za-z\s]{1,25}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,30}$/;

    if (!nameRegex.test(userName)) {
      toast.error("Invalid name. Only letters and spaces are allowed");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      toast.error("Invalid email address.");
      return;
    }

    emailjs
      .sendForm("service_spkfe68", "template_sot8cyb", form.current, {
        publicKey: "BXSmdNjmvAYfY_ACN",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            style: {
              background: "orange",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "orange",
            },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

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
              <span>0495441684</span>
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
            <form ref={form} onSubmit={sendEmail}>
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
                  name="user_name"
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
                  name="user_email"
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
                  name="user_message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primaryGreen text-white py-2 rounded-md hover:bg-primaryYellow transition-colors"
              >
                Send Message
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
