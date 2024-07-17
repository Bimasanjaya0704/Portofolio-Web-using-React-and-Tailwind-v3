import React, { useEffect, useState } from "react";
import { BiSolidToTop } from "react-icons/bi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-cpyellow text-cpdark opacity-75 hover:opacity-100 rounded-full p-3 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: visible ? "block" : "none" }}
    >
      <BiSolidToTop className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
