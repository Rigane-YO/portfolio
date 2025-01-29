import { useTheme } from '../../component/ThemeContext';
import { ExternalLink,  Sun, Calendar, } from 'lucide-react';
const Projet = () => {
  
  const { isDark } = useTheme();
    return (
        <div>
            <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Current Project</h2>
          <div className="max-w-5xl mx-auto">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Solar panels"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">SolarSHip</h3>
                  <p className="text-gray-200">Solar Panel Monitoring System</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    A comprehensive application for monitoring battery and solar panel consumption,
                    providing detailed analytics across different time periods.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Real-time Monitoring</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Live power consumption tracking</p>
                    </div>
                    
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Historical Data</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Daily/Weekly/Monthly/Yearly reports</p>
                    </div>
                    
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-5 h-5 mr-2 text-green-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Cross-platform</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Web & iOS compatibility</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className={`font-medium mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js', 'TypeScript', 'Axios', 'React Query',
                      'Ionic', 'Swift'
                    ].map((tech) => (
                      <span key={tech} className={`px-3 py-1 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Projet;