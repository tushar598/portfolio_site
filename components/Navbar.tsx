import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-brand-orange/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="relative w-10 h-10 bg-white dark:bg-brand-accent rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
            <span className="font-display font-bold text-xl text-brand-blue dark:text-brand-dark">WE</span>
          </div>
          <div className="flex flex-col leading-none text-white font-display uppercase tracking-widest font-bold text-sm">
            <span>Make</span>
            <span>Web</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
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
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {['GH', 'LI'].map((social, idx) => (
              <button key={idx} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center text-[10px] font-bold transition-all">
                {social}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-orange dark:bg-brand-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl h-[calc(100vh-100%)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white font-display font-bold text-2xl uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;