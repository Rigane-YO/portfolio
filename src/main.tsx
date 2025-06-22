import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './component/ThemeContext.tsx';
import { initPerformanceOptimizations } from './util/preloader.ts';

import ReactGA from "react-ga4";
import './index.css';

// Initialisation de Google Analytics
ReactGA.initialize("G-4XFRPFGQV2");

// Initialisation des optimisations de performance
initPerformanceOptimizations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      
    </ThemeProvider>
  </StrictMode>
);