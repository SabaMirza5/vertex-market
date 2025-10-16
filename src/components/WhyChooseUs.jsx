import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className=" mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image */}
         <div className="w-full lg:w-1/2">
          <video
            src="https://falconfutures.in/assets/video/hero3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg w-full h-full object-cover"
          ></video>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          <h5 className="text-[#1da1f2] font-semibold uppercase tracking-wide mb-2">
            Why Choose Us
          </h5>
          <h2 className="md:text-2xl text-xl xl:text-3xl font-bold text-gray-900 mb-6">
            Our Strengths, Core Capabilities, and &nbsp;
            <span className="border-b-4 border-[#1da1f2] pb-1">
              Unique Value for Clients
            </span>
          </h2>

          <ul className="space-y-4 text-gray-700 lg:text-sm text-xs">
            {[
              "Proven Expertise and Industry Experience",
              "End-to-End Research and Advisory Solutions",
              "Tailored Strategies and Flexible Engagement Models",
              "Cutting-Edge Tools and Technology-Driven Insights",
              "Proven Track Record with Client Success Stories",
              "Clear Value Proposition with Measurable Impact",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-[#1da1f2] w-5 h-5 mr-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
