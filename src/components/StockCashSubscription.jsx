import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";

export default function StockCashSubscription({
  backgroundImage,
  mainTitle,
  subTitle,
  sectionTitle,
  sectionDescription,
  services = [],
}) {
  const location = useLocation();
  const [activeService, setActiveService] = useState("");

  const links = [
    "Stock Cash",
    "Stock Future",
    "Stock Option",
    "Commodity",
    "Bullions",
    "Base Metals",
    "Energy",
    "HNI Services",
  ];

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const matched = links.find((item) =>
      path.includes(item.toLowerCase().replace(/\s+/g, "-"))
    );
    if (matched) {
      setActiveService(matched);
    }
  }, [location.pathname]);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            {mainTitle}
          </h1>
          <p className="text-gray-200 mb-8 md:text-lg text-base">{subTitle}</p>
        </div>
      </section>

      <div className="bg-white min-h-screen p-2 md:p-12">
        <div className="lg:mt-12 mt-2 flex items-start gap-6 lg:flex-row flex-col">
          <div className="lg:w-[70%] w-full">
            <div className="p-6 md:p-0">
              <h2 className="text-xl md:text-3xl font-bold text-[#052365] mb-4">
                {sectionTitle}
              </h2>
              <p className="text-gray-700 mb-8 md:text-base text-sm">
                {sectionDescription}
              </p>
            </div>

            <div className="md:space-y-6 space-y-3">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-100 p-5 rounded shadow-sm">
                  <h3 className="md:text-lg text-base font-semibold mb-2 text-[#1da1f2]">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 md:text-sm text-xs">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[30%] w-full ">
            <div className="bg-white  rounded-md overflow-hidden font-sans shadow-2xl">
              <div className="bg-[#052365] text-white text-lg font-semibold text-center py-3">
                Our Services
              </div>

              <ul>
                {links.map((link) => {
                  const linkPath = `/services/${link
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;
                  const isActive = activeService === link;
                  return (
                    <li key={link}>
                      <Link
                        to={linkPath}
                        onClick={() => setActiveService(link)}
                        className={`block cursor-pointer px-5 py-3 text-[15px] border-b border-gray-200 transition-all duration-200 ${
                          isActive
                            ? "bg-[#1da1f2] border-l-4 border-l-[#052365] text-white font-medium"
                            : "hover:bg-gray-100 hover:ml-2 hover:border-l-4 hover:border-l-[#1da1f2] text-gray-700"
                        }`}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-5  space-y-3 border bg-[#052365] text-white text-center p-8  rounded-lg">
              <h2 className="md:text-2xl text-xl font-semibold ">Need Help</h2>
              <h2>
                Do you need help? Please call us for immediate assistance.
              </h2>
              <button className="flex items-center animate-bounce  text-[#2563eb] justify-center py-2 gap-2 mb-4 bg-white rounded-full w-full text-center ">
                <MdPhone className="text-[#2563eb] text-lg" />
                +91 9211725852
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
