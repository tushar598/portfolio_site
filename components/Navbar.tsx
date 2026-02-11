import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Twitter } from 'lucide-react';


interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Projects', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleGitHubProfile = () => {
    window.open('https://github.com/tushar598', '_blank');
  }

  const handleTwitterProfile = () => {
    window.open('https://twitter.com/tushar1962005', '_blank');
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4 bg-brand-orange/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-sm' : 'py-4 sm:py-6 md:py-8 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-brand-accent rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
            <span className="font-display font-bold text-lg sm:text-xl text-brand-blue dark:text-brand-dark">WE</span>
          </div>
          <div className="flex flex-col leading-none text-white font-display uppercase tracking-widest font-bold text-xs sm:text-sm">
            <span>Make</span>
            <span>Web</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white font-display font-bold text-sm uppercase tracking-wider hover:text-brand-dark dark:hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </button>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">

            <button onClick={handleGitHubProfile} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center text-[10px] font-bold transition-all" aria-label="GitHub">
              <Github />
            </button>
            <button onClick={handleTwitterProfile} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:bg-blue-400 dark:hover:text-white flex items-center justify-center text-[10px] font-bold transition-all" aria-label="Twitter">
              <Twitter />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-brand-orange dark:bg-brand-dark border-t border-white/10 md:hidden flex flex-col shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{ maxHeight: isOpen ? 'calc(100vh - 60px)' : '0' }}
      >
        <div className="p-6 flex flex-col gap-6 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white font-display font-bold text-xl sm:text-2xl uppercase hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Social Icons */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <button className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center" aria-label="GitHub">
              <Github size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center" aria-label="Twitter">
              <Twitter size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;