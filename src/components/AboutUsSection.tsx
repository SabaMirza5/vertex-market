
import React from "react";
import aboutusimg from "../../public/aboutusimg.jpg";


const AboutUsSection = () => {
  return (
    <section className="md:py-20 py-10 bg-white">
      <div className=" mx-auto px-6 md:px-8 grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-5 items-center">
        <div>
          <p className="text-[#1da1f2] font-semibold uppercase tracking-wider ">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Company Overview:{" "}
            <span className="text-gray-900 underline decoration-[#1da1f2]">
              Vertex Markets
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {/* A market research and analysis firm focuses on collecting and
            analyzing data related to markets, consumer behavior, competitors,
            and industry developments. */}

            A market research and analysis firm specializes in gathering and interpreting data on markets, consumer behavior, competitors, and industry trends. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            {/* These firms are essential in guiding businesses toward informed
            decision-making by delivering valuable insights into market trends,
            customer needs, and strategic growth opportunities. */}
            These insights help businesses make informed decisions, understand customer needs, and identify new opportunities for growth.
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
