import { useTheme } from '../../component/ThemeContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClockTransition = () => {
  const { isDark } = useTheme(); // Vérifie si le mode sombre est activé
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;

    // 🎨 Définition des couleurs en fonction du mode sombre
    const handColor = isDark ? '#00ffff' : '#ff4500'; // Cyan en sombre, Orange en clair

    const drawHand = (angle: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -radius + 20);
      ctx.strokeStyle = handColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.restore();
    };

    drawHand(0);

    const rotation = { angle: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: '+=600px', // Ajustement de la hauteur du scroll effectif
        scrub: true,
        pin: true, // Empêche le scroll pendant l'animation
      },
      onUpdate: () => {
        drawHand(rotation.angle);
      },
      onComplete: () => {
        ScrollTrigger.refresh(); // S'assure que le scroll reprend normalement
      },
    });

    tl.to(rotation, { angle: 360, duration: 3, ease: 'power2.inOut' });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '+=600px',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isDark]); // 🔄 Re-render si le mode sombre change

  return (
    <section
      ref={containerRef}
      className={`py-20 flex flex-col items-center justify-center ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <canvas ref={canvasRef} className="rounded" />
        <div ref={textRef} className="text-xl font-bold opacity-0">
          Voici la section projet trois
        </div>
      </div>
    </section>
  );
};

export default ClockTransition;
