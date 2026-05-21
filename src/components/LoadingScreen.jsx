import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

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

      {/* Ring & Custom Animated Brand Logo inside Loader */}
      <div ref={ringRef} style={{ position:'relative', marginBottom:'32px', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div className="load-ring-outer" />
        <div className="load-ring" style={{ position: 'absolute' }} />
        <div style={{ zIndex: 2, transform: 'scale(0.85)', pointerEvents: 'none' }}>
          <Logo size="md" animated={false} />
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