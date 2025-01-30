import { useTheme } from '../../component/ThemeContext';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Profil from '../../assets/profil.png';

const HeroSection = () => {
    const { isDark } = useTheme();
    return (
        <div>
           <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-blue-500 flex-shrink-0">
              <img 
                src={Profil}  
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                RAKOTOZANANY Reald Rigane
              </h1>
              <h2 className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                Frontend Developer specializing in React.js & TypeScript
              </h2>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 text-base md:text-lg`}>
                Building modern web applications with a focus on performance and user experience.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Rigane-YO/" target="_blank" rel="noopener noreferrer" 
                   className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <FaGithub className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="www.linkedin.com/in/rakotozanany-rigane-31747334a" target="_blank" rel="noopener noreferrer"
                   className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <FaLinkedin className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </a>
                <a href="mailto:contact@example.com"
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
