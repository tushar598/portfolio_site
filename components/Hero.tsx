import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ThreeScene from './ThreeScene';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/TusharFinalResume.pdf";
    link.download = "Tushar_Chouhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-orange dark:bg-brand-dark transition-colors duration-500 pt-32 md:pt-20">
      <ThreeScene />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between h-full pb-20 md:pb-32">

        {/* Left Side: Typography */}
        <div ref={textRef} className="text-white max-w-3xl">
          <h3 className="hero-text-reveal text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase opacity-80 dark:text-brand-accent will-change-transform">
            Available for work • India
          </h3>
          <h1 className="hero-text-reveal font-display font-bold text-[3.5rem] sm:text-6xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] uppercase mb-6 will-change-transform">
            Creative<br />Developer<br />& Designer
          </h1>
          <div className="hero-text-reveal flex flex-col md:flex-row md:items-center gap-6 mt-8 will-change-transform">
            <p className="md:max-w-md text-sm md:text-base opacity-90 leading-relaxed font-sans border-l-2 border-white/30 pl-4">
              Craft exceptional digital experiences blending creativity with cutting-edge technology.
            </p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center animate-spin-slow">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="hero-text-reveal mt-10 will-change-transform flex gap-4">
            <Button icon onClick={() => window.open('https://github.com/tushar598', '_blank')}>View Work</Button>
            <Button variant="outline" onClick={handleDownloadCV}>Download CV</Button>
          </div>
        </div>

        {/* Right Side: Stats for Dev */}
        <div className="hidden lg:block absolute top-1/3 right-12 w-[300px] bg-white/10 dark:bg-black/40 border border-white/20 backdrop-blur-sm rounded-xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/20 pb-2">
              <span className="text-xs uppercase font-bold text-white/60">Commits (YTD)</span>
              <span className="font-mono text-brand-blue dark:text-brand-accent font-bold">1,248</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-2">
              <span className="text-xs uppercase font-bold text-white/60">Uptime</span>
              <span className="font-mono text-green-400 font-bold">99.9%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-white/60">Coffee</span>
              <span className="font-mono text-orange-300 font-bold">∞</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;