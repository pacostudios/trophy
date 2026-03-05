import React from "react";

export const VedioComponent = () => {
  const videoData = [
    {
      src: "/Trophyvedio1.mp4",
      poster: "/video-thumb1.jpg",
    },
    {
      src: "/Trophyvedio2.mp4",
      poster: "/video-thumb2.jpg",
    },
    {
      src: "/Trophyvedio3.mp4",
      poster: "/video-thumb3.jpg",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center gap-6 py-8 sm:py-14 md:py-18 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0A3D62] text-center mb-4 scroll-fade-up">
        Trophy Showcase Videos
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-6 max-w-xl scroll-fade-up">
        Get a closer look at our trophies and awards with these video previews,
        shot in-store.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl scroll-fade-up">
        {videoData.map((video, idx) => (
          <div
            key={idx}
            // Increased height by changing aspect ratio from aspect-[440/370] (≈1.19:1) to aspect-[440/570] (≈0.77:1)
            className="relative w-full max-w-[440px] mx-auto aspect-[440/570] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 w-full h-full  ">
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster={video.poster}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Overlay like TrophyCard for visual parity */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          </div>
        ))}
      </div>
    </div>
  );
};
