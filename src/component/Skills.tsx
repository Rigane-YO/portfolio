import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap, Globe, Shield } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 90, category: 'Frontend', icon: <Code2 className="w-5 h-5" />, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: <Code2 className="w-5 h-5" />, color: 'bg-blue-600' },
  { name: 'JavaScript', level: 88, category: 'Frontend', icon: <Code2 className="w-5 h-5" />, color: 'bg-yellow-500' },
  { name: 'HTML/CSS', level: 92, category: 'Frontend', icon: <Code2 className="w-5 h-5" />, color: 'bg-orange-500' },
  
  // Styling
  { name: 'Tailwind CSS', level: 87, category: 'Styling', icon: <Palette className="w-5 h-5" />, color: 'bg-cyan-500' },
  { name: 'Bootstrap', level: 80, category: 'Styling', icon: <Palette className="w-5 h-5" />, color: 'bg-purple-500' },
  { name: 'CSS3', level: 85, category: 'Styling', icon: <Palette className="w-5 h-5" />, color: 'bg-blue-400' },
  
  // State Management & API
  { name: 'React Query', level: 82, category: 'State & API', icon: <Database className="w-5 h-5" />, color: 'bg-red-500' },
  { name: 'Zustand', level: 78, category: 'State & API', icon: <Database className="w-5 h-5" />, color: 'bg-green-500' },
  { name: 'Axios', level: 85, category: 'State & API', icon: <Database className="w-5 h-5" />, color: 'bg-indigo-500' },
  
  // Performance & Tools
  { name: 'Vite', level: 88, category: 'Tools', icon: <Zap className="w-5 h-5" />, color: 'bg-yellow-400' },
  { name: 'Git', level: 80, category: 'Tools', icon: <Shield className="w-5 h-5" />, color: 'bg-orange-600' },
  { name: 'Responsive Design', level: 90, category: 'Tools', icon: <Globe className="w-5 h-5" />, color: 'bg-green-600' },
];

const Skills = () => {
  const { isDark } = useTheme();

  const categories = ['Frontend', 'Styling', 'State & API', 'Tools'];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mes Compétences
        </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Un aperçu de mes compétences techniques et de mon niveau d'expertise dans chaque technologie.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'} text-center`}>
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg ${skill.color} text-white mr-3`}>
                          {skill.icon}
                        </div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {skill.name}
                        </h4>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Niveau</span>
                          <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${skill.color.replace('bg-', 'bg-gradient-to-r from-')} shadow-sm`}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Débutant</span>
                        <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Expert</span>
                  </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-block p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              En constante évolution
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl`}>
              Je continue d'apprendre et de maîtriser de nouvelles technologies pour rester à la pointe du développement web moderne.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Next.js', 'Node.js', 'GraphQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                >
                  {tech} (en cours)
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;