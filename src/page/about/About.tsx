import { useTheme } from '../../component/ThemeContext';
import { useEffect } from 'react';
import { CheckCircle2, Rocket, MessageCircle, Code2, Cpu } from 'lucide-react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { isDark } = useTheme();
    const { t } = useTranslation();

    useEffect(() => {
        gsap.to('.box', {
            y: -100,
            scrollTrigger: {
                trigger: '.box',      // l'élément à observer
                start: 'top 80%',       // quand le haut de .box atteint 80% du viewport
                end: 'bottom 20%',      // quand le bas de .box atteint 20% du viewport
                scrub: true,            // synchronise l'animation avec le scroll
                
            }
        });
    }, []);


    return (
        <div>
            <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.title')}</h2>
                                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                                    {t('about.intro')}
                                </p>
                            </div>

                            {/* Current Experience */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Code2 className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.currentExperience')}</h3>
                                </div>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 md:p-6`}>
                                    <div className="mb-4">
                                        <h4 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{t('about.internTitle')}</h4>
                                        <div className="flex items-center mt-2">
                                            <p className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>{t('about.internCompany')}</p>
                                            <span className={`mx-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t('about.internDuration')}</p>
                                        </div>
                                    </div>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                                        {t('about.internDescription')}
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('about.achievement1')}</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('about.achievement2')}</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('about.achievement3')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What Drives Me */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Rocket className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.whatDrivesMe')}</h3>
                                </div>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 md:p-6`}>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                                        {t('about.motivation1')}
                                    </p>
                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {t('about.motivation2')}
                                    </p>
                                </div>
                            </div>

                            {/* Let's Connect */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.letsConnect')}</h3>
                                </div>
                                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {t('about.connectDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technologies */}
            <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
                <div className="container mx-auto px-4">
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.technologies')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto ">
                        {/* Frontend Technologies */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg box`}>
                            <div className="flex items-center mb-4">
                                <Code2 className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.frontend')}</h3>
                            </div>
                            <div className="space-y-3 ">
                                {['React.js', 'TypeScript', 'Ionic'].map((tech) => (
                                    <div key={tech} className={`flex items-center p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} `}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* State Management & API */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg box`}>
                            <div className="flex items-center mb-4">
                                <Cpu className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.stateApi')}</h3>
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
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-xl shadow-lg box`}>
                            <div className="flex items-center mb-4">
                                <Code2 className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.styling')}</h3>
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