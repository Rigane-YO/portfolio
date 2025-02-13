import { useTheme } from './ThemeContext';
import Navigation from '../page/navigation/Navigation';
import HeroSection from '../page/heroSection/HeroSection';
import About from '../page/about/About';
import Project from '../page/projet/Projet'
import Footer from '../page/navigation/Footer'
import TimelineAnimation from './transition/TimeLineAnimation';


function Home() {

  const { isDark } = useTheme();


  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Navigation */}
      <Navigation />


      {/* Hero Section */}

      <HeroSection />

      <div className='flex items-center justify-center'>
        <TimelineAnimation />
      </div>
      <div id='about'>
        {/* About section  */}
        <About />
      </div>

      <div id='projects'>
        {/* Project section  */}
        <Project />
      </div>
      <div id='contact'>
        <Footer />
      </div>

    </div>
  );
}

export default Home;

