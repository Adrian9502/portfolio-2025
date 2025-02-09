import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Update vanta effect dimensions
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };
    window.addEventListener("resize", handleResize);

    // Initialize Vanta effect
    if (!vantaEffect) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 0.5,
        color: 0x65c7f7,
        backgroundColor: 0x0,
        points: isMobile ? 10 : 2,
        maxDistance: isMobile ? 15.0 : 5.0,
        spacing: isMobile ? 15.0 : 20.0,
        showDots: true,
        backgroundAlpha: 0,
      });
      setVantaEffect(effect);
    }

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect, isMobile]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full"
      style={{
        zIndex: 0,
        minHeight: "100vh",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default VantaBackground;
