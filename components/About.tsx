import React from 'react';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-orange dark:bg-brand-dark transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Grid overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white dark:bg-brand-accent rounded flex items-center justify-center text-brand-orange dark:text-brand-dark font-bold text-2xl font-display">OK</div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Oskar Kadera</h4>
                    <span className="text-white/60 text-xs font-bold uppercase">London, UK</span>
                </div>
             </div>
             
             <h2 className="text-white font-display font-bold text-4xl md:text-5xl mb-6">
                Engineering<br/>Perfection
             </h2>
             <div className="w-20 h-1 bg-white mb-6"></div>
             
             <p className="text-white/80 leading-relaxed mb-8 font-sans">
                With over 7 years of experience in full-stack development, I bridge the gap between complex backend logic and immersive frontend experiences. My code is clean, scalable, and built for performance.
             </p>
             
             <Button variant="primary" icon>Download CV</Button>
          </div>

          <div className="text-white relative">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl transform -rotate-3 blur-sm"></div>
            <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coding Setup" 
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 opacity-90 hover:opacity-100 relative z-10 border border-white/20" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;