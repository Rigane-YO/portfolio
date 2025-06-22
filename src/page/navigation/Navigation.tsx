import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../component/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const { isDark, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }; 

    const menuItems = ['Home', 'About', 'Projects', 'Contact'];

    // Gestion de la fermeture du menu avec Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    return (
        <nav 
            className={`fixed w-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm z-50 transition-colors duration-200`}
            role="navigation"
            aria-label="Navigation principale"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        <span role="img" aria-label="Logo RR">RR.</span>
                    </h1>

                    {/* Menu Desktop */}
                    <div
                        className="desktop-menu items-center space-x-6"
                        role="menubar"
                    >
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setActiveSection(item.toLowerCase());
                                    handleScroll(item.toLowerCase());
                                }}
                                className={`${activeSection === item.toLowerCase()
                                    ? 'text-blue-600'
                                    : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                    } transition-colors`}
                                role="menuitem"
                                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
                                aria-label={`Aller à la section ${item}`}
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:bg-opacity-80 transition-colors`}
                            aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
                            title={isDark ? 'Mode clair' : 'Mode sombre'}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Bouton Hamburger pour Mobile */}
                    <button
                        className="mobile-menu-btn text-gray-600 dark:text-gray-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menu Mobile avec animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="mobile-menu absolute left-0 top-16 w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
                            role="menu"
                            aria-label="Menu mobile"
                        >
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item}
                                    onClick={() => {
                                        setActiveSection(item.toLowerCase());
                                        handleScroll(item.toLowerCase());
                                        setIsMenuOpen(false);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={`block w-full text-left px-4 py-2 rounded-md 
                                        ${activeSection === item.toLowerCase()
                                            ? 'text-blue-600 font-semibold'
                                            : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
                                        transition-colors`}
                                    role="menuitem"
                                    aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
                                    aria-label={`Aller à la section ${item}`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={toggleTheme}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 w-full flex justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-400 hover:bg-opacity-80 transition-colors"
                                aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
                                title={isDark ? 'Mode clair' : 'Mode sombre'}
                            >
                                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navigation;
