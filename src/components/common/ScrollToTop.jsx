import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const targets = [
        window,
        document.documentElement,
        document.body,
        document.getElementById("root"),
        document.querySelector("main"),
        document.querySelector(".content"),
      ];

      targets.forEach((target) => {
        if (target && target.scrollTo) {
          target.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
        }
      });
    };

    // Attempt immediately
    handleScroll();

    // Multiple attempts to handle potential rendering delays or dynamic content
    const timers = [
      setTimeout(handleScroll, 0),
      setTimeout(handleScroll, 50),
      setTimeout(handleScroll, 100),
    ];
    
    return () => timers.forEach(t => clearTimeout(t));
  }, [pathname]);

  return null;
};

export default ScrollToTop;
