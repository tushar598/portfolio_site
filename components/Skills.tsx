import React from 'react';

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "GraphQL", "PostgreSQL", 
  "Docker", "AWS", "TailwindCSS", "Three.js", "Solidity", "Python", 
  "Redis", "Figma", "CI/CD", "System Design"
];

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-brand-darker border-y border-brand-dark/5 dark:border-white/5 overflow-hidden">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="animate-marquee inline-flex">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-8 flex items-center gap-4">
              <span className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue dark:from-white dark:to-white/50 uppercase opacity-80 hover:opacity-100 transition-opacity cursor-default">
                {skill}
              </span>
              <div className="w-3 h-3 bg-brand-dark dark:bg-brand-accent rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;