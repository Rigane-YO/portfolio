import { useTheme } from '../../component/ThemeContext';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Profil from '../../assets/profil.png';
import { useLayoutEffect, useRef, useState } from 'react';
import OptimizedImage from '../../component/OptimizedImage';
import gsap from 'gsap';

const HeroSection = () => {
  const { isDark } = useTheme();
  const comp = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imageLoaded) {
        tl.current = gsap.timeline()
          .from('.profile-img', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'power2.out',
          })
          .from('.hero-text', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out',
          }, "-=0.5")
          .from('.hero-icons a', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
          }, "-=0.3");
      }
    }, comp);

    return () => ctx.revert();
  }, [imageLoaded]);

  return (
    <div ref={comp}>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl flex flex-col md:flex-row-reverse items-center gap-8">
            
            {/* Profile Image Optimisée */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-blue-500 flex-shrink-0 profile-img">
              <OptimizedImage
                src={Profil}
                alt="RAKOTOZANANY Reald Rigane - Frontend Developer"
                className="w-full h-full object-cover"
                width={192}
                height={192}
                priority={true}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>

            <div>
              <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 hero-text`}>
                RAKOTOZANANY Reald Rigane
              </h1>
              <h2 className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 hero-text`}>
                Frontend Developer specializing in React.js & TypeScript
              </h2>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 text-base md:text-lg hero-text`}>
                Building modern web applications with a focus on performance and user experience.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 hero-icons">
                <a href="https://github.com/Rigane-YO/" target="_blank" rel="noopener noreferrer"
                  className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <FaGithub className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="www.linkedin.com/in/rakotozanany-rigane-31747334a" target="_blank" rel="noopener noreferrer"
                  className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <FaLinkedin className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="mailto:rigane.rakotozanany@gmail.com"
                  className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <Mail className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
