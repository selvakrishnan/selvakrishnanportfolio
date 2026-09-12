import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../data';

const navItems = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const navRef   = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
    );

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={e => goto(e, '#hero')}
          className="font-mono text-sm tracking-widest hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-accent)' }}
          aria-label="Home"
        >
          <span style={{ color: 'var(--color-muted)' }}>&lt;</span>
          SR
          <span style={{ color: 'var(--color-muted)' }}> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={e => goto(e, item.href)} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          style={{
            border: '1.5px solid rgba(79,70,229,0.35)',
            color: 'var(--color-accent)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.07)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ background: 'var(--color-text)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ background: 'var(--color-text)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ background: 'var(--color-text)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/5 shadow-sm">
          <ul className="px-6 py-4 flex flex-col gap-4" role="list">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={e => goto(e, item.href)}
                  className="block text-sm font-medium py-1 transition-colors"
                  style={{ color: 'var(--color-text-2)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: 'var(--color-accent)' }}
              >
                Download Resume ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
