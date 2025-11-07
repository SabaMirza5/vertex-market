import React from "react";
import bgabout from "../../public/bgabout.jpg";

const AboutPageSection = () => {
  return (
    <section
      className="relative bg-cover  bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgabout})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          About Vertex Markets Futures
        </h1>

        <p className="text-gray-200 mb-8 text-lg">
       Transforming Market Intelligence into Strategic Action
        </p>
      </div>
    </section>
  );
};

export default AboutPageSection;
