import { useTheme } from '../../component/ThemeContext';
import { CheckCircle2, Rocket, MessageCircle, Code2, Cpu } from 'lucide-react';

const About = () => {

    const { isDark } = useTheme();
    return (
        <div>
            <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
                                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                                    👋 Hey, I'm Reald! A passionate frontend developer who loves turning ideas into sleek, interactive experiences.
                                    My go-to tool? React! I'm always exploring best practices to build modern and high-performance user interfaces.
                                </p>
                            </div>

                            {/* Current Experience */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Code2 className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Current Experience</h3>
                                </div>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 md:p-6`}>
                                    <div className="mb-4">
                                        <h4 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Frontend Developer Intern</h4>
                                        <div className="flex items-center mt-2">
                                            <p className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Zafy Tody</p>
                                            <span className={`mx-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>6 months internship</p>
                                        </div>
                                    </div>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                                        Currently working on innovative web solutions, focusing on React development and modern frontend practices.
                                        This experience has been instrumental in applying theoretical knowledge to real-world projects and working
                                        in a professional development environment.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Strengthened my skills in React and state management.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Optimized API calls for better performance.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Collaborated with backend developers, gaining insights into API-first architectures.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What Drives Me */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Rocket className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>What Drives Me</h3>
                                </div>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 md:p-6`}>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                                        I'm always on the lookout for ways to improve and level up my skills. Right now, I'm diving deeper into
                                        advanced React concepts to push my frontend development further.
                                    </p>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Inspired by epic tales and Chinese culture 🏮, I see web development as a legendary journey—one filled with
                                        learning, challenges, and creative problem-solving—just like Sun Wukong's adventures.
                                    </p>
                                </div>
                            </div>

                            {/* Let's Connect */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Work Together!</h3>
                                </div>
                                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Looking for a motivated, creative developer ready to take on new challenges? Let's connect and bring your ideas to life! 🚀
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technologies */}
            <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
                <div className="container mx-auto px-4">
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                        {/* Frontend Technologies */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg`}>
                            <div className="flex items-center mb-4">
                                <Code2 className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Frontend</h3>
                            </div>
                            <div className="space-y-3">
                                {['React.js', 'TypeScript', 'Ionic'].map((tech) => (
                                    <div key={tech} className={`flex items-center p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* State Management & API */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg`}>
                            <div className="flex items-center mb-4">
                                <Cpu className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>State & API</h3>
                            </div>
                            <div className="space-y-3">
                                {['React Query', 'Zustand', 'Axios'].map((tech) => (
                                    <div key={tech} className={`flex items-center p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Styling */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg`}>
                            <div className="flex items-center mb-4">
                                <Code2 className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Styling</h3>
                            </div>
                            <div className="space-y-3">
                                {['Tailwind CSS', 'Bootstrap 5', 'Swift'].map((tech) => (
                                    <div key={tech} className={`flex items-center p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;