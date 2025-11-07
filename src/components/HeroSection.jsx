import React, { useState } from "react";
import bgimg from "../../public/bgimg.jpg";
import ContactUsPopup from "./ContactUsPopup";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section
        className="relative bg-cover  bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
          <p className="text-[#1da1f2] uppercase tracking-widest mb-4 text-sm">
            Applying Appropriate
          </p>

          <h1 className="md:text-xl text-xl lg:text-5xl font-bold leading-tight mb-4">
            Empowering Market Research
            <br className="md:block hidden" />
            <span className="text-white">to Achieve Exceptional Results.</span>
          </h1>

          <p className="text-gray-200 mb-8 md:text-lg text-sm">
            Success doesn’t come from luck — it comes from insight and strategy.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#1da1f2] hover:bg-blue-600 text-white font-semibold md:py-2.5 py-1.5 px-12 rounded-full flex items-center justify-center mx-auto transition-all duration-300"
          >
            Get Started
            <span className="ml-2 text-lg">→</span>
          </button>
        </div>

        <div className="absolute bottom-0 w-full bg-[#0b0b0b] text-sm text-white overflow-hidden border-t border-gray-800">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="px-4 py-2 flex items-center">
              <span className="text-gray-400 mr-2">NIFTY 50</span>
              <span className="text-[#1da1f2] font-semibold">₹24,781.10</span>
              <span className="text-green-400 ml-2">+125.30 (+0.51%)</span>
            </div>
            <div className="px-4 py-2 flex items-center">
              <span className="text-gray-400 mr-2">Gold</span>
              <span className="text-[#1da1f2] font-semibold">₹6,245.30</span>
              <span className="text-green-400 ml-2">+12.50 (+0.20%)</span>
            </div>
            <div className="px-4 py-2 flex items-center">
              <span className="text-gray-400 mr-2">Silver</span>
              <span className="text-[#1da1f2] font-semibold">₹82.15</span>
              <span className="text-red-400 ml-2">-0.75 (-0.90%)</span>
            </div>
            <div className="px-4 py-2 flex items-center">
              <span className="text-gray-400 mr-2">Crude Oil</span>
              <span className="text-[#1da1f2] font-semibold">₹6,845.20</span>
              <span className="text-green-400 ml-2">+44.25 (+0.65%)</span>
            </div>

            <div className="px-4 py-2 flex items-center">
              <span className="text-gray-400 mr-2">NIFTY 50</span>
              <span className="text-[#1da1f2]font-semibold">₹24,781.10</span>
              <span className="text-green-400 ml-2">+125.30 (+0.51%)</span>
            </div>
          </div>
        </div>
      </section>

      <ContactUsPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default HeroSection;
