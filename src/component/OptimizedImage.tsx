import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  sizes?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
  onLoad,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Commence à charger 50px avant d'être visible
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Vérification si l'image est locale ou externe
  const isLocalImage = !src.startsWith('http') && !src.startsWith('//');

  // Pour les images locales, on utilise seulement l'image originale
  // Pour les images externes, on peut essayer les formats optimisés
  const generateSources = (originalSrc: string) => {
    if (isLocalImage) {
      // Pour les images locales, on utilise seulement l'original
      return {
        original: originalSrc
      };
    }

    // Pour les images externes, on peut essayer les formats optimisés
    const baseName = originalSrc.split('.').slice(0, -1).join('.');
    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`,
      original: originalSrc
    };
  };

  const sources = generateSources(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  // Placeholder pendant le chargement
  const renderPlaceholder = () => {
    if (placeholder === 'empty') return null;
    
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    );
  };

  // Image d'erreur
  const renderErrorFallback = () => (
    <div 
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}
      style={{ width, height }}
    >
      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );

  if (error) {
    return renderErrorFallback();
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {renderPlaceholder()}
      
      {isInView && (
        <>
          {isLocalImage ? (
            // Pour les images locales, utilisation simple
            <img
              src={sources.original}
              alt={alt}
              width={width}
              height={height}
              className={`${className} ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
              onLoad={handleLoad}
              onError={handleError}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          ) : (
            // Pour les images externes, utilisation du picture avec formats optimisés
            <picture>
              {sources.avif && (
                <source
                  srcSet={sources.avif}
                  sizes={sizes}
                  type="image/avif"
                />
              )}

              {sources.webp && (
                <source
                  srcSet={sources.webp}
                  sizes={sizes}
                  type="image/webp"
                />
              )}

              <img
                src={sources.original}
                sizes={sizes}
                alt={alt}
                width={width}
                height={height}
                className={`${className} ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
