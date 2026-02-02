import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, Dribbble, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-blue dark:bg-brand-darker transition-colors duration-500 text-white py-24 border-t border-white/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10">
            <div>
                <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">Let's build<br/>something great.</h2>
                <p className="text-white/60 max-w-md">Open for freelance projects and consulting. Available for full-stack web applications, blockchain integration, and system architecture.</p>
            </div>

            <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                {[
                    { icon: <Github size={24} />, color: "bg-gray-800", link: "https://github.com" },
                    { icon: <Linkedin size={24} />, color: "bg-blue-700", link: "https://linkedin.com" },
                    { icon: <Twitter size={24} />, color: "bg-blue-400", link: "https://twitter.com" },
                    { icon: <Mail size={24} />, color: "bg-red-500", link: "mailto:hello@example.com" }
                ].map((social, idx) => (
                    <a 
                        key={idx} 
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center border border-white/20 hover:border-white transition-all hover:-translate-y-2 group bg-white/5 overflow-hidden relative`}
                    >
                         <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                         <div className="relative z-10 group-hover:scale-110 transition-transform">
                             {social.icon}
                         </div>
                    </a>
                ))}
            </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="bg-white dark:bg-brand-accent text-brand-blue dark:text-brand-dark font-display font-bold text-2xl px-2 py-1 rounded-sm">OK</div>
                <div className="flex flex-col leading-none text-white font-display uppercase text-[0.65rem] tracking-widest font-bold opacity-80">
                    <span>Oskar</span>
                    <span>Kadera</span>
                </div>
            </div>

            <div className="flex gap-8 text-xs font-bold uppercase tracking-wider opacity-60">
                <a href="#works" className="hover:text-white hover:opacity-100 transition-opacity">Projects</a>
                <a href="#about" className="hover:text-white hover:opacity-100 transition-opacity">About</a>
                <a href="#experience" className="hover:text-white hover:opacity-100 transition-opacity">Experience</a>
                <a href="#contact" className="hover:text-white hover:opacity-100 transition-opacity">Contact</a>
            </div>

            <div className="text-[10px] uppercase font-bold opacity-40 mt-4 md:mt-0 text-right">
                2024 | Copyright<br/>All Rights Reserved
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;