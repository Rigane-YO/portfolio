import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Optimisations de build
  build: {
    // Optimisation du code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap', 'framer-motion'],
          icons: ['lucide-react', 'react-icons']
        }
      }
    }
  },

  // Optimisations de développement
  server: {
    // Préchargement des modules
    warmup: {
      clientFiles: [
        './src/component/Home.tsx',
        './src/page/heroSection/HeroSection.tsx',
        './src/page/navigation/Navigation.tsx'
      ]
    }
  },

  // Optimisations générales
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'gsap',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['@emailjs/browser']
  },

  // Configuration des assets
  assetsInclude: ['**/*.woff2', '**/*.woff']
})