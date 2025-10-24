import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#8641B0",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </button>
  );
}
