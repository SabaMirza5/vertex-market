"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#052365] text-white border-t border-gray-200 md:p-10 p-5 ">
        <div className=" grid md:grid-cols-3 md:gap-10 gap-5">
          <div className="">
            <h3 className="md:text-xl text-base font-semibold  mb-3">
              Registered Office
            </h3>

            <div className="flex items-center gap-2 mb-2 ">
              <MdEmail className="text-[#1da1f2] text-lg" />
              <h2 className="md:text-sm text-xs">
                A-16, Sector-62, Noida, Uttar Pradesh-201309, India
              </h2>
            </div>

            <div className="flex items-center gap-2 mb-2 ">
              <MdEmail className="text-[#1da1f2] text-lg" />
              <a
                href="mailto:vertexmarkets2025@gmail.com"
                className="hover:underline md:text-sm text-xs"
              >
                vertexmarkets2025@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 mb-4 ">
              <MdPhone className="text-[#1da1f2] text-lg" />
              <p className="md:text-sm text-xs">+70422 23957</p>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:opacity-80 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:opacity-80 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:opacity-80 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:opacity-80 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="flex md:items-center items-start  flex-col">
            <h3 className="md:text-xl text-base font-semibold  mb-3 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-[#1da1f2] rounded-full"></span>
            </h3>

             <ul className="space-y-2 mt-4">
              <li>
                <Link
                  to="/aboutus"
                  className="md:text-sm text-xs hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="md:text-sm text-xs hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex md:items-center items-start flex-col">
            <h3 className="md:text-xl text-base font-semibold  mb-3 relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-[#1da1f2] rounded-full"></span>
            </h3>

            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  to="/market-tips/investment-tips"
                  className="md:text-sm text-xs hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> Investment Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/market-tips/intraday-trading-tips"
                  className="md:text-sm text-xs hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> Intraday Trading
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-white text-center py-2 md:text-sm text-xs">
        © 2025 Vertex Markets. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
