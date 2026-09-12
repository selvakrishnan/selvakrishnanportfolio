import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portrait() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLImageElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const ring1Ref   = useRef<HTMLDivElement>(null);
  const ring2Ref   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrapper = wrapperRef.current;
    const img     = imageRef.current;
    const glow    = glowRef.current;
    const ring1   = ring1Ref.current;
    const ring2   = ring2Ref.current;
    if (!wrapper || !img || !glow) return;

    // Entrance
    gsap.timeline({ delay: 0.7 })
      .fromTo(wrapper, { opacity: 0, scale: 0.78 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' })
      .fromTo(ring1,   { opacity: 0, scale: 0.5  }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.5')
      .fromTo(ring2,   { opacity: 0, scale: 0.5  }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.5');

    if (prefersReducedMotion) return;

    // Float
    gsap.to(wrapper, { y: -14, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1 });

    // Scroll-driven 360° Y rotation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.4,
        invalidateOnRefresh: true,
      },
    });
    scrollTl
      .fromTo(img,   { rotateY: 0   }, { rotateY: 360,  ease: 'none' })
      .fromTo(glow,  { opacity: 0.3 }, { opacity: 0.85, ease: 'none' }, '<')
      .fromTo(ring1, { rotate: 0    }, { rotate: -200,  ease: 'none' }, '<')
      .fromTo(ring2, { rotate: 0    }, { rotate: 140,   ease: 'none' }, '<');

    // Mouse tilt
    let tiltActive = true;
    const heroST = ScrollTrigger.create({
      trigger: '#hero', start: 'top top', end: 'bottom top',
      onUpdate: self => { tiltActive = self.progress < 0.05; },
    });

    const onMouseMove = (e: MouseEvent) => {
      if (!tiltActive) return;
      const dx = (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
      const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      gsap.to(wrapper, { rotateX: -dy * 8, rotateY: dx * 14, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(glow,    { x: dx * 18, y: dy * 12,             duration: 0.9, ease: 'power2.out', overwrite: 'auto' });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      scrollTl.kill();
      heroST.kill();
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 'clamp(260px, 36vw, 400px)', height: 'clamp(260px, 36vw, 400px)' }}
    >
      {/* Decorative rings */}
      <div ref={ring1Ref} className="absolute inset-0 rounded-full opacity-0"
        style={{ border: '1.5px dashed rgba(79,70,229,0.22)', transform: 'scale(1.2)' }} aria-hidden="true" />
      <div ref={ring2Ref} className="absolute inset-0 rounded-full opacity-0"
        style={{ border: '1px solid rgba(79,70,229,0.1)', transform: 'scale(1.38)' }} aria-hidden="true" />

      {/* 3-D perspective wrapper */}
      <div
        ref={wrapperRef}
        className="relative opacity-0"
        style={{ width: '100%', height: '100%', perspective: '900px', perspectiveOrigin: 'center center' }}
      >
        {/* Glow — lighter on ivory background */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, rgba(124,58,237,0.2) 40%, transparent 70%)',
            filter: 'blur(30px)',
            transform: 'scale(1.2)',
            opacity: 0.3,
          }}
          aria-hidden="true"
        />

        {/* Portrait circle */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            boxShadow:
              '0 0 0 2px rgba(79,70,229,0.35), 0 20px 60px rgba(79,70,229,0.18), 0 4px 24px rgba(0,0,0,0.12)',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            ref={imageRef}
            src="/selvakrishnanportfolio/portrait.jpeg"
            alt="Selvakrishnan Rajendran — Senior Data Engineer"
            className="w-full h-full object-cover object-top select-none"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              filter: 'contrast(1.03) saturate(0.95) brightness(1.02)',
              willChange: 'transform',
            }}
            draggable={false}
            loading="eager"
          />
          {/* Rim light */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, transparent 45%, rgba(0,0,0,0.08) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Orbit dot */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: '8%', right: '3%',
            background: '#4f46e5',
            boxShadow: '0 0 12px rgba(79,70,229,0.7)',
            animation: 'pulseRing 2s ease-out infinite',
          }}
          aria-hidden="true"
        />

        {/* Available badge */}
        <div
          className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: '#10b981', boxShadow: '0 0 6px rgba(16,185,129,0.8)', animation: 'pulseRing 2s ease-out infinite' }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono font-medium" style={{ color: '#059669' }}>Available</span>
        </div>
      </div>
    </div>
  );
}
