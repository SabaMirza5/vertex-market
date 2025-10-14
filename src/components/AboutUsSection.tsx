
import React from "react";
import aboutusimg from "../../public/aboutusimg.jpg";


const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-6 md:px-8 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Company Overview:{" "}
            <span className="text-gray-900 underline decoration-blue-500">
              Vertex Markets
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A market research and analysis firm focuses on collecting and
            analyzing data related to markets, consumer behavior, competitors,
            and industry developments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These firms are essential in guiding businesses toward informed
            decision-making by delivering valuable insights into market trends,
            customer needs, and strategic growth opportunities.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={aboutusimg}
            alt="Company Overview"
            className=" w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
