import { createContext } from "react";

export interface ComponentMetrics {
  name: string;
  renderTime: number;
  renderCount: number;
  timestamp: number;
}

export interface PerformanceContextType {
  metrics: ComponentMetrics[];
  addMetric: (metric: ComponentMetrics) => void;
  clearMetrics: () => void;
  slowComponents: ComponentMetrics[];
}

export const PerformanceContext = createContext<
  PerformanceContextType | undefined
>(undefined);
