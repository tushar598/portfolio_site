import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Briefcase, Calendar, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, year: '2024', title: 'Senior Full Stack Eng.', company: 'TechFlow Systems', type: 'Full-time', active: true },
  { id: 2, year: '2022', title: 'Frontend Team Lead', company: 'Creative Digital', type: 'Full-time' },
  { id: 3, year: '2021', title: 'Freelance Developer', company: 'Self-Employed', type: 'Contract' },
  { id: 4, year: '2019', title: 'Junior Web Dev', company: 'StartUp Inc.', type: 'Full-time' },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-32 bg-brand-blue dark:bg-brand-darker transition-colors duration-500 text-white relative border-t border-white/10">
      <div ref={containerRef} className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Experience & History</h2>
            <div className="flex justify-center gap-2">
                {['Employment', 'Education', 'Hackathons'].map((filter, i) => (
                    <button key={filter} className={`px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors ${i === 0 ? 'bg-white text-brand-blue dark:text-brand-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex flex-col">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`event-row group flex flex-col md:flex-row items-center justify-between py-8 border-b border-white/10 transition-colors ${event.active ? 'bg-white text-brand-blue dark:text-brand-dark -mx-6 px-6 rounded' : 'hover:bg-white/5'}`}
            >
              <div className="w-full md:w-24 text-sm font-bold opacity-60 mb-2 md:mb-0 font-mono">{event.year}</div>
              
              <div className="flex-grow flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
                 <div className="md:w-16 h-16 md:h-full flex items-center">
                    <div className={`w-12 h-12 rounded border flex items-center justify-center ${event.active ? 'border-brand-blue dark:border-brand-dark' : 'border-white/30'}`}>
                        <Code size={20} />
                    </div>
                 </div>

                 <div className="flex-grow">
                     <h3 className="font-display font-bold text-2xl md:text-3xl">{event.title}</h3>
                     <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{event.company}</span>
                 </div>

                 <div className="flex items-center gap-2 text-sm font-bold w-48 opacity-80">
                    <Briefcase size={16} />
                    {event.type}
                 </div>
              </div>

              <div className="hidden md:flex w-12 justify-end">
                 <ChevronRight className={`transition-transform group-hover:translate-x-1`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;