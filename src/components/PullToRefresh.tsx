
import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  threshold?: number;
}

const PullToRefresh = ({ 
  onRefresh, 
  children, 
  threshold = 100 
}: PullToRefreshProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [canRefresh, setCanRefresh] = useState(false);
  const y = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const refreshIconRotation = useTransform(y, [0, threshold], [0, 180]);
  const refreshIconOpacity = useTransform(y, [0, threshold / 2, threshold], [0, 0.5, 1]);

  const handleDragEnd = useCallback(async () => {
    if (y.get() >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      setCanRefresh(false);
      
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        y.set(0);
      }
    } else {
      y.set(0);
      setCanRefresh(false);
    }
  }, [y, threshold, isRefreshing, onRefresh]);

  const handleDrag = useCallback(() => {
    const currentY = y.get();
    setCanRefresh(currentY >= threshold);
  }, [y, threshold]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Pull indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 z-10"
        style={{
          height: y,
          opacity: refreshIconOpacity
        }}
      >
        <motion.div
          style={{ rotate: refreshIconRotation }}
          className="flex items-center gap-2 text-blue-600"
        >
          <RefreshCw 
            className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} 
          />
          <span className="text-sm font-medium">
            {isRefreshing ? 'Refreshing...' : canRefresh ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.3, bottom: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh;
