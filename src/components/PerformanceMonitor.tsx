import { useEffect, useState, useRef } from "react";
import { Activity, Zap, Clock } from "lucide-react";

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  componentsRendered: number;
}

interface PerformanceMonitorProps {
  show?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

// Add proper types for Performance API
interface PerformanceMemory {
  usedJSHeapSize: number;
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
}

interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  domContentLoadedEventEnd: number;
  fetchStart: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  show = import.meta.env.DEV,
  position = "top-right",
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    componentsRendered: 0,
  });
  const [isMinimized, setIsMinimized] = useState(false);

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(0);

  useEffect(() => {
    if (!show) return;

    let animationFrameId: number;

    const measurePerformance = () => {
      const currentTime = performance.now();
      frameCountRef.current++;

      // Calculate FPS every second
      if (currentTime >= lastTimeRef.current + 1000) {
        fpsRef.current = Math.round(
          (frameCountRef.current * 1000) / (currentTime - lastTimeRef.current)
        );
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;

        // Get memory usage (if available) - with proper typing
        const extendedPerformance = performance as ExtendedPerformance;
        const memoryUsage = extendedPerformance.memory
          ? Math.round(
              (extendedPerformance.memory.usedJSHeapSize / 1048576) * 100
            ) / 100
          : 0;

        // Get render time from Performance API - with proper typing
        const navTiming = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        const renderTime = navTiming
          ? Math.round(
              navTiming.domContentLoadedEventEnd - navTiming.fetchStart
            )
          : 0;

        // Count rendered components (approximate)
        const componentsRendered =
          document.querySelectorAll("[data-component]").length ||
          document.querySelectorAll("*").length;

        setMetrics({
          fps: fpsRef.current,
          memoryUsage,
          renderTime,
          componentsRendered,
        });
      }

      animationFrameId = requestAnimationFrame(measurePerformance);
    };

    animationFrameId = requestAnimationFrame(measurePerformance);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [show]);

  if (!show) return null;

  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-4 left-4";
      case "top-right":
        return "top-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      default:
        return "top-4 right-4";
    }
  };

  const getFPSColor = (fps: number) => {
    if (fps >= 55) return "text-green-400";
    if (fps >= 30) return "text-yellow-400";
    return "text-red-400";
  };

  const getMemoryColor = (memory: number) => {
    if (memory < 50) return "text-green-400";
    if (memory < 100) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-[9999] font-mono text-xs`}>
      <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div
          className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 px-3 py-2 flex items-center justify-between cursor-pointer"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              Performance Monitor
            </span>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            {isMinimized ? "▼" : "▲"}
          </button>
        </div>

        {/* Metrics */}
        {!isMinimized && (
          <div className="p-3 space-y-2">
            {/* FPS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={12} className={getFPSColor(metrics.fps)} />
                <span className="text-gray-300">FPS:</span>
              </div>
              <span className={`font-bold ${getFPSColor(metrics.fps)}`}>
                {metrics.fps}
              </span>
            </div>

            {/* Memory Usage */}
            {metrics.memoryUsage > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity
                    size={12}
                    className={getMemoryColor(metrics.memoryUsage)}
                  />
                  <span className="text-gray-300">Memory:</span>
                </div>
                <span
                  className={`font-bold ${getMemoryColor(metrics.memoryUsage)}`}
                >
                  {metrics.memoryUsage} MB
                </span>
              </div>
            )}

            {/* Render Time */}
            {metrics.renderTime > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-blue-400" />
                  <span className="text-gray-300">Load:</span>
                </div>
                <span className="font-bold text-blue-400">
                  {metrics.renderTime}ms
                </span>
              </div>
            )}

            {/* Components Count */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Elements:</span>
              <span className="font-bold text-purple-400">
                {metrics.componentsRendered}
              </span>
            </div>

            {/* Performance Status */}
            <div className="pt-2 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Status:</span>
                <span
                  className={`font-bold ${
                    metrics.fps >= 55
                      ? "text-green-400"
                      : metrics.fps >= 30
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {metrics.fps >= 55
                    ? "Excellent"
                    : metrics.fps >= 30
                    ? "Good"
                    : "Poor"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
