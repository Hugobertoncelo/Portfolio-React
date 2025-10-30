import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShowButton(scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const doScrollTop = (smooth = true) => {
    try {
      if (smooth) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 600);
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    } catch (e) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handlePointer = (e) => {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    doScrollTop(true);
  };

  if (!showButton || !mounted) return null;

  const button = (
    <button
      onPointerDown={handlePointer}
      onMouseDown={handlePointer}
      onTouchStart={handlePointer}
      aria-label="Voltar ao topo"
      style={{
        position: "fixed",
        bottom: "12px",
        right: "16px",
        backgroundColor: "#8641B0",
        border: "none",
        borderRadius: "50%",
        width: "52px",
        height: "52px",
        fontSize: "25px",
        cursor: "pointer",
        boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
        zIndex: 2147483647,
        pointerEvents: "auto",
        transition: "transform 180ms ease, opacity 180ms ease",
        transform: "translateZ(0) translateY(0)",
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      <FaArrowUp />
    </button>
  );

  return ReactDOM.createPortal(button, document.body);
}
