import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-reveal',
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }} aria-label="Projects">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="proj-reveal mb-14">
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--color-accent)' }}>
            <span className="w-8 h-px inline-block" style={{ background: 'var(--color-accent)' }} />
            03. Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
            What I've Built
          </h2>
          <p className="text-base mt-4 max-w-xl" style={{ color: 'var(--color-muted)' }}>
            More projects coming soon — this portfolio itself is the first showcase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <article key={project.id} className="proj-reveal project-card glass rounded-2xl overflow-hidden group">

              {/* Preview */}
              <div className="relative h-48 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(124,58,237,0.05) 50%, var(--color-bg-alt) 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl p-4 font-mono text-xs"
                    style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(79,70,229,0.2)', width: '200px',
                      boxShadow: '0 4px 20px rgba(79,70,229,0.1)' }}>
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 rounded" style={{ background: 'rgba(79,70,229,0.3)', width: '75%' }} />
                      <div className="h-1.5 rounded bg-black/8 w-full" />
                      <div className="h-1.5 rounded bg-black/6" style={{ width: '60%' }} />
                      <div className="h-1.5 rounded" style={{ background: 'rgba(124,58,237,0.2)', width: '80%' }} />
                      <div className="h-1.5 rounded bg-black/6" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full"
                      style={{ color: 'var(--color-accent)', background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.25)' }}>
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold transition-colors"
                    style={{ color: 'var(--color-text)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text)')}>
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                        style={{ color: 'var(--color-muted)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.08)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                        aria-label={`View ${project.title} on GitHub`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                        style={{ color: 'var(--color-muted)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.08)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                        aria-label={`View ${project.title} live`}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map(tech => <span key={tech} className="skill-tag">{tech}</span>)}
                </div>
              </div>
            </article>
          ))}

          {/* Coming soon */}
          <div className="proj-reveal glass rounded-2xl flex flex-col items-center justify-center min-h-[280px] p-8 text-center"
            style={{ borderStyle: 'dashed', borderColor: 'rgba(79,70,229,0.2)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.18)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.5" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <p className="font-display text-base font-semibold" style={{ color: 'var(--color-muted)' }}>More Coming Soon</p>
            <p className="text-xs font-mono mt-2" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>Projects will be added</p>
          </div>
        </div>
      </div>
    </section>
  );
}
