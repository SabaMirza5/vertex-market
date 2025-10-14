"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <>
    <footer className="bg-[#052365] text-white border-t border-gray-200 p-10 ">
      <div className=" grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold  mb-3">Registered Office</h3>

          <div className="flex items-center gap-2 mb-2 ">
            <MdEmail className="text-[#ff7a00] text-lg" />
            <h2
             className="text-sm"
            >
              A-17, Sector-62, Noida, Uttar Pradesh-201309, India
            </h2>
          </div>

          <div className="flex items-center gap-2 mb-2 ">
            <MdEmail className="text-[#ff7a00] text-lg" />
            <a
              href="mailto:vertexmarkets2025@gmail.com"
              className="hover:underline text-sm"
            >
              vertexmarkets2025@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 mb-4 ">
            <MdPhone className="text-[#ff7a00] text-lg" />
            <a href="tel:+919211725852" className="text-sm">
              +91 9211725852
            </a>
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

        <div>
          <h3 className="text-xl font-semibold  mb-3 relative inline-block">
            Company
            <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-[#1da1f2] rounded-full"></span>
          </h3>

          <ul className="space-y-2 mt-4">
            {["About Us", "Careers"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className=" text-sm hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold  mb-3 relative inline-block">
            Resources
            <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-[#1da1f2] rounded-full"></span>
          </h3>

          <ul className="space-y-2 mt-4">
            {["Investment Tips", "Intraday Trading"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className=" text-sm hover:text-[#1da1f2] flex items-center gap-1"
                >
                  <span className="text-[#1da1f2]">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

<div className="bg-white text-center">© 2025 Vertex Markets. All Rights Reserved.</div>
    </>
  );
}

export default Footer;
