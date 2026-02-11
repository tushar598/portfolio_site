import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Award, Clock, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Projects Completed", value: "25+", icon: <Code size={24} /> },
    { label: "Hackathons Attended", value: "6+", icon: <Award size={24} /> },
    { label: "Years Experience", value: "3+", icon: <Clock size={24} /> },
    { label: "Hackathon Wins", value: "3x", icon: <Trophy size={24} /> },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-brand-blue dark:bg-brand-darker transition-colors duration-500 text-white relative border-t border-white/10">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <div className="order-2 md:order-1">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">My Journey</h2>
            <div className="w-16 sm:w-20 h-1 bg-white/30 mb-6 sm:mb-8"></div>
            <p className="text-white/80 leading-relaxed font-sans text-base sm:text-lg mb-4 sm:mb-6">
              My journey revolves around full-stack development, data structures & algorithms, and crafting seamless user experiences. I believe in writing maintainable code while constantly exploring new technologies.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="mb-2 sm:mb-4 opacity-80">{stat.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold mb-1">{stat.value}</h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-70 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer Lifestyle"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-blue/30 mix-blend-overlay"></div>
            </div>
            <div className="absolute -inset-4 border-2 border-white/10 rounded-3xl -z-10 -rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;