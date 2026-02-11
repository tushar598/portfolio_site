import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Twitter } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
  };

  const handleTwitterProfile = () => {
    window.open('https://twitter.com/tushar1962005', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 sm:py-4 bg-brand-orange/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-sm'
          : 'py-4 sm:py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">

        {/* Left Spacer (Mobile Only) */}
        <div className="md:hidden w-8" />

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center gap-6 lg:gap-12">
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
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />
            ) : (
              <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />
            )}
          </button>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handleGitHubProfile}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:text-brand-dark flex items-center justify-center transition-all"
              aria-label="GitHub"
            >
              <Github />
            </button>

            <button
              onClick={handleTwitterProfile}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-orange dark:hover:bg-blue-400 dark:hover:text-white flex items-center justify-center transition-all"
              aria-label="Twitter"
            >
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
        className={`fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-brand-orange dark:bg-brand-dark border-t border-white/10 md:hidden flex flex-col shadow-2xl transform transition-all duration-300 ease-in-out origin-top z-40
        ${
          isOpen
            ? 'scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-6 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white font-display font-bold text-xl uppercase hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <button
              onClick={handleGitHubProfile}
              className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={20} />
            </button>

            <button
              onClick={handleTwitterProfile}
              className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
