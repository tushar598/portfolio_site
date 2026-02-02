import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={`min-h-screen selection:bg-brand-blue dark:selection:bg-brand-accent selection:text-white ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="bg-brand-orange dark:bg-brand-dark transition-colors duration-500">
        <Hero />
        <Skills />
        
        {/* Suspense boundary */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-white font-bold">Loading...</div>}>
           <Projects />
           <Experience />
           <About />
        </Suspense>
        
        <Contact />
      </main>
    </div>
  );
};

export default App;