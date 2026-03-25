import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { TechStack } from './components/sections/TechStack';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Competitions } from './components/sections/Competitions';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If mobile menu is open, don't hide the nav bar
      if (isMobileMenuOpen) return;

      // Hide if scrolling down and past the navbar height
      if (currentScrollY > previousScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }
      // Show when scrolling up
      else if (currentScrollY < previousScrollY) {
        setIsVisible(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Clean up
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Standalone Navigation
        It is decoupled from the main content's clipping space so fixed positioning works exactly relative to the viewport.
      */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-[100] bg-bg border-b-2 border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-20 flex items-center justify-between px-6 md:px-12 xl:px-24">
          <h1 className="font-serif font-black text-2xl tracking-tighter uppercase cursor-pointer hover:bg-primary hover:text-white px-2 py-1 transition-colors sharp-corners">
            Minhaz
          </h1>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="hidden lg:flex gap-6 items-center">
              <a href="#about" className="font-mono text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">About</a>
              <a href="#projects" className="font-mono text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">Projects</a>
              <a href="#stack" className="font-mono text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">Skills</a>
              <a href="#certifications" className="font-mono text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">Certs</a>
              <a href="#contact" className="font-mono text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">Contact</a>
              <a
                href="/cv_Mohammad_Minhazul_Abedin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-accent text-white font-mono text-xs uppercase font-bold tracking-widest px-6 py-3 border border-transparent hover:bg-white hover:text-accent hover:border-accent transition-all duration-200 sharp-corners"
              >
                Download CV
              </a>
            </div>

            <button
              className={`lg:hidden flex items-center justify-center p-2 text-primary focus:outline-none transition-all duration-300 border-2 border-primary ${isMobileMenuOpen ? 'rotate-90 bg-neutral-100' : 'hover:bg-neutral-100'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <Minus className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Plus className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown decoupled from nav inner content but sticking to the viewport */}
        <div
          className={`absolute top-20 left-0 right-0 lg:hidden transition-transform duration-500 ease-[0.22,1,0.36,1] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
            }`}
          style={{ height: 'max(100vh, 100%)', zIndex: -1 }}
        >
          <div className="w-full h-full bg-bg newsprint-texture flex flex-col items-center justify-start gap-8 pt-12 pb-32 px-6 border-b-4 border-border overflow-y-auto pointer-events-auto">
            <a href="#about" onClick={handleMobileNavClick} className="font-mono text-2xl uppercase tracking-widest font-black text-primary hover:text-accent transition-colors w-full text-center py-2 border-y border-transparent hover:border-border">About</a>
            <a href="#projects" onClick={handleMobileNavClick} className="font-mono text-2xl uppercase tracking-widest font-black text-primary hover:text-accent transition-colors w-full text-center py-2 border-y border-transparent hover:border-border">Projects</a>
            <a href="#stack" onClick={handleMobileNavClick} className="font-mono text-2xl uppercase tracking-widest font-black text-primary hover:text-accent transition-colors w-full text-center py-2 border-y border-transparent hover:border-border">Skills</a>
            <a href="#certifications" onClick={handleMobileNavClick} className="font-mono text-2xl uppercase tracking-widest font-black text-primary hover:text-accent transition-colors w-full text-center py-2 border-y border-transparent hover:border-border">Certs</a>
            <a href="#contact" onClick={handleMobileNavClick} className="font-mono text-2xl uppercase tracking-widest font-black text-primary hover:text-accent transition-colors w-full text-center py-2 border-y border-transparent hover:border-border mb-4">Contact</a>
            <a
              href="/cv_Mohammad_Minhazul_Abedin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileNavClick}
              className="flex items-center justify-center bg-accent text-white font-mono uppercase font-bold tracking-widest px-8 py-4 border border-transparent hover:bg-black transition-all duration-200 sharp-corners hard-shadow-hover w-full"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <div className="min-h-screen bg-bg text-primary overflow-x-hidden pt-20">
        <main className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 border-x-0 xl:border-x-2 border-border">
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Education />
          <Experience />
          <Competitions />
          <Certifications />
          <Contact />
        </main>

        <footer className="py-12 border-t-2 border-border text-center md:text-left flex flex-col md:flex-row justify-between items-center px-6 md:px-12 xl:px-24 gap-4 bg-bg">
          <div className="font-serif font-black text-xl uppercase tracking-tighter">Mohammad Minhazul Abedin</div>
          <div className="font-mono text-secondary text-xs uppercase tracking-widest">© {new Date().getFullYear()} / minhazulab3din@gmail.com</div>
        </footer>
      </div>
    </>
  );
}

export default App;
