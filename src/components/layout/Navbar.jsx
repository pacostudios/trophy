import React, { useState } from "react";
import { Link } from "react-router-dom";
import trophyLogo from "../../assets/trophy_logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const text =
    "Pop down and see our friendly staff at Glenroy Sports & Trophies for all your sport,trophy and engraving needs,as we aim to please.";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Sports", to: "/sports" },
    { label: "Trophies", to: "/trophies" },
    { label: "Uniforms", to: "/uniforms" },
  ];

  return (
    <nav className="w-full">
      {/* Marquee bar */}
      <div className="overflow-hidden bg-[#F5F5F5] py-2 sm:py-3">
        <div className="flex w-max whitespace-nowrap gap-8 sm:gap-12 animate-marquee text-[10px] sm:text-[12px]">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={trophyLogo}
            alt="Logo"
            className="w-[36px] h-[32px] md:w-[40px] md:h-[36px] mr-2 md:mr-3"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-0">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.to}>
              <Link
                to={link.to}
                className="hover:text-[#0A3D62] transition px-3 lg:px-4 text-sm lg:text-base font-medium"
              >
                {link.label}
              </Link>
              {idx !== navLinks.length - 1 && (
                <div className="h-6 w-px bg-gray-300 mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#0A3D62] hover:bg-[#0A3D62] text-white font-semibold py-2 px-4 lg:px-5 rounded-[8px] transition-colors duration-200 text-sm lg:text-base"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`w-7 h-7 transition-all duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`absolute w-7 h-7 transition-all duration-200 ${menuOpen ? "opacity-100" : "opacity-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40 flex flex-col md:hidden p-4 sm:p-6 animate-fadein space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-2 sm:py-2.5 px-3 sm:px-4 rounded hover:bg-[#F5F5F5] text-sm sm:text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-[#0A3D62] hover:bg-[#0C4370] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-[8px] transition-colors duration-200 text-sm sm:text-base text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
