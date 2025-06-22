// Utilitaires pour l'optimisation des performances

/**
 * Précharge les ressources critiques
 */
export const preloadCriticalResources = () => {
  // Précharge les polices
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ];

  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });

  // Précharge les images critiques
  const criticalImages = [
    '/src/assets/profil.png', // Image de profil
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Précharge les modules de façon intelligente
 */
export const preloadModules = () => {
  // Précharge les composants qui seront probablement utilisés
  const modulePreloads = [
    () => import('../page/about/About'),
    () => import('../component/Skills'),
    () => import('../page/projet/Projet'),
  ];

  // Précharge après un délai pour ne pas impacter le chargement initial
  setTimeout(() => {
    modulePreloads.forEach(moduleImport => {
      moduleImport().catch(() => {
        // Ignore les erreurs de préchargement
      });
    });
  }, 2000);
};

/**
 * Optimise les images en créant des versions WebP/AVIF
 */
export const optimizeImage = (src: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
} = {}) => {
  const { width, height, quality = 80, format = 'auto' } = options;
  
  // Si c'est une URL externe, on la retourne telle quelle
  if (src.startsWith('http')) {
    return src;
  }

  // Construction de l'URL optimisée
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  if (format !== 'auto') params.set('f', format);

  return `${src}?${params.toString()}`;
};

/**
 * Détecte le support des formats d'image modernes
 */
export const detectImageSupport = (): Promise<{
  webp: boolean;
  avif: boolean;
}> => {
  return new Promise((resolve) => {
    const webpTest = new Image();
    const avifTest = new Image();
    let webpSupport = false;
    let avifSupport = false;
    let testsCompleted = 0;

    const checkComplete = () => {
      testsCompleted++;
      if (testsCompleted === 2) {
        resolve({ webp: webpSupport, avif: avifSupport });
      }
    };

    // Test WebP
    webpTest.onload = () => {
      webpSupport = true;
      checkComplete();
    };
    webpTest.onerror = () => {
      checkComplete();
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Test AVIF
    avifTest.onload = () => {
      avifSupport = true;
      checkComplete();
    };
    avifTest.onerror = () => {
      checkComplete();
    };
    avifTest.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

/**
 * Optimise les performances de rendu
 */
export const optimizeRendering = () => {
  // Force le GPU pour les animations
  const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
  animatedElements.forEach(el => {
    (el as HTMLElement).style.transform = 'translateZ(0)';
    (el as HTMLElement).style.willChange = 'transform';
  });

  // Optimise le scroll
  let ticking = false;
  const optimizedScrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Logique de scroll optimisée
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
};

/**
 * Mesure les performances
 */
export const measurePerformance = () => {
  if ('performance' in window) {
    // Mesure du temps de chargement
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics = {
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcp: perfData.connectEnd - perfData.connectStart,
        request: perfData.responseStart - perfData.requestStart,
        response: perfData.responseEnd - perfData.responseStart,
        dom: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        load: perfData.loadEventEnd - perfData.loadEventStart,
        total: perfData.loadEventEnd - perfData.fetchStart
      };

      console.log('📊 Performance Metrics:', metrics);
      
      // Envoie les métriques à un service d'analytics si nécessaire
      if (import.meta.env.PROD) {
        // Analytics code here
      }
    });

    // Mesure des Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('🎯 LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log('⚡ FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('📐 CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
};

/**
 * Initialise toutes les optimisations
 */
export const initPerformanceOptimizations = () => {
  // Précharge les ressources critiques immédiatement
  preloadCriticalResources();
  
  // Optimise le rendu
  optimizeRendering();
  
  // Mesure les performances
  measurePerformance();
  
  // Précharge les modules après le chargement initial
  preloadModules();
  
  // Détecte le support des formats d'image
  detectImageSupport().then(support => {
    console.log('🖼️ Image format support:', support);
    // Stocke le support dans le localStorage pour les prochaines visites
    localStorage.setItem('imageSupport', JSON.stringify(support));
  });
};
