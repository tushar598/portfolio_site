import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, Dribbble, Github , CodeXml} from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-brand-blue dark:bg-brand-darker transition-colors duration-500 text-white py-16 sm:py-20 md:py-24 border-t border-white/10 relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 border border-white/10">
                    <div className="text-center md:text-left">
                        <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">Let's build<br />something impactful.</h2>
                        <p className="text-white/60 max-w-md mb-4 sm:mb-6 text-sm sm:text-base mx-auto md:mx-0">Open for collaboration. Available for full-stack web applications, blockchain integration, and system architecture.</p>
                        <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm font-bold opacity-80">
                            <span>Dewas, MP, India</span>
                            <a href="mailto:tushar19chouhan@gmail.com" className="hover:text-brand-orange transition-colors">tushar19chouhan@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
                        {[
                            { icon: <Github size={20} className="sm:w-6 sm:h-6" />, color: "bg-gray-800", link: "https://github.com/tushar598" },
                            { icon: <Linkedin size={20} className="sm:w-6 sm:h-6" />, color: "bg-[#2566C2]", link: "https://www.linkedin.com/in/tushar-singh-chouhan19" },
                            { icon: <Twitter size={20} className="sm:w-6 sm:h-6" />, color: "bg-blue-400", link: "https://x.com/tushar1962005" },
                            { icon: <CodeXml size={20} className="sm:w-6 sm:h-6" />, color: "bg-red-500", link: "https://leetcode.com/u/tushar19chouhan/" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Social link ${idx + 1}`}
                                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 hover:border-white transition-all hover:-translate-y-2 group bg-white/5 overflow-hidden relative will-change-transform`}
                            >
                                <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative z-10 group-hover:scale-110 transition-transform">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 sm:pt-8 gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-white dark:bg-brand-accent text-brand-blue dark:text-brand-dark font-display font-bold text-xl sm:text-2xl px-2 py-1 rounded-sm">CD</div>
                        <div className="flex flex-col leading-none text-white font-display uppercase text-[0.65rem] tracking-widest font-bold opacity-80">
                            <span>Creative</span>
                            <span>Dev</span>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 md:gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-60 flex-wrap justify-center">
                        <a href="#works" className="hover:text-white hover:opacity-100 transition-opacity">Projects</a>
                        <a href="#about" className="hover:text-white hover:opacity-100 transition-opacity">About</a>
                        <a href="#experience" className="hover:text-white hover:opacity-100 transition-opacity">Experience</a>
                        <a href="#contact" className="hover:text-white hover:opacity-100 transition-opacity">Contact</a>
                    </div>

                    <div className="text-[10px] uppercase font-bold opacity-40 text-center md:text-right">
                        2024 | Copyright<br />All Rights Reserved
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;