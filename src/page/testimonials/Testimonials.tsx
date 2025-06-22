import { useTheme } from '../../component/ThemeContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Reald a été un excellent collaborateur sur notre projet. Son expertise en React et sa capacité à livrer des solutions de qualité dans les délais ont été remarquables. Je recommande vivement !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "StartupXYZ",
    content: "Travailler avec Reald a été une expérience très positive. Il comprend rapidement les besoins et propose des solutions innovantes. Son code est propre et bien documenté.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "UX Designer",
    company: "DesignStudio",
    content: "Reald a une excellente compréhension de l'expérience utilisateur. Il a su transformer nos maquettes en interfaces fonctionnelles et esthétiques. Un vrai professionnel !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  // Récupérer les témoignages traduits et les combiner avec les avatars
  const translatedTestimonials = (t('testimonials.clients', { returnObjects: true }) as any[]).map((testimonial, index) => ({
    ...testimonial,
    id: index + 1,
    avatar: testimonials[index]?.avatar || ""
  }));

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {translatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Quote Icon */}
              <div className="flex justify-start mb-4">
                <Quote className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'} opacity-50`} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role} {t('testimonials.at')} {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-block p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('testimonials.cta.title')}
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              {t('testimonials.cta.description')}
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
            >
              {t('testimonials.cta.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 