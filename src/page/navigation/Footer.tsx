import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../component/ThemeContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { isDark } = useTheme(); // Déplacé à l'intérieur du composant
  const { t } = useTranslation();

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
              <div className="space-y-3">
                <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:text-blue-500">
                  <Mail className="w-4 h-4" />
                  <span>rigane.rakotozanany@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+261 33 48 186 78</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>

            {/* Quick Links (à ajouter si nécessaire) */}

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.connect')}</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a href="mailto:contact@example.com"
                   className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center">
              {t('footer.copyright').replace('2024', new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
