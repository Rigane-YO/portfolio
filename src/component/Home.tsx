import { useTheme } from './ThemeContext';
import Navigation from '../page/navigation/Navigation';
import HeroSection from '../page/heroSection/HeroSection';
import Footer from '../page/navigation/Footer'
import TimelineAnimation from './transition/TimeLineAnimation';
import PerformanceMonitor from './PerformanceMonitor';

// Import des composants lazy
import {
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyTestimonials,
  LazyContact
} from './LazySection';

function Home() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-60'} transition-colors duration-200`}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className='pt-25'>
        <HeroSection />
      </div>

      <div className='flex justify-center -mt-52 '>
        <TimelineAnimation />
      </div>
      
      <div id='about'>
        {/* About section avec lazy loading */}
        <LazyAbout />
      </div>

      {/* Skills section avec lazy loading */}
      <LazySkills />

      <div id='projects'>
        {/* Project section avec lazy loading */}
        <LazyProjects />
      </div>

      {/* Testimonials section avec lazy loading */}
      <LazyTestimonials />

      <div id='contact'>
        {/* Contact section avec lazy loading */}
        <LazyContact />
      </div>
      
      <Footer />

      {/* Monitor de performance (dev uniquement) */}
      <PerformanceMonitor />
    </div>
  );
}

export default Home;

