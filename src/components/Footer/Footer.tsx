import { personalInfo } from '../../data';

export default function Footer() {
  return (
    <footer className="relative py-10" role="contentinfo"
      style={{ background: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border-soft)' }}>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <span className="font-mono text-sm" style={{ color: 'var(--color-accent)' }}>
            <span style={{ color: 'var(--color-muted)' }}>&lt;</span>SR
            <span style={{ color: 'var(--color-muted)' }}>/&gt;</span>
          </span>

          <p className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
            © {new Date().getFullYear()} Selvakrishnan Rajendran · Built with React, Three.js & GSAP
          </p>

          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.github,   label: 'GitHub',   icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />, fill: true },
              { href: personalInfo.linkedin, label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>, fill: true },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="transition-colors" aria-label={`${s.label} profile`}
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={s.fill ? 'currentColor' : 'none'}
                  stroke={s.fill ? 'none' : 'currentColor'} strokeWidth="2" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
