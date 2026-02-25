import React from "react";
import { TopBanner } from "../../components/common/TopBanner";
import { CatelogCard } from "../../components/common/CatelogCard";
import { Banner } from "../../components/common/Banner";

export const UniformIndex = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23.2117 5.73938L18.3592 3.09375C18.2493 3.03292 18.1258 3.00068 18.0002 3H15.0002C14.8013 3 14.6105 3.07902 14.4699 3.21967C14.3292 3.36032 14.2502 3.55109 14.2502 3.75C14.2502 4.34674 14.0131 4.91903 13.5912 5.34099C13.1692 5.76295 12.5969 6 12.0002 6C11.4034 6 10.8311 5.76295 10.4092 5.34099C9.98724 4.91903 9.75018 4.34674 9.75018 3.75C9.75018 3.55109 9.67116 3.36032 9.53051 3.21967C9.38986 3.07902 9.19909 3 9.00018 3H6.00018C5.87421 3.00052 5.7504 3.03276 5.64018 3.09375L0.78862 5.73938C0.442777 5.92214 0.183525 6.2346 0.0677107 6.60823C-0.0481038 6.98186 -0.0110284 7.38617 0.170807 7.7325L1.97737 11.1834C2.10873 11.4315 2.30562 11.6389 2.54663 11.7828C2.78764 11.9268 3.06352 12.0019 3.34424 12H5.25018V19.5C5.25018 19.8978 5.40822 20.2794 5.68952 20.5607C5.97083 20.842 6.35236 21 6.75018 21H17.2502C17.648 21 18.0295 20.842 18.3108 20.5607C18.5921 20.2794 18.7502 19.8978 18.7502 19.5V12H20.6571C20.9378 12.0019 21.2137 11.9268 21.4547 11.7828C21.6957 11.6389 21.8926 11.4315 22.0239 11.1834L23.8305 7.7325C24.0123 7.38605 24.0492 6.98165 23.9332 6.60801C23.8172 6.23437 23.5577 5.92198 23.2117 5.73938ZM3.34424 10.5C3.33039 10.5007 3.31676 10.4963 3.30581 10.4878L1.50862 7.05562L5.25018 5.01375V10.5H3.34424ZM17.2502 19.5H6.75018V4.5H8.32518C8.49822 5.34671 8.95839 6.10767 9.62787 6.65417C10.2973 7.20066 11.135 7.49916 11.9992 7.49916C12.8635 7.49916 13.7011 7.20066 14.3706 6.65417C15.0401 6.10767 15.5003 5.34671 15.6733 4.5H17.2502V19.5ZM20.6955 10.4869C20.6903 10.4916 20.6842 10.4951 20.6776 10.4974C20.671 10.4996 20.664 10.5005 20.6571 10.5H18.7502V5.01375L22.4927 7.05562L20.6955 10.4869Z"
        fill="white"
      />
    </svg>
  );

  const products = [
    {
      id: 1,
      alt: "Uniform1",
      src: "/uniform1.png",
    },
    {
      id: 2,
      alt: "Uniform2",
      src: "/uniform2.png",
    },
    {
      id: 3,
      alt: "Uniform3",
      src: "/uniform3.png",
    },
    {
      id: 4,
      alt: "Uniform4",
      src: "/uniform4.png",
    },
    {
      id: 5,
      alt: "Uniform5",
      src: "/uniform5.png",
    },
    {
      id: 6,
      alt: "Uniform6",
      src: "/uniform6.png",
    },
  ];

  const features = [
    { label: "Custom Designs" },
    { label: "Quality Materials" },
    { label: "Fast Turnaround" },
  ];

  const catelogData = {
    title: "Browse Clothing & Uniform Catalogs",
    description:
      "Click below to visit our partner websites and explore their full range of uniforms and apparel.",
    buttons: [
      { title: "aussiepacific.com", link: "#" },
      { title: "winnigspirit.in", link: "#" },
      { title: "benchmarkuniforms.com", link: "#" },
    ],
  };
  return (
    <div>
      <TopBanner
        image={"/Uniform_Topbanner.png"}
        icon={icon}
        chip_title={"CLOTHING & UNIFORMS"}
        title={"CLOTHING & UNIFORMS"}
        description={
          "Custom team uniforms and corporate apparel for every need"
        }
      />

      <section className="w-full bg-white py-14 px-6">
        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-[38px] font-medium mb-2 sm:mb-3 text-[#0A3D62] text-center">
          Custom Uniforms & Apparel
        </p>

        {/* Product Cards Row */}
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-center rounded-lg"
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
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm leading-relaxed">
            Glenroy Sports & Trophies offers a comprehensive range of custom
            uniforms and clothing solutions for sports teams, schools, and
            businesses. From sports jerseys to corporate apparel, we have you
            covered. We partner with leading uniform suppliers to provide you
            with the best quality products and customization options. Browse our
            partner catalogs below to find the perfect uniforms for your team or
            organization.
          </p>
        </div>

        {/* Feature Tags */}
        <div
          className="
            flex flex-wrap justify-center gap-16
            sm:grid sm:grid-cols-1 sm:gap-8 sm:justify-items-center
            md:flex md:flex-wrap md:justify-center md:gap-16
          "
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="
                flex items-center gap-2
                w-full justify-center
                sm:w-auto sm:justify-start
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect width="34" height="34" rx="17" fill="#0A3D62" />
                <rect
                  x="8"
                  y="8"
                  width="18"
                  height="18"
                  rx="9"
                  fill="#C91526"
                />
              </svg>
              <span className="font-medium text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#F5F5F5] flex flex-col justify-center items-center gap-4 py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
        <p className="text-2xl sm:text-3xl md:text-[38px] font-medium text-[#0A3D62] text-center">
          Ready to Order?
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] opacity-90 drop-shadow-md font-medium text-center">
          Click below to browse our full clothing catalog and place your order.
        </p>

        <CatelogCard data={catelogData} />
      </div>

      <Banner image={"/Uniform_b_banner.png"} />
    </div>
  );
};
