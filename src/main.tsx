import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './component/ThemeContext.tsx';
import { LanguageProvider } from './component/LanguageContext.tsx';
import { initPerformanceOptimizations } from './util/preloader.ts';

import ReactGA from "react-ga4";
import './index.css';
import './i18n/config';

// Initialisation de Google Analytics
ReactGA.initialize("G-4XFRPFGQV2");

// Initialisation des optimisations de performance
initPerformanceOptimizations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);