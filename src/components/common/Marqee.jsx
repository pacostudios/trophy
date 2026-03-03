import React from "react";

const SportMarquee = ({
  words = ["Timeless", "Reliable", "Durable", "Crafted"],
  speed = 30,
  bgColor = "#0A3D62",
  textColor = "#ebe7e7",
  strokeColor = "rgba(249, 241, 242, 0.4)",
}) => {
  const displayWords = [...words, ...words, ...words, ...words];

  return (
    <div
      className="w-full overflow-hidden py-10 relative"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          width: "max-content",
          animation: `marquee-sport ${speed}s linear infinite`,
        }}
      >
        {displayWords.map((word, i) => (
          <div key={i} className="flex items-center">
            <div className="relative px-12 md:px-16">
              {/* Stroke Layer */}
              <span
                className="absolute inset-0 uppercase italic font-black select-none translate-x-[8px] translate-y-[6px]"
                style={{
                  WebkitTextStroke: `2px ${strokeColor}`,
                  color: "transparent",
                }}
              >
                {/* {word} */}
              </span>

              {/* Main Text */}
              <span
                className="relative text-7xl md:text-9xl font-bold italic uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                style={{ color: textColor }}
              >
                {word}
              </span>
            </div>

            {/* Separator */}
            <div className="flex gap-2 mx-4 h-16 items-center flex-shrink-0">
              <div
                className="w-4 h-full skew-x-[-20deg]"
                style={{ backgroundColor: strokeColor }}
              />
              <div
                className="w-1.5 h-full opacity-40 skew-x-[-20deg]"
                style={{ backgroundColor: strokeColor }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee-sport {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default SportMarquee;