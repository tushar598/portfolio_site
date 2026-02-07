import React from 'react';
import Button from './ui/Button';

const About: React.FC = () => {
  // Assuming containerRef is defined elsewhere, e.g., const containerRef = React.useRef(null);
  // For this specific instruction, we only apply the JSX change.
  const containerRef = React.useRef(null);

  return (
    <section id="about" className="py-24 bg-brand-orange dark:bg-brand-dark transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Grid overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div ref={containerRef} className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] -z-10 group-hover:bg-brand-orange/30 transition-colors duration-700"></div>

              <h2 className="text-white font-display font-bold text-4xl md:text-5xl mb-6 relative z-10">
                Passion-Driven<br />Development
              </h2>
              <div className="w-20 h-1 bg-white mb-6 relative z-10"></div>

              <p className="text-white/80 leading-relaxed mb-6 font-sans relative z-10">
                I am a passionate MERN Stack Developer focused on building scalable, high-performance web applications. I enjoy solving real-world problems using clean architecture, efficient algorithms, and modern technologies.
              </p>

              <p className="text-white/80 leading-relaxed mb-8 font-sans relative z-10">
                My journey revolves around full-stack development, data structures & algorithms, and crafting seamless user experiences. I believe in writing maintainable code while constantly exploring new technologies.
              </p>

              <div className="mb-8 relative z-10">
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-4 opacity-80">Core Values</h5>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="flex items-center gap-2 text-white/90 text-sm"><div className="w-1.5 h-1.5 bg-brand-orange dark:bg-brand-accent rounded-full"></div> Innovation First</li>
                  <li className="flex items-center gap-2 text-white/90 text-sm"><div className="w-1.5 h-1.5 bg-brand-orange dark:bg-brand-accent rounded-full"></div> User-Centric Design</li>
                  <li className="flex items-center gap-2 text-white/90 text-sm"><div className="w-1.5 h-1.5 bg-brand-orange dark:bg-brand-accent rounded-full"></div> Clean Architecture</li>
                </ul>
              </div>

              <div className="relative z-10">
                <Button variant="primary" icon onClick={() => window.open('/resume.pdf', '_blank')}>Download CV</Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-white relative">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl transform -rotate-3 blur-sm"></div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coding Setup"
              loading="lazy"
              decoding="async"
              className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 opacity-90 hover:opacity-100 relative z-10 border border-white/20 w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;