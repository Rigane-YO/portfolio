import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const TimelineAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    
    // Sélectionne le chemin à dessiner et calcule sa longueur
    const path = svgRef.current.querySelector<SVGPathElement>(".theLine");
    if (!path) return;
    const pathLength = path.getTotalLength();
    
    // Prépare le chemin pour l'animation (simulateur drawSVG)
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    
    // Crée la timeline principale synchronisée avec le scroll
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        scrub: true,
        start: "top center",
        end: "bottom center"
      }
    });
    
    // On anime le tracé et le déplacement de la balle (ball01) en même temps.
    main
      .to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5]
          },
          ease: "none",
          duration: 1,
          autoAlpha: 1
        },
        0
      );
    
    return () => {
      main.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      id="svg-stage"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 1200"
      className="max-w-[600px] overflow-visible mt-[60vh]"
    >
      <path className="line stroke-white stroke-[2px]" d="M 10 200 600 200" />
      <path className="line stroke-white stroke-[2px]" d="M 10 400 600 400" />
      <path className="line stroke-white stroke-[2px]" d="M 10 600 600 600" />
      <path className="line stroke-white stroke-[2px]" d="M 10 800 600 800" />
      <path className="line stroke-white stroke-[2px]" d="M 10 1000 600 1000" />
      <text className="fill-white text-[15px] opacity-0" x="30" y="190">
        2018
      </text>
      <text className="fill-white text-[15px] opacity-0" x="30" y="390">
        2019
      </text>
      <text className="fill-white text-[15px] opacity-0" x="30" y="590">
        2020
      </text>
      <path
        className="theLine fill-none stroke-white stroke-[10px]"
        d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
      />
      <circle className="ball ball01 fill-white opacity-0" r="20" cx="50" cy="100" />
      <circle className="ball ball02 fill-white opacity-0" r="20" cx="278" cy="201" />
      <circle className="ball ball03 fill-white opacity-0" r="20" cx="327" cy="401" />
      <circle className="ball ball04 fill-white opacity-0" r="20" cx="203" cy="601" />
    </svg>
  );
};

export default TimelineAnimation;
