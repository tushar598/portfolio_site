import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Button from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "AI-Fashion Search Engine",
    category: "AI / Machine Learning",
    description: "A fully AI-powered fashion search engine that allows users to search for fashion items using natural language queries.",
    tags: ["React", "Node.js", "MongoDB", "Scrapper", "FastAPI", "Python", "SerpAPI", "JavaScript", "LLM"],
    image: "/AIfashion.png",
    link: "https://github.com/tushar598/Hackwave-hackathon-36hr",
    liveLink: "https://hackwave-hackathon-36hr.vercel.app/"
  },
  {
    id: 2,
    title: "Career-Connect",
    category: "AI / Productivity",
    description: "An AI-powered platform for finding job opportunities and career based on your resume.",
    tags: ["React.js", "Node.js", "MongoDB", "OpenAI", "JavaScript"],
    image: "/CareerConnect.png",
    link: "https://github.com/tushar598/jobScrapper",
    liveLink: "https://github.com/tushar598/jobScrapper"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Design / Frontend",
    description: "A visually rich, animation-driven personal portfolio showcasing creativity and technical expertise.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    liveLink: ""
  },
  {
    id: 4,
    title: "Crypto Dashboard",
    category: "Fintech",
    description: "A real-time cryptocurrency analytics dashboard with live charts and market data.",
    tags: ["Vue.js", "D3.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1621504450168-38c6814cc584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    liveLink: ""
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Mobile",
    description: "A mobile-first social media application with messaging, engagement features, and real-time updates.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    liveLink: ""
  },
  {
    id: 6,
    title: "LMS Platform",
    category: "EdTech",
    description: "A complete Learning Management System for managing courses, students, and progress tracking.",
    tags: ["React", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    liveLink: ""
  }
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className={`group relative flex flex-col h-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-6 z-10">
        <div>
          <span className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1">
            0{project.id}
          </span>
          <span className="block text-brand-orange dark:text-brand-accent text-xs font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <div className="flex gap-2">
          <a href={project.link} className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white hover:text-brand-orange transition-colors">
            <Github size={18} />
          </a>
          <a href={project.liveLink} className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white hover:text-brand-orange transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative flex-grow w-full rounded-2xl overflow-hidden mb-6 aspect-video bg-black/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Footer info */}
      <div className="z-10 mt-auto">
        <h3 className="text-white font-display font-bold text-3xl mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2 font-sans">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded border border-white/10 hover:border-brand-orange dark:hover:border-brand-accent transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>

        <Button icon variant="secondary"
          className="w-full md:w-auto"><a href={project.link}>View Code</a></Button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleGitHubProfile = () => {
    window.open('https://github.com/tushar598', '_blank');
  }

  return (
    <section id="works" className="py-24 bg-brand-blue dark:bg-brand-darker transition-colors duration-500 relative">
      {/* Background Grid - CSS Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h4 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-2">Featured Work</h4>
            <h2 className="text-white font-display font-bold text-5xl md:text-7xl uppercase">Latest<br />Deployments</h2>
          </div>
          <Button variant="outline" onClick={handleGitHubProfile} className="mt-6 md:mt-0">GitHub Profile</Button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card will-change-transform">
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Add a Stats/More card to fill grid */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center project-card relative overflow-hidden group">
            <div className="text-center z-10">
              <h3 className="text-4xl font-display font-bold text-white mb-2">More on GitHub</h3>
              <p className="text-white/60 mb-6">Explore 50+ repositories and contributions.</p>
              <Button variant="outline">Browse All</Button>
            </div>
            <Github size={200} className="absolute -bottom-10 -right-10 text-white/5 transform group-hover:rotate-12 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;