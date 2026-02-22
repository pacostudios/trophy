import React from "react";

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0A3D62] relative w-full max-w-[330px] mx-auto rounded-[8px] overflow-hidden cursor-pointer">
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-5 md:p-6 lg:p-7">
        <div className="mb-6">{icon}</div>
        <h1 className="text-white font-black uppercase tracking-wide text-sm sm:text-base md:text-lg lg:text-[20px] leading-tight drop-shadow-lg font-medium">
          {title}
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};
