'use client'

import { useEffect, useRef } from 'react';

function GlowMouse() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      ref.current!.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(0,199,255, 0.3), transparent 90%)`; // Softer glow
    };

    if (ref.current) {
      window.addEventListener('mousemove', onMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-500 ease-out"
      ref={ref}
      style={{
        backgroundBlendMode: 'multiply', // Blends with the background
        mixBlendMode: 'soft-light', // Creates a soft light effect
      }}
    />
  );
}

export { GlowMouse };