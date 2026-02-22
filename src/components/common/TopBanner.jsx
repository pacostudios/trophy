import React from "react";

export const TopBanner = ({
  ischip = true,
  image,
  icon,
  chip_title,
  title,
  description,
}) => {
  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center">
      <img
        src={image}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16">
        {ischip && (
          <div className="py-2 px-6 bg-[#0A3D6280] rounded-full flex items-center gap-2 mb-4 sm:mb-6">
            {icon || ""}
            <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] font-semibold text-white uppercase">
              {chip_title || ""}
            </p>
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white text-center">
          {title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white max-w-2xl text-center">
          {description}{" "}
        </p>
      </div>
    </div>
  );
};
