import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    // Affiche seulement en développement ou avec un paramètre URL spécial
    const showMonitor = import.meta.env.DEV ||
                       new URLSearchParams(window.location.search).has('perf');
    setIsDev(showMonitor);
    
    if (!showMonitor) return;

    const collectMetrics = () => {
      if ('performance' in window) {
        // Navigation Timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart
          }));
        }

        // Core Web Vitals
        if ('PerformanceObserver' in window) {
          // First Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, fcp: lastEntry.startTime }));
          }).observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              setMetrics(prev => ({ 
                ...prev, 
                fid: entry.processingStart - entry.startTime 
              }));
            });
          }).observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }).observe({ entryTypes: ['layout-shift'] });
        }
      }
    };

    collectMetrics();
  }, []);

  const getScoreColor = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-500';

    if (value <= threshold.good) return 'text-green-500';
    if (value <= threshold.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatValue = (metric: string, value: number) => {
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    return `${Math.round(value)}ms`;
  };

  const getScoreIcon = (metric: string, value: number) => {
    const color = getScoreColor(metric, value);
    if (color.includes('green')) return '✅';
    if (color.includes('yellow')) return '⚠️';
    return '❌';
  };

  if (!isDev) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Performance Monitor"
      >
        📊
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Performance Metrics
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {Object.entries(metrics).map(([key, value]) => {
                if (value === undefined) return null;
                
                const metricNames: Record<string, string> = {
                  fcp: 'First Contentful Paint',
                  lcp: 'Largest Contentful Paint',
                  fid: 'First Input Delay',
                  cls: 'Cumulative Layout Shift',
                  ttfb: 'Time to First Byte'
                };

                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {getScoreIcon(key, value)}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {metricNames[key]}
                      </span>
                    </div>
                    <span className={`font-mono text-sm ${getScoreColor(key, value)}`}>
                      {formatValue(key, value)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span>✅ Good</span>
                  <span>⚠️ Needs Improvement</span>
                  <span>❌ Poor</span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button
                onClick={() => {
                  console.log('📊 Performance Metrics:', metrics);
                  navigator.clipboard?.writeText(JSON.stringify(metrics, null, 2));
                }}
                className="w-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Copy to Clipboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerformanceMonitor;
