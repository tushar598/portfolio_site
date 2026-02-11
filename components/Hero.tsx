import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ThreeScene from './ThreeScene';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal text animations
      gsap.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });

      // 2. Reveal image animation - Using fromTo for absolute stability
      gsap.fromTo(".hero-image-reveal", 
        { x: 60, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out", 
          delay: 0.8,
          // Ensures it stays visible even if React re-renders
          clearProps: "transform" 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/TusharFinalResume.pdf";
    link.download = "Tushar_Chouhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-orange dark:bg-brand-dark transition-colors duration-500 pt-24 xs:pt-28 sm:pt-32 md:pt-20"
    >
      {/* LAYER 0: The 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* LAYER 1: Mobile Blur */}
      <div className="absolute inset-0 z-10 backdrop-blur-md bg-white/10 dark:bg-black/20 lg:hidden pointer-events-none" />

      {/* LAYER 2: Content Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 flex flex-col lg:flex-row items-center lg:items-end justify-between h-full pb-16 sm:pb-20 md:pb-32">

        {/* --- LEFT SIDE: TEXT --- */}
        <div ref={textRef} className="text-white max-w-3xl text-center lg:text-left mb-12 lg:mb-0">
          <h3 className="hero-text-reveal text-[10px] xs:text-xs md:text-sm font-bold tracking-[0.2em] mb-3 sm:mb-4 uppercase opacity-80 dark:text-brand-accent">
            Available for work • India
          </h3>
          <h1 className="hero-text-reveal font-display font-bold text-[2.25rem] xs:text-[2.75rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.9] uppercase mb-4 sm:mb-6">
            Creative<br />Developer<br />& Designer
          </h1>
          
          <div className="hero-text-reveal flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <p className="md:max-w-md text-xs sm:text-sm md:text-base opacity-90 leading-relaxed font-sans border-l-2 border-white/30 pl-4 text-left">
              Craft exceptional digital experiences blending creativity with cutting-edge technology.
            </p>
          </div>

          <div className="hero-text-reveal mt-8 sm:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button icon onClick={() => window.open('https://github.com/tushar598', '_blank')}>
              View Work
            </Button>
            <Button variant="outline" onClick={handleDownloadCV}>
              Download CV
            </Button>
          </div>
        </div>

        {/* --- RIGHT SIDE: FIXED IMAGE CARD --- */}
        <div className="hero-image-reveal relative z-30 w-full max-w-[280px] xs:max-w-[320px] lg:max-w-none lg:w-[320px] xl:w-[380px] lg:absolute lg:top-1/4 lg:right-12 group">
          
          <div className="relative aspect-[4/5] bg-white/20 dark:bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-3 transform rotate-2 lg:rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl overflow-hidden">
            
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-gray-900">
              {/* Added opacity logic to prevent "vanishing" while loading */}
              <img 
                src="/tushar_image.jpg" 
                alt="Tushar Chouhan" 
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              
              <div className="absolute inset-0 bg-brand-orange/10 dark:bg-brand-accent/5 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-60 mb-1">Portfolio 2026</p>
              <p className="font-display text-base xs:text-lg uppercase tracking-tight">Tushar Singh Chouhan</p>
            </div>
          </div>
          
          <div className="absolute inset-0 -z-10 bg-white/5 border border-white/10 rounded-2xl transform -rotate-2 lg:-rotate-3 translate-x-3 translate-y-3 blur-sm" />
        </div>

      </div>
    </section>
  );
};

export default Hero;