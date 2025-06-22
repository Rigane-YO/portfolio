import { lazy, Suspense, ComponentType, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

// Composant de loading skeleton
const SectionSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="space-y-6 p-8">
      {/* Titre skeleton */}
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mx-auto"></div>
      
      {/* Contenu skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
      
      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Hook pour l'intersection observer
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '100px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Composant principal LazySection
const LazySection = ({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '100px',
  className = ''
}: LazySectionProps) => {
  const { ref, hasIntersected } = useIntersectionObserver(threshold, rootMargin);

  const defaultFallback = fallback || <SectionSkeleton className={className} />;

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Suspense fallback={defaultFallback}>
            {children}
          </Suspense>
        </motion.div>
      ) : (
        defaultFallback
      )}
    </div>
  );
};

// Factory pour créer des composants lazy
export const createLazyComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <LazySection fallback={fallback} className={props.className}>
      <LazyComponent {...props} />
    </LazySection>
  );
};

// Composants lazy pré-configurés pour les sections principales
export const LazyAbout = createLazyComponent(
  () => import('../page/about/About'),
  <SectionSkeleton className="min-h-screen" />
);

export const LazySkills = createLazyComponent(
  () => import('./Skills'),
  <SectionSkeleton className="min-h-screen" />
);

export const LazyProjects = createLazyComponent(
  () => import('../page/projet/Projet'),
  <SectionSkeleton className="min-h-screen" />
);

export const LazyTestimonials = createLazyComponent(
  () => import('../page/testimonials/Testimonials'),
  <SectionSkeleton className="min-h-96" />
);

export const LazyContact = createLazyComponent(
  () => import('../page/navigation/Contact'),
  <SectionSkeleton className="min-h-96" />
);

export default LazySection;
