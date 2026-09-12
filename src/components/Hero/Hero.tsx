import { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Portrait from './Portrait';
import ParticleField from './ParticleField';
import { personalInfo } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef       = useRef<HTMLElement>(null);
  const overlineRef      = useRef<HTMLParagraphElement>(null);
  const headingRef       = useRef<HTMLDivElement>(null);
  const taglineRef       = useRef<HTMLParagraphElement>(null);
  const ctaRef           = useRef<HTMLDivElement>(null);
  const statsRef         = useRef<HTMLDivElement>(null);
  const scrollIndRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(overlineRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
      .fromTo(headingRef.current,   { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .fromTo(taglineRef.current,   { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo(ctaRef.current,       { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .fromTo(statsRef.current,     { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .fromTo(scrollIndRef.current, { opacity: 0 },        { opacity: 1, duration: 0.8 }, '-=0.2');

    // Bounce scroll dot
    gsap.to('.scroll-dot', {
      y: 10, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: -1,
    });

    return () => { tl.kill(); };
  }, []);

  const gotoSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
      aria-label="Hero section"
    >
      {/* Particle canvas — light colours */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1 space-y-0">

            <p
              ref={overlineRef}
              className="font-mono text-xs tracking-[0.35em] uppercase mb-5 flex items-center gap-3"
              style={{ color: 'var(--color-accent)' }}
            >
              <span className="w-8 h-px inline-block" style={{ background: 'var(--color-accent)' }} />
              Senior Data Engineer
            </p>

            <div ref={headingRef} className="mb-5">
              <h1
                className="font-display font-bold leading-[1.05]"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', color: 'var(--color-text)' }}
              >
                <span className="block">Selva</span>
                <span className="block gradient-text">krishnan</span>
                <span className="block font-light text-2xl md:text-3xl tracking-widest mt-1"
                  style={{ color: 'var(--color-muted)' }}>
                  Rajendran
                </span>
              </h1>
            </div>

            <p
              ref={taglineRef}
              className="text-lg md:text-xl font-light leading-relaxed mb-9 max-w-md"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text-2)' }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => gotoSection('projects')}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  boxShadow: '0 8px 28px rgba(79,70,229,0.28)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => gotoSection('about')}
                className="px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(79,70,229,0.25)',
                  color: 'var(--color-accent)',
                  background: 'transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(79,70,229,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                About Me
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-8">
              {[
                { value: '5+',   label: 'Years Experience' },
                { value: '3',    label: 'Companies'        },
                { value: '150+', label: 'ETL Pipelines'    },
                { value: '50TB+',label: 'Data Processed'   },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-display gradient-text">{stat.value}</div>
                  <div className="text-xs font-mono tracking-wide mt-0.5" style={{ color: 'var(--color-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Portrait ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Portrait />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => gotoSection('about')}
          role="button" tabIndex={0} aria-label="Scroll to About"
          onKeyDown={e => e.key === 'Enter' && gotoSection('about')}
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1.5px solid rgba(79,70,229,0.25)' }}>
            <div className="scroll-dot w-1 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
