import React, { useState, useCallback } from "react";
import { PerformanceContext, ComponentMetrics } from "./performanceContext";

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [metrics, setMetrics] = useState<ComponentMetrics[]>([]);

  const addMetric = useCallback((metric: ComponentMetrics) => {
    setMetrics((prev) => [...prev.slice(-50), metric]);
  }, []);

  const clearMetrics = useCallback(() => {
    setMetrics([]);
  }, []);

  const slowComponents = metrics.filter((m) => m.renderTime > 16);

  return (
    <PerformanceContext.Provider
      value={{ metrics, addMetric, clearMetrics, slowComponents }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};
