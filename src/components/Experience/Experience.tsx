import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-reveal',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
      gsap.fromTo('.timeline-progress',
        { scaleY: 0 },
        { scaleY: 1, duration: 1.6, ease: 'power2.out', transformOrigin: 'top',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg-alt)' }} aria-label="Work experience">

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="exp-reveal mb-14">
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--color-accent)' }}>
            <span className="w-8 h-px inline-block" style={{ background: 'var(--color-accent)' }} />
            02. Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
            Career Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'var(--color-border-soft)' }} aria-hidden="true" />
          <div className="timeline-progress absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #4f46e5, rgba(79,70,229,0.2), transparent)' }} aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={job.id} className="exp-reveal relative group">

                {/* Dot */}
                <div
                  className="absolute -left-10 md:-left-14 top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: '#4f46e5',
                    background: job.current ? '#4f46e5' : 'var(--color-surface)',
                    boxShadow: job.current ? '0 0 12px rgba(79,70,229,0.5)' : 'none',
                  }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="glass rounded-2xl p-6 md:p-8 transition-all duration-400 group-hover:shadow-md"
                  style={{ borderColor: job.current ? 'rgba(79,70,229,0.2)' : undefined }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-display text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full"
                            style={{ color: '#059669', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"
                              style={{ boxShadow: '0 0 6px rgba(16,185,129,0.8)' }} />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-semibold" style={{ color: 'var(--color-accent)' }}>{job.company}</p>
                      <p className="text-sm font-mono mt-0.5" style={{ color: 'var(--color-muted)' }}>
                        {job.location} · {job.industry}
                      </p>
                    </div>
                    <span className="font-mono text-sm px-3 py-1.5 rounded-lg glass flex-shrink-0"
                      style={{ color: 'var(--color-text-2)' }}>
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6" role="list">
                    {job.highlights.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--color-text-2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'var(--color-accent)', opacity: 0.6 }} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>

                {idx < experience.length - 1 && (
                  <div className="absolute -left-9 top-6 w-px h-10"
                    style={{ background: 'linear-gradient(to bottom, rgba(79,70,229,0.3), transparent)' }}
                    aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
