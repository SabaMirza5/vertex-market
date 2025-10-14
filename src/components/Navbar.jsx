
import React, { useState } from "react";
import mainlogo from "../../public/mainlogo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = {
    Services: [
      "Stock Cash",
      "Stock Future",
      "Stock Option",
      "Commodity",
      "Bullions",
      "Base Metals",
      "Energy",
      "HNI Services",
    ],
    Pricing: ["Regular Plan", "Premium Plan", "Ultra Premium Plan"],
    "Market Tips": [
      "Stock Market Tips",
      "Investment Tips",
      "Intraday Trading Tips",
      "Long Term Stocks",
      "Best Shares Today",
    ],
  };

  return (
    <nav className="sticky top-0 z-40 bg-white text-black shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-2 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src={mainlogo}
              alt="Logo"
              className="md:w-20 w-10 md:h-20 h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:space-x-6 items-center relative">
            {["Home", "Services", "Pricing", "Market Tips", "About Us"].map(
              (item) => (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* <a
                    href="#"
                    className="hover:text-[#1da1f2] px-3 py-2 rounded transition"
                  >
                    {item}
                  </a> */}
<Link
  to={
    item === "Home"
      ? "/"
      : `/${item.toLowerCase().replace(/\s+/g, "")}`
  }
  className="hover:text-[#1da1f2] px-3 py-2 rounded transition"
>
  {item}
</Link>
                  {/* Dropdown */}
                  {menuItems[item] && openDropdown === item && (
                    <div className="absolute left-0 mt-2 w-56 bg-[#052365] text-white rounded-lg shadow-lg">
                      {menuItems[item].map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm  hover:bg-white hover:text-[#1da1f2]"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Contact Button */}
          <div className="md:block hidden">
            <button className="bg-[#052365] border border-[#2563eb] hover:bg-blue-900 text-white rounded-lg py-2 px-5 capitalize">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-center">
          {["Home", "Services", "Pricing", "Market Tips", "About Us"].map(
            (item) => (
              <div key={item}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item ? null : item)
                  }
                  className="block w-full text-left px-3 py-2 rounded transition hover:text-[#1da1f2]"
                >
                  {item}
                </button>

                {/* Mobile Dropdown */}
                {menuItems[item] && openDropdown === item && (
                  <div className="pl-4">
                    {menuItems[item].map((subItem, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block text-sm text-gray-600 py-1 hover:text-[#1da1f2]"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          <button className="bg-[#052365] w-full border border-[#2563eb] hover:bg-blue-900 text-white rounded-lg py-2 px-5 capitalize">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
