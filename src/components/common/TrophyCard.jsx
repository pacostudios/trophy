import { useState } from "react";

export default function TrophyCard({ image, icon, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-[440/370] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer">
      {/* Background Image */}
      <img
        src={image || "https://placehold.co/440x370/3a5068/3a5068"}
        alt="Award background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-5 md:p-6 lg:p-7">
        {/* Trophy Icon */}
        <div>{icon}</div>

        {/* Bottom Content */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <h1 className="text-white font-black uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight drop-shadow-lg font-medium">
            {title}
          </h1>

          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] opacity-90 drop-shadow-md font-medium">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg drop-shadow-md">
              Explore Collective
            </span>

            <button
              className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-200 flex-shrink-0 ${
                hovered ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect width="40" height="40" rx="20" fill="white" />
                <path
                  d="M25.0306 20.5307L17.5306 28.0307C17.4609 28.1004 17.3781 28.1556 17.2871 28.1933C17.1961 28.2311 17.0985 28.2505 16.9999 28.2505C16.9014 28.2505 16.8038 28.2311 16.7128 28.1933C16.6217 28.1556 16.539 28.1004 16.4693 28.0307C16.3996 27.961 16.3443 27.8783 16.3066 27.7872C16.2689 27.6962 16.2495 27.5986 16.2495 27.5001C16.2495 27.4015 16.2689 27.3039 16.3066 27.2129C16.3443 27.1218 16.3996 27.0391 16.4693 26.9694L23.4396 20.0001L16.4693 13.0307C16.3286 12.8899 16.2495 12.6991 16.2495 12.5001C16.2495 12.301 16.3286 12.1102 16.4693 11.9694C16.61 11.8287 16.8009 11.7496 16.9999 11.7496C17.199 11.7496 17.3898 11.8287 17.5306 11.9694L25.0306 19.4694C25.1003 19.5391 25.1556 19.6218 25.1933 19.7128C25.2311 19.8039 25.2505 19.9015 25.2505 20.0001C25.2505 20.0986 25.2311 20.1962 25.1933 20.2873C25.1556 20.3783 25.1003 20.461 25.0306 20.5307Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
