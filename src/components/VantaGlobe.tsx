import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: isMobile ? 0.5 : 1,
      scaleMobile: 1,
      color: 0x65c7f7,
      backgroundColor: 0x0,
      size: isMobile ? 0.3 : 0.5,
      points: isMobile ? 20.0 : 7.0, // Increased points for better net visibility
      maxDistance: isMobile ? 25 : 21.0, // Reduced distance to make net more visible
      spacing: isMobile ? 10.0 : 20.0, // Reduced spacing for denser net
      showDots: true, // Show dots for better visibility
      transparency: 1, // Added transparency to make net more visible
      backgroundAlpha: 0, // Make background transparent
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-full"
      style={{
        zIndex: 15,
      }}
    />
  );
};

export default VantaGlobe;
