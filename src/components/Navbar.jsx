
import React, { useState } from "react";
import mainlogo from "../../public/mainlogo.png";
import { Link } from "react-router-dom";
import ContactUsPopup from "./ContactUsPopup";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

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
      "Investment Tips",
      "Intraday Trading Tips",
      "Long Term Stocks",
    ],
  };

  const hasDropdown = (item) => !!menuItems[item];

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

          <div className="hidden md:flex lg:space-x-6 items-center relative">
            {["Home", "Services", "Pricing", "Market Tips", "About Us"].map(
              (item) => (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => hasDropdown(item) && setOpenDropdown(item)}
                  onMouseLeave={() => hasDropdown(item) && setOpenDropdown(null)}
                >
                  {hasDropdown(item) ? (
                    <button className="hover:text-[#1da1f2] px-3 py-2 rounded transition">
                      {item}
                    </button>
                  ) : (
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(/\s+/g, "")}`
                      }
                      className="hover:text-[#1da1f2] px-3 py-2 rounded transition"
                      onClick={handleLinkClick}
                    >
                      {item}
                    </Link>
                  )}

                  {hasDropdown(item) && openDropdown === item && (
                    <div className="absolute left-0 mt-1 w-56 bg-[#052365] text-white rounded-lg shadow-lg">
                      {menuItems[item].map((subItem, index) => (
                        <Link
                          key={index}
                          to={`/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${subItem
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-4 py-3 text-sm hover:bg-white hover:text-[#1da1f2]"
                          onClick={handleLinkClick}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          <div className="md:block hidden">
            <button  onClick={() => setShowPopup(true)} className="bg-[#052365] border border-[#2563eb] hover:bg-blue-900 text-white rounded-full py-2 px-5 capitalize">
              Contact Us
            </button>
          </div>

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

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1 text-center">
          {["Home", "Services", "Pricing", "Market Tips", "About Us"].map(
            (item) => (
              <div key={item}>
                {hasDropdown(item) ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item ? null : item)
                      }
                      className="block w-full text-left px-3 py-1 rounded transition hover:text-[#1da1f2]"
                    >
                      {item}
                    </button>
                    {openDropdown === item && (
                      <div className="rounded-md">
                        {menuItems[item].map((subItem, i) => (
                          <Link
                            key={i}
                            to={`/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${subItem
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-sm bg-[#1da1f2] text-white p-2  hover:text-[#1da1f2]"
                            onClick={handleLinkClick} 
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className="block w-full text-left px-3 py-2 rounded transition hover:text-[#1da1f2]"
                    onClick={handleLinkClick} 
                  >
                    {item}
                  </Link>
                )}
              </div>
            )
          )}

          <button className="bg-[#052365] w-full border border-[#2563eb] hover:bg-blue-900 text-white rounded-full py-2 px-5 capitalize">
            Contact Us
          </button>
        </div>
      )}
    </nav>

      <ContactUsPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;
