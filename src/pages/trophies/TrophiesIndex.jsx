import React, { useEffect } from "react";
import { TopBanner } from "../../components/common/TopBanner";
import { CatelogCard } from "../../components/common/CatelogCard";
import { Banner } from "../../components/common/Banner";
import FeatureChip from "../../components/common/FeatureChip";

export const TrophiesIndex = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.75 6H19.5V4.5C19.5 4.30109 19.421 4.11032 19.2803 3.96967C19.1397 3.82902 18.9489 3.75 18.75 3.75H5.25C5.05109 3.75 4.86032 3.82902 4.71967 3.96967C4.57902 4.11032 4.5 4.30109 4.5 4.5V6H2.25C1.85218 6 1.47064 6.15804 1.18934 6.43934C0.908035 6.72064 0.75 7.10218 0.75 7.5V9C0.75 9.99456 1.14509 10.9484 1.84835 11.6517C2.19657 11.9999 2.60997 12.2761 3.06494 12.4645C3.51991 12.653 4.00754 12.75 4.5 12.75H4.84219C5.28398 14.1501 6.12634 15.39 7.26516 16.3166C8.40398 17.2431 9.78933 17.8157 11.25 17.9634V20.25H9C8.80109 20.25 8.61032 20.329 8.46967 20.4697C8.32902 20.6103 8.25 20.8011 8.25 21C8.25 21.1989 8.32902 21.3897 8.46967 21.5303C8.61032 21.671 8.80109 21.75 9 21.75H15C15.1989 21.75 15.3897 21.671 15.5303 21.5303C15.671 21.3897 15.75 21.1989 15.75 21C15.75 20.8011 15.671 20.6103 15.5303 20.4697C15.3897 20.329 15.1989 20.25 15 20.25H12.75V17.9606C15.7444 17.6578 18.2288 15.5569 19.1325 12.75H19.5C20.4946 12.75 21.4484 12.3549 22.1516 11.6517C22.8549 10.9484 23.25 9.99456 23.25 9V7.5C23.25 7.10218 23.092 6.72064 22.8107 6.43934C22.5294 6.15804 22.1478 6 21.75 6ZM4.5 11.25C3.90326 11.25 3.33097 11.0129 2.90901 10.591C2.48705 10.169 2.25 9.59674 2.25 9V7.5H4.5V10.5C4.5 10.75 4.51219 11 4.53656 11.25H4.5ZM18 10.4156C18 13.7456 15.2812 16.4756 12 16.5C10.4087 16.5 8.88258 15.8679 7.75736 14.7426C6.63214 13.6174 6 12.0913 6 10.5V5.25H18V10.4156ZM21.75 9C21.75 9.59674 21.5129 10.169 21.091 10.591C20.669 11.0129 20.0967 11.25 19.5 11.25H19.4531C19.4839 10.9729 19.4995 10.6944 19.5 10.4156V7.5H21.75V9Z"
        fill="white"
      />
    </svg>
  );

  const products = [
    {
      id: 1,
      alt: "Trophy1",
      src: "/Trophy1.png",
    },
    {
      id: 2,
      alt: "Trophy2",
      src: "/Trophy2.png",
    },
    {
      id: 3,
      alt: "Trophy3",
      src: "/Trophy3.png",
    },
    {
      id: 4,
      alt: "Trophy4",
      src: "/Trophy4.png",
    },
    {
      id: 5,
      alt: "Trophy5",
      src: "/Trophy5.png",
    },
    {
      id: 6,
      alt: "Trophy6",
      src: "/Trophy6.png",
    },
  ];

  const TrophyIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 5.5V4H18V5.5C18 8.5 16 11 12 11C8 11 6 8.5 6 5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 14H14V16.5C14 17.328 13.328 18 12.5 18H11.5C10.672 18 10 17.328 10 16.5V14Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 4H6C5.17157 4 4.5 4.67157 4.5 5.5C4.5 7.15685 5.84315 8.5 7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 4H18C18.8284 4 19.5 4.67157 19.5 5.5C19.5 7.15685 18.1569 8.5 16.5 8.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );

  const EngraveIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 10H17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 13H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );

  const MedalIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="13"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 4L11.5 7.5H12.5L15 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const features = [
    {
      title: "Extensive Trophy Range",
      subtitle: "For Every Event",
      icon: TrophyIcon,
    },
    {
      title: "Professional Engraving",
      subtitle: "Personalised Awards",
      icon: EngraveIcon,
    },
    {
      title: "Quality Materials",
      subtitle: "Built To Last",
      icon: MedalIcon,
    },
  ];

  const catelogData = {
    title: "Trophy Catalogue",
    description:
      "Browse our comprehensive trophy catalog with hundreds of options for every occasion.",
    buttons: [
      { title: "trophiesgalore.com", link: "https://www.trophiesgalore.com.au/" },
      { title: "trophy.com", link: "https://trophy.com.au/" },
      { title: "trophies.com", link: "https://trophies.com.au/" },
    ],
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const animatedElements = document.querySelectorAll(
      ".scroll-fade-up, .scroll-zoom-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <TopBanner
        image={"/Trophies_banner.webp"}
        icon={icon}
        chip_title={"TROPHIES & AWARDS"}
        title={"Trophies & Awards Collection"}
        description={
          "Celebrate every achievement with our premium range of trophies, medals, and awards"
        }
      />

      <section className="w-full bg-white py-14 px-6">
        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-[38px] font-medium mb-2 sm:mb-3 text-[#0A3D62] text-center scroll-fade-up">
          Premium Trophies & Awards
        </p>

        {/* Product Cards Row */}
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-center rounded-lg scroll-zoom-card"
              style={{
                backgroundColor: "#f3f4f6",
                width: "200px",
                height: "200px",
              }}
            >
              <img
                src={product.src}
                alt={product.alt}
                className="w-30 h-30 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center mb-10 scroll-fade-up">
          <p className="text-sm leading-relaxed">
            Glenroy Sports & Trophies offers a comprehensive range of trophies
            and awards to celebrate every achievement. From sports competitions
            to corporate recognition, we have the perfect award for your needs.
            Browse our extensive catalog featuring premium quality trophies,
            medals, plaques, and custom awards. We also provide professional
            engraving services to personalize your awards and create lasting
            memories.
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-col items-center gap-4 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-full md:w-auto scroll-fade-up"
            >
              <FeatureChip
                icon={feature.icon}
                subtitle={feature.subtitle}
                title={feature.title}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#F5F5F5] flex flex-col justify-center items-center gap-4 py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
        <p className="text-2xl sm:text-3xl md:text-[38px] font-medium text-[#0A3D62] text-center scroll-fade-up">
          Ready to Order?
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] opacity-90 drop-shadow-md font-medium text-center scroll-fade-up">
          Click below to browse our full trophies catalog and place your order.
        </p>

        <div>
          <CatelogCard data={catelogData} />
        </div>
      </div>

      <Banner image={"/Trophy_Image.png"} />
    </div>
  );
};
