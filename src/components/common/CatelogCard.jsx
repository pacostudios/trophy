import React from "react";

export const CatelogCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#0A3D62] w-full rounded-xl px-10 py-8 max-w-[670px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-center h-full pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect width="34" height="34" rx="4" fill="white" />
                <path
                  d="M24.5 8H9.5C9.10218 8 8.72064 8.15804 8.43934 8.43934C8.15804 8.72064 8 9.10218 8 9.5V24.5C8 24.8978 8.15804 25.2794 8.43934 25.5607C8.72064 25.842 9.10218 26 9.5 26H24.5C24.8978 26 25.2794 25.842 25.5607 25.5607C25.842 25.2794 26 24.8978 26 24.5V9.5C26 9.10218 25.842 8.72064 25.5607 8.43934C25.2794 8.15804 24.8978 8 24.5 8ZM24.5 24.5H9.5V9.5H24.5V24.5ZM13.4694 20.5306C13.3996 20.461 13.3443 20.3783 13.3066 20.2872C13.2688 20.1962 13.2494 20.0986 13.2494 20C13.2494 19.9014 13.2688 19.8038 13.3066 19.7128C13.3443 19.6217 13.3996 19.539 13.4694 19.4694L18.1897 14.75H15.5C15.3011 14.75 15.1103 14.671 14.9697 14.5303C14.829 14.3897 14.75 14.1989 14.75 14C14.75 13.8011 14.829 13.6103 14.9697 13.4697C15.1103 13.329 15.3011 13.25 15.5 13.25H20C20.1989 13.25 20.3897 13.329 20.5303 13.4697C20.671 13.6103 20.75 13.8011 20.75 14V18.5C20.75 18.6989 20.671 18.8897 20.5303 19.0303C20.3897 19.171 20.1989 19.25 20 19.25C19.8011 19.25 19.6103 19.171 19.4697 19.0303C19.329 18.8897 19.25 18.6989 19.25 18.5V15.8103L14.5306 20.5306C14.461 20.6004 14.3783 20.6557 14.2872 20.6934C14.1962 20.7312 14.0986 20.7506 14 20.7506C13.9014 20.7506 13.8038 20.7312 13.7128 20.6934C13.6217 20.6557 13.539 20.6004 13.4694 20.5306Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                {data?.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                {data?.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {Array.isArray(data?.buttons) &&
                  data.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="bg-[#C91526] flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 mb-2"
                    >
                      {button.title}
                      {button.icon ? (
                        button.icon
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFBEB] w-full rounded-xl px-10 py-8 max-w-[670px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-center h-full pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect width="34" height="34" rx="4" fill="#FE9A00" />
                <path
                  d="M24.5 8H9.5C9.10218 8 8.72064 8.15804 8.43934 8.43934C8.15804 8.72064 8 9.10218 8 9.5V24.5C8 24.8978 8.15804 25.2794 8.43934 25.5607C8.72064 25.842 9.10218 26 9.5 26H24.5C24.8978 26 25.2794 25.842 25.5607 25.5607C25.842 25.2794 26 24.8978 26 24.5V9.5C26 9.10218 25.842 8.72064 25.5607 8.43934C25.2794 8.15804 24.8978 8 24.5 8ZM24.5 24.5H9.5V9.5H24.5V24.5ZM13.4694 20.5306C13.3996 20.461 13.3443 20.3783 13.3066 20.2872C13.2688 20.1962 13.2494 20.0986 13.2494 20C13.2494 19.9014 13.2688 19.8038 13.3066 19.7128C13.3443 19.6217 13.3996 19.539 13.4694 19.4694L18.1897 14.75H15.5C15.3011 14.75 15.1103 14.671 14.9697 14.5303C14.829 14.3897 14.75 14.1989 14.75 14C14.75 13.8011 14.829 13.6103 14.9697 13.4697C15.1103 13.329 15.3011 13.25 15.5 13.25H20C20.1989 13.25 20.3897 13.329 20.5303 13.4697C20.671 13.6103 20.75 13.8011 20.75 14V18.5C20.75 18.6989 20.671 18.8897 20.5303 19.0303C20.3897 19.171 20.1989 19.25 20 19.25C19.8011 19.25 19.6103 19.171 19.4697 19.0303C19.329 18.8897 19.25 18.6989 19.25 18.5V15.8103L14.5306 20.5306C14.461 20.6004 14.3783 20.6557 14.2872 20.6934C14.1962 20.7312 14.0986 20.7506 14 20.7506C13.9014 20.7506 13.8038 20.7312 13.7128 20.6934C13.6217 20.6557 13.539 20.6004 13.4694 20.5306Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-[18px] font-semibold leading-snug">
                External Shopping Portal
              </h2>
              <p className="text-[14px] leading-relaxed max-w-lg mt-2">
                When you click the button above, you'll be directed to our
                partner's secure website where you can browse products, view
                detailed specifications, check availability, and complete your
                purchase. This is our official sports product supplier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
