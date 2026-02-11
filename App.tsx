import React, { Suspense, useState, useEffect, lazy, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lazy load components
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Skills = lazy(() => import('./components/Skills'));

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Update HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    });

    // Integrate with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen selection:bg-brand-blue dark:selection:bg-brand-accent selection:text-white ${darkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="bg-brand-orange dark:bg-brand-dark transition-colors duration-500">
        <Hero />
        <Suspense fallback={<div className="h-20 flex items-center justify-center text-white/50">Loading Skills...</div>}>
          <Skills />
        </Suspense>

        {/* Suspense boundary */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-white font-bold">Loading...</div>}>
          <Projects />
          <Experience />
          <About />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default App;