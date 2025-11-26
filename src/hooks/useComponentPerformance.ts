import { useEffect, useRef } from "react";

// interface PerformanceData {
//   componentName: string;
//   renderTime: number;
//   renderCount: number;
// }

export const useComponentPerformance = (componentName: string) => {
  const renderCountRef = useRef(0);
  const startTimeRef = useRef(0);
  const isDevMode = import.meta.env.DEV;

  useEffect(() => {
    if (!isDevMode) return;

    renderCountRef.current++;
    const renderTime = performance.now() - startTimeRef.current;

    // Log performance data
    if (renderTime > 16) {
      // More than 16ms (60fps threshold)
      console.warn(
        `⚠️ ${componentName} rendered slowly:`,
        `${renderTime.toFixed(2)}ms (Render #${renderCountRef.current})`
      );
    } else {
      console.log(
        `✓ ${componentName}:`,
        `${renderTime.toFixed(2)}ms (Render #${renderCountRef.current})`
      );
    }
  });

  // Mark render start
  useEffect(() => {
    startTimeRef.current = performance.now();
  });

  return {
    renderCount: renderCountRef.current,
  };
};
