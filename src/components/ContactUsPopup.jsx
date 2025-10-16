import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ContactUsPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex  backdrop-blur-sm items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg md:p-8 p-4 relative transform transition-all duration-300 scale-100 opacity-100 animate-fadeInUp`}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#1da1f2] rounded-t-2xl" />

        <button
          onClick={onClose}
          className="absolute top-4 md:right-5 right-1 bg-[#052365] p-1.5 text-white  rounded-md  transition"
        >
          <IoCloseSharp className="text-white md:text-2xl text-base" />
        </button>

        <h2 className="md:text-3xl text-xl font-bold text-[#052365] text-center mt-7">
          Book Free Demo
        </h2>
        <p className="text-gray-600 md:text-sm text-xs text-center mb-2">
          Fill out the form below and our team will contact you shortly
        </p>

        <form className="space-y-3">
          <div>
            <label className="block text-[#052365]  md:text-sm text-xs font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full  md:text-sm text-xs text-gray-500  border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1da1f2] focus:border-[#1da1f2] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-[#052365]  md:text-sm text-xs font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full  md:text-sm text-xs text-gray-500  border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1da1f2] focus:border-[#1da1f2] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-[#052365]  md:text-sm text-xs font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              className="w-full  md:text-sm text-xs text-gray-500  border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1da1f2] focus:border-[#1da1f2] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-[#052365]  md:text-sm text-xs font-medium mb-1">
              Your Requirements
            </label>
            <textarea
              rows="3"
              placeholder="Tell us about your requirements"
              className="w-full  md:text-sm text-xs text-gray-500  border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1da1f2] resize-none focus:border-[#1da1f2] outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1da1f2] text-white py-3 rounded-lg font-semibold hover:bg-[#052365] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPopup;
