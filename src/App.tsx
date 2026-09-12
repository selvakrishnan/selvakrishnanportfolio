import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { useCursorGlow } from './hooks/useCursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Initialize cursor glow
  useCursorGlow();

  // Handle hash navigation on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Cursor glow element */}
      <div id="cursor-glow" className="cursor-glow hidden md:block" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />

        {/* Section separator */}
        <div className="section-divider" aria-hidden="true" />

        <About />

        <div className="section-divider" aria-hidden="true" />

        <Experience />

        <div className="section-divider" aria-hidden="true" />

        <Projects />

        <div className="section-divider" aria-hidden="true" />

        <Skills />

        <div className="section-divider" aria-hidden="true" />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
