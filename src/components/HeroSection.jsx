import React from "react";
import bgimg from "../../public/bgimg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover  bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
        <p className="text-[#1da1f2] uppercase tracking-widest mb-4 text-sm">
          Applying Appropriate
        </p>

        <h1 className="md:text-4xl text-xl lg:text-6xl font-bold leading-tight mb-4">
          Market Research Solutions <br className="md:block hidden" />
          <span className="text-white">With True Purpose</span>
        </h1>

        <p className="text-gray-200 mb-8 md:text-lg text-sm">
          It is not necessary to do extraordinary things to get extraordinary
          results.
        </p>

        <button className="bg-[#1da1f2] hover:bg-blue-600 text-white font-semibold md:py-2.5 py-1.5 px-12 rounded-full flex items-center justify-center mx-auto transition-all duration-300">
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
  );
};

export default HeroSection;
