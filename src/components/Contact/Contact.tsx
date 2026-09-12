import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const sub  = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`);
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  const links = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub', value: 'github.com/selvakrishnan', href: personalInfo.github, external: true,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn', value: 'selvakrishnanrajendran', href: personalInfo.linkedin, external: true,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }} aria-label="Contact">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="contact-reveal mb-14 text-center">
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
            05. Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Let's Connect
          </h2>
          <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            Have a data engineering challenge or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">

          {/* Links */}
          <div className="contact-reveal space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--color-text)' }}>
                Get in touch
              </h3>
              <div className="space-y-3">
                {links.map(item => (
                  <a key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 glass rounded-xl p-4 group transition-all duration-300"
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.28)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '')}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: 'var(--color-accent)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>{item.label}</p>
                      <p className="text-sm font-medium mt-0.5 transition-colors" style={{ color: 'var(--color-text-2)' }}>{item.value}</p>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="ml-auto group-hover:translate-x-1 transition-transform"
                      style={{ color: 'var(--color-muted)' }} aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="contact-reveal glass rounded-2xl p-6 relative overflow-hidden"
              style={{ borderColor: 'rgba(79,70,229,0.18)' }}>
              <div className="shimmer absolute inset-0 rounded-2xl pointer-events-none" aria-hidden="true" />
              <p className="font-display text-base font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                Want my full resume?
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
                Download a copy to review my complete work history and skills.
              </p>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.25)', color: 'var(--color-accent)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(79,70,229,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(79,70,229,0.08)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-reveal">
            <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8 space-y-5" aria-label="Contact form">
              <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                Send a message
              </h3>

              {(['name', 'email'] as const).map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-xs font-mono uppercase tracking-wide mb-2"
                    style={{ color: 'var(--color-muted)' }}>
                    {field === 'name' ? 'Your Name' : 'Email Address'}
                  </label>
                  <input
                    id={field} name={field} type={field === 'email' ? 'email' : 'text'}
                    required value={form[field]} onChange={change}
                    placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                    className="form-input"
                    autoComplete={field}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide mb-2"
                  style={{ color: 'var(--color-muted)' }}>Message</label>
                <textarea id="message" name="message" required rows={5}
                  value={form.message} onChange={change}
                  placeholder="Tell me about your project or just say hello..."
                  className="form-input resize-none" />
              </div>

              <button type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60"
                style={{
                  background: status === 'sent'
                    ? 'linear-gradient(135deg, #059669, #10b981)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  boxShadow: '0 6px 20px rgba(79,70,229,0.22)',
                }}>
                {status === 'idle' && (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                )}
                {status === 'sending' && 'Opening mail client…'}
                {status === 'sent' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Ready to Send!
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
