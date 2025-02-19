import { useTheme } from '../../component/ThemeContext';
import { Sun, Calendar, LineChart, CheckCircle2, Music } from 'lucide-react';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClockTransition from '../../component/transition/ClockTransition';

import ImagePlayer from '../../assets/media.png';
import ImageDash from '../../assets/Macbook-Air-localhost.png';

gsap.registerPlugin(ScrollTrigger);

const Projet = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Utilisation de gsap.context pour isoler les animations
      const ctx = gsap.context(() => {
        const animatedElements = containerRef.current!.querySelectorAll("[data-speed]");
        gsap.set(animatedElements, { y: 0 });

        const containerHeight = containerRef.current!.offsetHeight;

        animatedElements.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-speed") || "0");
          const movement = (1 - speed) * (containerHeight / 2);

          gsap.fromTo(
            el,
            { y: 0 },
            {
              y: movement,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Transition plus fluide
              },
            }
          );
        });
      }, containerRef);

      // Nettoyage des animations au démontage du composant
      return () => ctx.revert();
    }
  }, []);

  const { isDark } = useTheme();
  return (
    <div>
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'} text-center`}>
            Current Project
          </h2>

          {/* Section Projet Solar */}
          <article className="max-w-5xl mx-auto">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Installation de panneaux solaires"
                  loading="lazy"
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
                          {[
                            "Intégration complète du frontend avec React et gestion des requêtes API avec React Query.",
                            "Optimisation des performances grâce à un rendering efficace et une gestion optimisée des états.",
                            "Communication fluide avec le backend pour récupérer et afficher les données énergétiques en temps réel.",
                            "Conception d'une interface utilisateur intuitive, facilitant la navigation et l'analyse des données."
                          ].map((item, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Real-time Monitoring
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Live power consumption tracking
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Historical Data
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Daily/Weekly/Monthly/Yearly reports
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <LineChart className="w-5 h-5 mr-2 text-green-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Data Visualization
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Interactive charts and analytics
                      </p>
                    </div>
                  </div>

                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg mt-8`}>
                    <h4 className={`font-medium mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      💡 Pourquoi ce projet est important ?
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Ce projet m'a permis d'approfondir mes compétences en développement frontend avancé, en optimisation d'appels API
                      et en collaboration avec un backend structuré. Il m'a aussi donné une meilleure compréhension des enjeux liés aux
                      systèmes énergétiques intelligents.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className={`font-medium mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    🛠️ Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js', 'TypeScript', 'Axios', 'React Query',
                      'Ionic', 'Swift', 'Chart.js', 'Django Rest Framework',
                      'Railway'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Transition entre projets */}
          <div className="flex flex-col items-center justify-center h-[100vh] relative text-center">
            <div
              ref={containerRef}
              className="
                relative flex flex-wrap justify-center items-center 
                w-full top-[19vh] h-[100vh] overflow-visible 
                border-2 border-dashed border-gray-500
              "
            >
              {[
                { label: 'sec', speed: "0.25", bg: 'bg-green-500' },
                { label: 'ond', speed: "0.4", bg: 'bg-purple-500' },
                { label: 'pro', speed: "0", bg: 'bg-orange-500' },
                { label: 'je', speed: "1", bg: 'bg-red-500' },
                { label: 'cts', speed: "0.75", bg: 'bg-blue-500' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`text-2xl font-bold flex items-center justify-center h-[100px] w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] m-2 ${item.bg} text-white`}
                  data-speed={item.speed}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Section Projet Music Player */}
          <article className="max-w-5xl mx-auto pt-16">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={ImagePlayer}
                  alt="Lecteur musical MP3"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    <Music className="inline-block mr-2" /> Music Player
                  </h3>
                  <p className="text-gray-200">Lecteur music mp3</p>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="space-y-6 mb-8">
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                    <p className="leading-relaxed">
                      🎵 MyPlaylist – Un lecteur multimédia léger et performant.
                      Un lecteur de playlists inspiré de VLC, permettant de lire facilement des fichiers audio et vidéo avec une interface simple et fluide.
                    </p>

                    <div className="space-y-6 mt-8">
                      <div>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          🛠 Fonctionnalités :
                        </h4>
                        <div className="space-y-3">
                          {[
                            "Lecture de fichiers multimédias (audio & mp3).",
                            "Gestion de playlists personnalisées.",
                            "Contrôles avancés (pause, lecture, avance rapide, volume).",
                            "Interface intuitive et responsive.",
                            "Lien : <a href='https://visiodash.netlify.app/' target='_blank' rel='noopener noreferrer'>https://visiodash.netlify.app/</a>.",
                            "GitHub : <a href='https://github.com/Rigane-YO/visioDash' target='_blank' rel='noopener noreferrer'>https://github.com/Rigane-YO/visioDash</a>."
                          ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Lecture en continu
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Profitez d'une lecture fluide sans interruptions avec un support de multiples formats audio.
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Gestion des playlists
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Créez et organisez vos propres playlists pour une expérience d'écoute personnalisée.
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <LineChart className="w-5 h-5 mr-2 text-green-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Contrôle avancé du son
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ajustez l'égaliseur et gérez le volume pour une qualité audio optimale.
                      </p>
                    </div>
                  </div>

                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg mt-8`}>
                    <h4 className={`font-medium mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      💡 Pourquoi ce projet est important ?
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Ce projet m'a permis d'approfondir mes compétences en développement frontend avancé avec React et TypeScript.
                      J'ai aussi appris à gérer des fichiers multimédias, à implémenter des contrôles de lecture personnalisés et à concevoir une interface utilisateur réactive et agréable.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className={`font-medium mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    🛠️ Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js', 'TypeScript', 'react-dropzone', 'react-player',
                      'music-metadata-browser', 'idb', 'tailwindcss'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/* transition trois  */}
          <ClockTransition />

          {/* section projet visioDash */}

          <article className="max-w-5xl mx-auto pt-16">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={ImageDash}
                  alt="Lecteur musical MP3"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    <Music className="inline-block mr-2" /> VisioDash
                  </h3>
                  <p className="text-gray-200"> Dashboard SaaS Offline et Personnalisable</p>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="space-y-6 mb-8">
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                    <p className="leading-relaxed">
                      VisioDash est une application de tableau de bord interactif qui permet
                      aux entreprises de suivre en temps réel leurs indicateurs clés (ventes,
                      marketing, finances, etc.) dans un environnement 100% offline. L’utilisateur
                      peut ajouter, personnaliser et déplacer ses widgets pour visualiser
                      ses données de façon dynamique
                    </p>

                    <div className="space-y-6 mt-8">
                      <div>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          🛠 Fonctionnalités :
                        </h4>
                        <div className="space-y-3">
                          {[
                            "Dashboard personnalisable :",
                            "Ajout et suppression de widgets(graphique, KPI, etc.).",
                            "Positionnement et redimensionnement des widgets par glisser - déposer.",
                            "Mise à jour manuelle des données :",
                            "Formulaire de saisie intégré dans le widget Chart pour contrôler et modifier les valeurs affichées.",
                            "Visualisation interactive :",
                            "Intégration de Chart.js via react-chartjs-2 pour afficher des graphiques dynamiques (line, bar, pie).",
                            "Technologie Offline :",
                            "Fonctionnement complet sans connexion Internet.",
                            "Lien : <a href='http://playrea.netlify.app' target='_blank' rel='noopener noreferrer'>http://playrea.netlify.app</a>.",
                            "GitHub : <a href='https://github.com/Rigane-YO/Lecteur-Audio' target='_blank' rel='noopener noreferrer'>https://github.com/Rigane-YO/Lecteur-Audio</a>."

                          ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Lecture en continu
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Profitez d'une lecture fluide sans interruptions avec un support de multiples formats audio.
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Gestion des playlists
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Créez et organisez vos propres playlists pour une expérience d'écoute personnalisée.
                      </p>
                    </div>

                    <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                      <div className="flex items-center mb-2">
                        <LineChart className="w-5 h-5 mr-2 text-green-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          Contrôle avancé du son
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ajustez l'égaliseur et gérez le volume pour une qualité audio optimale.
                      </p>
                    </div>
                  </div> */}

                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg mt-8`}>
                    <h4 className={`font-medium mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      💡 Défis Techniques et Solutions
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Gestion du mode offline :
                      "Le principal défi était de développer une application fonctionnant intégralement en mode offline, avec une gestion locale des données, sans dépendance à une API externe."
                      Drag & Drop et Redimensionnement :
                      "L'utilisation de react-grid-layout a permis d'offrir une expérience utilisateur fluide pour le positionnement et le redimensionnement des widgets, malgré quelques défis initiaux avec les événements de clic et le drag."
                      Mise à jour dynamique des graphiques :
                      "L'intégration d'un formulaire de saisie dans les widgets graphiques a permis aux utilisateurs de modifier en temps réel leurs données et de voir instantanément les mises à jour sur les graphiques."
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className={`font-medium mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    🛠️ Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js', 'TypeScript', 'Zustand (avec persist)', 'react-grid-layout ',
                      'Chart.js et react-chartjs-2'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projet;
