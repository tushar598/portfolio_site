import React from 'react';

const skillsData = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "JavaScript (ES6+)"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Prompt Engineering"]
  },
  {
    category: "Mobile & Cloud",
    items: ["React Native", "GitHub", "CI/CD", "C++"]
  },
  {
    category: "Additional",
    items: ["Git", "REST APIs", "Testing", "Java Basics"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-brand-orange dark:bg-brand-dark transition-colors duration-500 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-white font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase tracking-wider">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-sm border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;