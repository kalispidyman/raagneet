import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onDone }) {
  const screenRef = useRef(null);
  const lettersRef = useRef([]);
  const ringRef = useRef(null);
  const barRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.set(screenRef.current, { opacity: 1 })
      .fromTo(lettersRef.current,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.045 }
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }, '-=0.2'
      )
      .fromTo(ringRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.4'
      )
      .to(ringRef.current, { rotate: 720, duration: 1.4, ease: 'power2.inOut' }, '-=0.1')
      .to([lettersRef.current, subRef.current, ringRef.current],
        { opacity: 0, y: -20, duration: 0.4, stagger: 0.02 }, '+=0.15'
      )
      .to(screenRef.current,
        { yPercent: -105, duration: 0.85, ease: 'power4.inOut', onComplete: onDone }, '-=0.15'
      );
    return () => tl.kill();
  }, [onDone]);

  const text = 'NEET AI Studio';

  return (
    <div ref={screenRef} className="loading-screen" style={{ opacity: 1 }}>
      {/* Glow orbs */}
      <div style={{ position:'absolute', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)', top:'30%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,rgba(139,92,246,0.1),transparent 70%)', bottom:'20%', right:'20%', pointerEvents:'none' }} />

      {/* Ring */}
      <div ref={ringRef} style={{ position:'relative', marginBottom:'32px' }}>
        <div className="load-ring-outer" />
        <div className="load-ring" />
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs><linearGradient id="lg1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs>
          </svg>
        </div>
      </div>

      {/* Animated letters */}
      <div style={{ display:'flex', gap:'2px', flexWrap:'wrap', justifyContent:'center', marginBottom:'10px' }}>
        {text.split('').map((ch, i) => (
          <span
            key={i}
            ref={el => lettersRef.current[i] = el}
            className="load-letter"
            style={{ color: ch === ' ' ? 'transparent' : i < 4 ? '#a5b4fc' : i < 7 ? '#c4b5fd' : '#67e8f9', marginRight: ch === ' ' ? '8px' : 0 }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      <div ref={subRef} style={{ color:'#475569', fontSize:'.75rem', letterSpacing:'.15em', textTransform:'uppercase', fontFamily:"'JetBrains Mono',monospace", marginBottom:'24px' }}>
        Future of Intelligence
      </div>

      <div className="load-bar">
        <div ref={barRef} className="load-bar-fill" />
      </div>
    </div>
  );
}
