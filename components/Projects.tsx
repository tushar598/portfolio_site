import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';
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
    title: "HD Wallet",
    category: "Web3 / Blockchain",
    description: "A simplified version of how blockchain allow user to create multiple accounts using the same seed phrase which they have generated once. Ease the user to maintain/recover their all accounts by just remembering their seed phrase.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "JavaScript", "sha256", "BIP39"],
    image: "/HDwallet.png",
    link: "https://github.com/tushar598/HDWallet",
    liveLink: "https://hd-wallet-ipxi.vercel.app/"
  },
  {
    id: 4,
    title: "AKSoft Techno",
    category: "Full Stack",
    description: "Aksoft Techno is a web application that is for coding institute to manage their students and courses.",
    tags: ["React.js", "Node.js", "MongoDB", "JavaScript"],
    image: "/AkSoft.png",
    link: "https://github.com/tushar598/Aksoft",
    liveLink: "https://aksoft-woad.vercel.app/"
  },
  {
    id: 5,
    title: "Analytics Platform",
    category: "Backend",
    description: "A high-performance backend system for capturing website analytics events with a fast ingestion API, asynchronous processing via Redis (local), and a reporting API that reads from MongoDB Atlas.",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    image: "/Analytics.png",
    link: "https://github.com/tushar598/analytic_backend",
    liveLink: "https://github.com/tushar598/analytic_backend"
  },
  {
    id: 6,
    title: "Gemini Basic Clone",
    category: "AI/Full Stack",
    description: "A basic clone of Gemini AI.",
    tags: ["React", "Node.js", "JavaScript", "gemini-1.5-flash", "API", "Tailwind CSS"],
    image: "/Gemini.png",
    link: "https://github.com/tushar598/GeminiApp",
    liveLink: "https://gemini-app-sand.vercel.app/"
  }
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tagLimit = 3;
  const hasMoreTags = project.tags.length > tagLimit;
  const displayedTags = isExpanded ? project.tags : project.tags.slice(0, tagLimit);

  return (
    <div className="group relative flex flex-col h-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
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
          <a href={project.link} className="w-10 h-10 border border-white/30 rounded flex text-white items-center justify-center hover:bg-white hover:text-brand-orange transition-colors">
            <Github size={18} />
          </a>
          <a href={project.liveLink} className="w-10 h-10 border border-white/30 rounded flex text-white items-center justify-center hover:bg-white hover:text-brand-orange transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full flex-shrink-0  rounded-2xl overflow-hidden mb-6 bg-black/20 aspect-[4/3] sm:aspect-[16/9]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Main Content Area - flex-grow ensures this takes up space and pushes button down */}
      <div className="z-10 flex-grow">
        <h3 className="text-white font-display font-bold text-xl sm:text-2xl md:text-3xl mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2 font-sans">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {displayedTags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded border border-white/10 hover:border-brand-orange transition-colors cursor-default">
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase rounded border border-brand-orange/30 hover:bg-brand-orange hover:text-white transition-all"
            >
              {isExpanded ? "Show Less" : `+${project.tags.length - tagLimit} More`}
            </button>
          )}
        </div>
      </div>

      {/* Bottom Left Button Container */}
      <div className="mt-auto pt-2 text-left">
        <a href={project.link} className="inline-block w-full md:w-auto">
          <Button icon variant="secondary" className="w-full md:w-auto">
            View Code
          </Button>
        </a>
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
    <section id="works" className="py-16 sm:py-20 md:py-24 bg-brand-blue dark:bg-brand-darker transition-colors duration-500 relative">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-10 sm:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h4 className="text-white/60 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">Featured Work</h4>
            <h2 className="text-white font-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-7xl uppercase">Latest<br />Deployments</h2>
          </div>
          <Button variant="outline" onClick={handleGitHubProfile} className="mt-4 md:mt-0">GitHub Profile</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card will-change-transform">
              <ProjectCard project={project} />
            </div>
          ))}

          <div className="sm:col-span-2 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center project-card relative overflow-hidden group">
            <div className="text-center z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">More on GitHub</h3>
              <p className="text-white/60 mb-6">Explore 50+ repositories and contributions.</p>
              <Button onClick={handleGitHubProfile} variant="outline">Browse All</Button>
            </div>
            <Github size={200} className="absolute -bottom-10 -right-10 text-white/5 transform group-hover:rotate-12 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;