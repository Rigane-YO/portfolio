import { useTheme } from '../../component/ThemeContext';
import { Sun, Calendar, LineChart, CheckCircle2, Music } from 'lucide-react';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClockTransition from '../../component/transition/ClockTransition';

import ImagePlayer from '../../assets/media.png';
import ImageDash from '../../assets/Macbook-Air-localhost.png';
import './Projet.css';

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
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          {/* En-tête de section amélioré */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Découvrez mes réalisations techniques, des applications web innovantes aux solutions créatives
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Section Projet Solar */}
          <article className="max-w-6xl mx-auto mb-20">
            {/* Badge de projet en vedette */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Projet Phare
              </span>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 card-shine`}>
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Installation de panneaux solaires"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badge de statut */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    En développement
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">Solar</h3>
                      <p className="text-yellow-200 font-medium">Application de Monitoring Énergétique</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm md:text-base">
                    Surveillance en temps réel des installations solaires avec analytics avancés
                  </p>
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

                  {/* Actions du projet Solar */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h5 className={`font-bold text-lg mb-2 ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
                          🚀 Statut du Projet
                        </h5>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Développement en cours - Version bêta prévue Q2 2024
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                          <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo (Bientôt)
                        </button>
                        <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                          <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code (Privé)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
                  <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Technologies Utilisées
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: 'React.js', color: 'from-blue-500 to-cyan-500' },
                      { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
                      { name: 'Axios', color: 'from-purple-500 to-purple-600' },
                      { name: 'React Query', color: 'from-red-500 to-pink-500' },
                      { name: 'Ionic', color: 'from-blue-400 to-blue-600' },
                      { name: 'Swift', color: 'from-orange-500 to-red-500' },
                      { name: 'Chart.js', color: 'from-green-500 to-emerald-500' },
                      { name: 'Django RF', color: 'from-green-600 to-green-700' },
                      { name: 'Railway', color: 'from-gray-600 to-gray-700' }
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className={`px-4 py-3 bg-gradient-to-r ${tech.color} text-white rounded-lg text-sm font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default`}
                      >
                        {tech.name}
                      </div>
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
          <article className="max-w-6xl mx-auto pt-20 mb-20">
            {/* Badge de projet populaire */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Projet Populaire
              </span>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 card-shine`}>
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src={ImagePlayer}
                  alt="Lecteur musical MP3"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badge de statut */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    Disponible
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">Music Player</h3>
                      <p className="text-purple-200 font-medium">Lecteur Multimédia Avancé</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm md:text-base">
                    Interface moderne pour la gestion et lecture de fichiers audio
                  </p>
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
                            "Interface intuitive et responsive."
                          ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions du projet */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <h5 className={`font-bold text-lg mb-2 ${isDark ? 'text-purple-300' : 'text-purple-800'} flex items-center`}>
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                              Projet Disponible
                            </h5>
                            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              Application complète et fonctionnelle
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <a
                              href="http://playrea.netlify.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Voir la Demo
                            </a>
                            <a
                              href="https://github.com/Rigane-YO/Lecteur-Audio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              Code Source
                            </a>
                          </div>
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

                <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
                  <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Technologies Utilisées
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: 'React.js', color: 'from-blue-500 to-cyan-500' },
                      { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
                      { name: 'React Dropzone', color: 'from-green-500 to-emerald-500' },
                      { name: 'React Player', color: 'from-red-500 to-pink-500' },
                      { name: 'Music Metadata', color: 'from-purple-500 to-purple-600' },
                      { name: 'IndexedDB', color: 'from-orange-500 to-red-500' },
                      { name: 'TailwindCSS', color: 'from-cyan-500 to-blue-500' }
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className={`px-4 py-3 bg-gradient-to-r ${tech.color} text-white rounded-lg text-sm font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default`}
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/* transition trois  */}
          <ClockTransition />

          {/* section projet visioDash */}
          <article className="max-w-6xl mx-auto pt-20 mb-20">
            {/* Badge de projet innovant */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Projet Innovant
              </span>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 card-shine`}>
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src={ImageDash}
                  alt="Dashboard VisioDash"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badge de statut */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    Disponible
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">VisioDash</h3>
                      <p className="text-emerald-200 font-medium">Dashboard SaaS Offline et Personnalisable</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm md:text-base">
                    Tableau de bord interactif avec widgets personnalisables et mode offline
                  </p>
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
                            "Fonctionnement complet sans connexion Internet."

                          ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions du projet VisioDash */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <h5 className={`font-bold text-lg mb-2 ${isDark ? 'text-emerald-300' : 'text-emerald-800'} flex items-center`}>
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                              Dashboard Interactif
                            </h5>
                            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              Application SaaS complète avec widgets personnalisables
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <a
                              href="https://visiodash.netlify.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Voir la Demo
                            </a>
                            <a
                              href="https://github.com/Rigane-YO/visioDash"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              Code Source
                            </a>
                          </div>
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

                <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
                  <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Technologies Utilisées
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: 'React.js', color: 'from-blue-500 to-cyan-500' },
                      { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
                      { name: 'Zustand', color: 'from-orange-500 to-red-500' },
                      { name: 'Grid Layout', color: 'from-purple-500 to-purple-600' },
                      { name: 'Chart.js', color: 'from-green-500 to-emerald-500' },
                      { name: 'TailwindCSS', color: 'from-cyan-500 to-blue-500' }
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className={`px-4 py-3 bg-gradient-to-r ${tech.color} text-white rounded-lg text-sm font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default`}
                      >
                        {tech.name}
                      </div>
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
