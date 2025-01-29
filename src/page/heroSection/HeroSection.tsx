
import { useTheme } from '../../component/ThemeContext';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const HeroSection = () => {
    const { isDark } = useTheme();
    return (
        <div>
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl">
                        <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                            RAKOTOZANANY Reald Rigane
                        </h1>
                        <h2 className={`text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                            Frontend Developer specializing in React.js & TypeScript
                        </h2>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 text-lg`}>
                            Building modern web applications with a focus on performance and user experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                                <FaGithub className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
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
            </section>
        </div>
    );
};

export default HeroSection;