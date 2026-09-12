import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, certifications, education } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-reveal',
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }} aria-label="About me">

      {/* Soft top accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="about-reveal mb-14">
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--color-accent)' }}>
            <span className="w-8 h-px inline-block" style={{ background: 'var(--color-accent)' }} />
            01. About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Main text */}
          <div className="lg:col-span-3 space-y-7">
            <p className="about-reveal text-base leading-relaxed" style={{ color: 'var(--color-text-2)' }}>
              {personalInfo.about}
            </p>

            {/* Education */}
            <div className="about-reveal rounded-2xl p-6 space-y-3 glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold" style={{ color: 'var(--color-text)' }}>{education.degree}</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-muted)' }}>{education.institution}</p>
                  <p className="text-xs font-mono mt-1" style={{ color: 'var(--color-muted)' }}>
                    {education.duration} · CGPA {education.cgpa}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {education.coursework.map(c => (
                      <span key={c} className="skill-tag text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact row */}
            <div className="about-reveal flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {personalInfo.location}
              </div>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Side */}
          <div className="lg:col-span-2 space-y-6">

            {/* Certifications */}
            <div className="about-reveal">
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 glass rounded-xl p-4 group transition-all duration-300"
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '')}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <p className="text-sm leading-snug" style={{ color: 'var(--color-text-2)' }}>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="about-reveal">
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Quick Facts
              </h3>
              <div className="space-y-1">
                {[
                  { key: 'Focus',        value: 'Data Engineering'   },
                  { key: 'Currently at', value: 'Walmart Global Tech' },
                  { key: 'Experience',   value: '5+ Years'           },
                  { key: 'Speciality',   value: 'Cloud & Pipelines'  },
                ].map(f => (
                  <div key={f.key} className="flex justify-between py-2"
                    style={{ borderBottom: '1px solid var(--color-border-soft)' }}>
                    <span className="font-mono text-xs uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>
                      {f.key}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-2)' }}>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
