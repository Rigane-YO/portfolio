import { useTheme } from '../../component/ThemeContext';
import { Sun, Calendar, LineChart, CheckCircle2, } from 'lucide-react';
const Projet = () => {

  const { isDark } = useTheme();
  return (
    <div>
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'} text-center `}>Current Project</h2>
          <div className="max-w-5xl mx-auto">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Solar panels"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">☀️ Solar</h3>
                  <p className="text-gray-200">Monitoring et Gestion de Données Énergétiques</p>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="space-y-6 mb-8">
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                    <p className="leading-relaxed">
                      Solar est une application web développée avec React pour visualiser et gérer les données de production
                      et de consommation d'énergie solaire. Connectée à un backend en Django Rest Framework, elle offre une
                      interface fluide et intuitive permettant aux utilisateurs de surveiller en temps réel leurs installations solaires.
                    </p>

                    <div className="space-y-6 mt-8">
                      <div>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Ce que j'ai réalisé :
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <p>Intégration complète du frontend avec React et gestion des requêtes API avec React Query.</p>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <p>Optimisation des performances grâce à un rendering efficace et une gestion optimisée des états.</p>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <p>Communication fluide avec le backend pour récupérer et afficher les données énergétiques en temps réel.</p>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <p>Conception d'une interface utilisateur intuitive, facilitant la navigation et l'analyse des données.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
                        <LineChart className="w-5 h-5 mr-2 text-green-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Data Visualization</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Interactive charts and analytics</p>
                    </div>
                  </div>

                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg mt-8`}>
                    <h4 className={`font-medium mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>💡 Pourquoi ce projet est important ?</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Ce projet m'a permis d'approfondir mes compétences en développement frontend avancé, en optimisation d'appels API
                      et en collaboration avec un backend structuré. Il m'a aussi donné une meilleure compréhension des enjeux liés aux
                      systèmes énergétiques intelligents.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className={`font-medium mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>🛠️ Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js', 'TypeScript', 'Axios', 'React Query',
                      'Ionic', 'Swift', 'Chart.js', 'Django Rest Framework',
                      'Railway'
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