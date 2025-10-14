import React from "react";
import { MdEmail } from "react-icons/md";

function TopNav() {
  return (
    <div className="flex justify-between items-center md:gap-0 gap-3 bg-black md:px-10 px-5 py-4 md:flex-row flex-col">
      <h2 className="text-white text-sm font-normal flex items-center gap-1 md:mr-3 ">
        <MdEmail />
        vertexmarkets2025@gmail.com
      </h2>

      <marquee behavior="" direction="ltr" className="text-white">
   
        Securities market investments carry inherent risks. Please review all
        relevant documents thoroughly before making any investment decisions.
      </marquee>
      <h2 className="text-white text-sm font-normal md:ml-3 ">
        vertexmarkets2025@gmail.com
      </h2>
    </div>
  );
}

export default TopNav;
