import React, { useEffect, useRef } from "react";
import { useTheme } from '../../component/ThemeContext';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const TimelineAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!svgRef.current) return;

    const path = svgRef.current.querySelector<SVGPathElement>(".theLine");
    if (!path) return;
    const pathLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 1.8, // Légèrement réduit pour éviter un effet trop exagéré sur mobile
        transformOrigin: "center",
        ease: "elastic(2.5, 1)",
      },
    })
      .to(".ball02, .text01 , .ligne-1", {}, 0.2)
      .to(".ball03, .text02 , .ligne-2", {}, 0.33)
      .to(".ball04, .text03 , .ligne-3", {}, 0.46)
      .to(".ball05, .text04 , .ligne-4", {}, 0.59)
      .to(".ball06, .text05 , .ligne-5", {}, 0.72)
      .to(".ball07, .text06 , .ligne-6", {}, 0.85);

    const main = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    })
      .to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
          ease: "none",
          duration: 1,
          autoAlpha: 1,
        },
        0
      )
      .add(pulses, 0);

    return () => {
      main.kill();
      pulses.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      id="svg-stage"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 1200"
      preserveAspectRatio="xMinYMin meet"
      className="w-full h-auto max-w-[600px] overflow-visible mt-[30vh] sm:mt-[60vh]"
    >
      {/* Lignes horizontales */}
      {[200, 400, 600, 800, 1000, 1200].map((y, i) => (
        <path key={i} className={`line stroke-[2px] ligne-${i + 1} ${isDark ? 'stroke-gray-300' : 'stroke-gray-900'}`} d={`M 10 ${y} 600 ${y}`} />
      ))}

      {/* Textes de repère */}
      {["Apprendre", "Conception", "Développement", "Test", "Application", "Réalisation"].map((text, i) => (
        <text
          key={i}
          className={`text${i + 1} text-[14px] sm:text-[16px] font-semibold opacity-0 ${isDark ? "fill-white" : "fill-gray-900"}`}
          x="30"
          y={190 + i * 200}
        >
          {text}
        </text>
      ))}

      {/* Chemin principal */}
      <path
        className={`theLine fill-none stroke-[6px] sm:stroke-[10px] ${isDark ? 'stroke-white' : 'stroke-gray-900'}`}
        d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
      />

      {/* Cercles animés */}
      {[50, 278, 327, 203, 140, 290, 120].map((cx, i) => (
        <circle
          key={i}
          className={`ball ball0${i + 1} opacity-0 ${isDark ? 'fill-white' : 'fill-gray-900'}`}
          r="12" // Taille réduite pour mobile
          cx={cx}
          cy={100 + i * 200}
        />
      ))}
    </svg>
  );
};

export default TimelineAnimation;
