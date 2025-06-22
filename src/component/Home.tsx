import { useTheme } from './ThemeContext';
import Navigation from '../page/navigation/Navigation';
import HeroSection from '../page/heroSection/HeroSection';
import About from '../page/about/About';
import Project from '../page/projet/Projet'
import Contact from '../page/navigation/Contact'
import Testimonials from '../page/testimonials/Testimonials'
import Skills from './Skills'
import Footer from '../page/navigation/Footer'
import TimelineAnimation from './transition/TimeLineAnimation';

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
        {/* About section  */}
        <About />
      </div>

      {/* Skills section */}
      <Skills />

      <div id='projects'>
        {/* Project section  */}
        <Project />
      </div>
      
      {/* Testimonials section */}
      <Testimonials />
      
      <div id='contact'>
        {/* Contact section  */}
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;

