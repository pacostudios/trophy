import React, { useEffect } from "react";
import { TopBanner } from "../../components/common/TopBanner";
import { CatelogCard } from "../../components/common/CatelogCard";
import { Banner } from "../../components/common/Banner";
import FeatureChip from "../../components/common/FeatureChip";

export const SportsIndex = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.25C9.41505 2.25298 6.93683 3.28116 5.109 5.109C3.28116 6.93683 2.25298 9.41505 2.25 12V17.25C2.25 17.8467 2.48705 18.419 2.90901 18.841C3.33097 19.2629 3.90326 19.5 4.5 19.5C4.97797 19.4992 5.44339 19.3469 5.82938 19.065C6.96844 18.2372 8.9625 17.25 12 17.25C15.0375 17.25 17.0316 18.2363 18.1697 19.0641C18.505 19.3099 18.9018 19.458 19.3161 19.4919C19.7305 19.5259 20.1461 19.4444 20.5169 19.2565C20.8878 19.0686 21.1993 18.7817 21.417 18.4275C21.6346 18.0733 21.7499 17.6657 21.75 17.25V12C21.747 9.41505 20.7188 6.93683 18.891 5.109C17.0632 3.28116 14.5849 2.25298 12 2.25ZM20.25 12V12.8316C19.0537 12.0913 17.7626 11.5167 16.4119 11.1234C16.1217 8.53734 15.1915 6.06435 13.7053 3.92813C15.5552 4.32144 17.2142 5.33744 18.4053 6.80649C19.5965 8.27555 20.2476 10.1087 20.25 12ZM12 4.15031C13.4976 6.0732 14.4787 8.34709 14.85 10.7559C12.9641 10.4147 11.0322 10.4147 9.14625 10.7559C9.52202 8.34771 10.504 6.0746 12 4.15031ZM10.2947 3.92813C8.80838 6.06462 7.87815 8.53795 7.58813 11.1244C6.23743 11.5177 4.94629 12.0923 3.75 12.8325V12C3.75242 10.1087 4.40355 8.27555 5.59466 6.80649C6.78577 5.33744 8.44478 4.32144 10.2947 3.92813ZM19.8431 17.9166C19.7184 17.9809 19.5781 18.0089 19.4382 17.9975C19.2984 17.9861 19.1645 17.9356 19.0519 17.8519C17.7338 16.8938 15.4406 15.75 12 15.75C8.55937 15.75 6.26625 16.8938 4.94812 17.8519C4.8355 17.9356 4.70164 17.9861 4.56176 17.9975C4.42189 18.0089 4.28161 17.9809 4.15688 17.9166C4.03278 17.8555 3.92862 17.7604 3.85657 17.6424C3.78452 17.5244 3.74755 17.3883 3.75 17.25V14.6316C6.1605 12.92 9.04366 12.0005 12 12.0005C14.9563 12.0005 17.8395 12.92 20.25 14.6316V17.25C20.2524 17.3883 20.2155 17.5244 20.1434 17.6424C20.0714 17.7604 19.9672 17.8555 19.8431 17.9166Z"
        fill="white"
      />
    </svg>
  );

  const products = [
    {
      id: 1,
      alt: "Soccer Ball",
      src: "/Football.png",
    },
    {
      id: 2,
      alt: "American Football",
      src: "/Amer-Football.png",
    },
    {
      id: 3,
      alt: "Baseball Bat",
      src: "/BaseballBat.png",
    },
    {
      id: 4,
      alt: "Baseball",
      src: "/Baseball.png",
    },
    {
      id: 5,
      alt: "Cricket Bat",
      src: "/bat.png",
    },
    {
      id: 6,
      alt: "Cricket Ball",
      src: "/cricketball.png",
    },
  ];

  const BallIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2C9.5 4.5 7.5 8 7.5 12C7.5 16 9.5 19.5 12 22"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 2C14.5 4.5 16.5 8 16.5 12C16.5 16 14.5 19.5 12 22"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 9.5C7 10.5 9.5 11 12 11C14.5 11 17 10.5 20 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );

  const ShirtIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 4L10.5 6H13.5L16 4L19 5.5L17.5 9H6.5L5 5.5L8 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9V19H17V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  const StarIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3.5L13.9 8.1L18.9 8.5L15 11.7L16.2 16.6L12 14L7.8 16.6L9 11.7L5.1 8.5L10.1 8.1L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );

  const features = [
    {
      title: "Wide Product Range",
      subtitle: "Sports Catalog",
      icon: BallIcon,
    },
    {
      title: "Team Uniforms",
      subtitle: "For Every Club",
      icon: ShirtIcon,
    },
    {
      title: "Quality Brands",
      subtitle: "Trusted Gear",
      icon: StarIcon,
    },
  ];

  const catelogData = {
    title: "Shop Sports products Online",
    description:
      "Visit our partner website to browse the complete catalog of sports equipment, uniforms, and merchandise. Place your order directly online.",
    buttons: [{ title: "Visit Sports catalog", link: "#" }],
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
        image={"/sports_banner.webp"}
        icon={icon}
        chip_title={"SPORTS PRODUCTS"}
        title={"Sports Equipment & Merchandise"}
        description={"Premium Trophies & Awards for Champions."}
      />

      <section className="w-full bg-white py-14 px-6">
        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-[38px] font-medium mb-2 sm:mb-3 text-[#0A3D62] text-center scroll-fade-up">
          Quality Sports Products
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
            Glenroy Sports &amp; Trophies offers a range of Sports Catalog Kits
            Created in Tailbone you are able to select from a wide range of
            different uniforms, and sports related merchandise. If you have been
            there before you'll want to keep coming back.If you have been a
            business that really cares, don't have no store room supplies, or
            just want to order online, there are various catalogues, and sites
            which we can always order in any sporting merchandise, or relevant
            sports Catalogue or inquiry related.
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
          Click below to browse our full sports catalog and place your order.
        </p>

        <div>
          <CatelogCard data={catelogData} />
        </div>
      </div>

      <Banner image={"/Kit.png"} />
    </div>
  );
};
