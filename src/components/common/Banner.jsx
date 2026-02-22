import React from "react";
import {  useNavigate } from "react-router-dom";

export const Banner = ({ image }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-[#0A3D62] relative max-w-[1400px] w-full mx-auto overflow-hidden rounded flex justify-center my-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8 px-4 py-8 md:flex-row md:justify-between md:px-12 md:py-12 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-lg items-center md:items-start text-center md:text-left">
          <h2 className="text-white font-light text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-base leading-relaxed font-light">
            Visit our store or contact us today for expert advice on trophies,
            sports equipment, and custom apparel
          </p>
          <div>
            <button
              className="bg-[#C91526] px-6 py-3 rounded-full text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              onClick={() => handleNavigate()}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 flex justify-center">
          <img
            src={image}
            alt="Trophies - Gold, Silver and Bronze cups"
            className="h-40 sm:h-48 md:h-48 lg:h-56 object-contain drop-shadow-2xl relative md:absolute md:right-6 lg:right-0 md:-translate-y-11 lg:-translate-y-19"
          />
        </div>
      </div>
    </div>
  );
};
