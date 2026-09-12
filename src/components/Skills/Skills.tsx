import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons: Record<string, React.ReactNode> = {
  'Cloud & Data Platforms': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  'Data Engineering': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'Languages & Databases': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
      gsap.fromTo('.skill-tag-anim',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.025, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 62%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg-alt)' }} aria-label="Technical skills">

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,70,229,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="skills-reveal mb-14">
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--color-accent)' }}>
            <span className="w-8 h-px inline-block" style={{ background: 'var(--color-accent)' }} />
            04. Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
            Tech Stack
          </h2>
          <p className="text-base mt-4 max-w-xl" style={{ color: 'var(--color-muted)' }}>
            Technologies and tools I work with to build scalable data systems.
          </p>
        </div>

        {/* Skill categories */}
        <div className="space-y-6">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category} className="skills-reveal glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: 'var(--color-accent)' }}>
                  {categoryIcons[category]}
                </div>
                <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--color-text)' }}>{category}</h3>
                <span className="ml-auto font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
                  {techs.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2" role="list">
                {techs.map(tech => (
                  <div key={tech} className="skill-tag skill-tag-anim" role="listitem">{tech}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline diagram */}
        <div className="skills-reveal mt-10 glass rounded-2xl p-8 overflow-hidden relative">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
            Typical Data Pipeline Architecture
          </h3>
          <div className="flex items-center justify-between flex-wrap gap-4" aria-label="Data pipeline flow">
            {[
              { label: 'Source',   items: ['Oracle', 'MySQL', 'IoT', 'GCS'],       color: '#4f46e5' },
              { label: 'Ingest',   items: ['Pub/Sub', 'Dataflow', 'Beam'],          color: '#6d28d9' },
              { label: 'Process',  items: ['PySpark', 'Airflow', 'Hudi'],           color: '#7c3aed' },
              { label: 'Store',    items: ['BigQuery', 'Cloud SQL', 'Hive'],        color: '#8b5cf6' },
              { label: 'Serve',    items: ['Analytics', 'Reports', 'APIs'],         color: '#a78bfa' },
            ].map((stage, i, arr) => (
              <div key={stage.label} className="flex items-center gap-3 md:gap-4">
                <div className="text-center">
                  <div className="rounded-xl px-3 py-2 text-xs font-mono font-semibold mb-2"
                    style={{ background: `${stage.color}10`, border: `1px solid ${stage.color}28`, color: stage.color }}>
                    {stage.label}
                  </div>
                  <div className="space-y-1">
                    {stage.items.map(item => (
                      <div key={item} className="text-xs text-center" style={{ color: 'var(--color-muted)' }}>{item}</div>
                    ))}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:flex items-center gap-1 flex-shrink-0" style={{ color: 'var(--color-border-soft)' }} aria-hidden="true">
                    <div className="w-4 h-px" style={{ background: 'rgba(79,70,229,0.2)' }} />
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="rgba(79,70,229,0.35)">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
