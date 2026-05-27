import React, { useEffect, useRef } from 'react';

/**
 * Premium 4K winter background with:
 * - Soft animated parallax layers
 * - Glassy aurora-style gradients
 * - Mouse-reactive spotlight + parallax snow clusters
 * - Subtle hover-reactive glow for interactive elements (buttons, links, cards)
 *
 * This sits behind the main app content (see global CSS hooks in index.css).
 */
export default function MouseBackground() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const snowLayerRef = useRef(null);
  const parallaxFrontRef = useRef(null);
  const parallaxBackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spotlight = spotlightRef.current;
    const snowLayer = snowLayerRef.current;
    const front = parallaxFrontRef.current;
    const back = parallaxBackRef.current;

    let rafId = null;

    // Pre-generate a "4K-ish" snowfield using radial gradients for performance
    const buildSnowField = () => {
      if (!snowLayer) return;

      const canvas = document.createElement('canvas');
      const dpr = window.devicePixelRatio || 1;
      canvas.width = 2560 * dpr;
      canvas.height = 1440 * dpr;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      const gradientNight = ctx.createLinearGradient(0, 0, 0, height);
      gradientNight.addColorStop(0, '#020617');
      gradientNight.addColorStop(0.35, '#020617');
      gradientNight.addColorStop(1, '#0f172a');
      ctx.fillStyle = gradientNight;
      ctx.fillRect(0, 0, width, height);

      // Far snow (tiny, faint)
      for (let i = 0; i < 450; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 1.3 + 0.4;
        const alpha = Math.random() * 0.25 + 0.07;
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mid snow
      for (let i = 0; i < 250; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 2.4 + 0.9;
        const alpha = Math.random() * 0.4 + 0.15;
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Near snow (bokeh-like blur using radial gradient)
      for (let i = 0; i < 80; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 18 + 8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, 'rgba(226, 232, 240, 0.55)');
        gradient.addColorStop(0.5, 'rgba(226, 232, 240, 0.26)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const dataUrl = canvas.toDataURL('image/png');
      snowLayer.style.backgroundImage = `url('${dataUrl}')`;
      snowLayer.style.backgroundSize = 'cover';
      snowLayer.style.backgroundRepeat = 'repeat';
    };

    buildSnowField();

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 3;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const handleTouchMove = (e) => {
      const t = e.touches[0];
      mouseX = t.clientX;
      mouseY = t.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      rafId = null;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;

      const normX = (mouseX / w) - 0.5; // -0.5 to 0.5
      const normY = (mouseY / h) - 0.5;

      const frontIntensity = 18;
      const backIntensity = 8;
      const snowIntensity = 12;

      if (front) {
        front.style.transform = `translate3d(${normX * -frontIntensity}px, ${normY * -frontIntensity}px, 0)`;
      }
      if (back) {
        back.style.transform = `translate3d(${normX * backIntensity}px, ${normY * backIntensity}px, 0)`;
      }
      if (snowLayer) {
        snowLayer.style.transform = `translate3d(${normX * -snowIntensity}px, ${normY * snowIntensity}px, 0)`;
      }

      if (spotlight) {
        const radius = Math.max(w, h) * 0.5;
        spotlight.style.background = `
          radial-gradient(
            circle at ${mouseX}px ${mouseY}px,
            rgba(148, 163, 253, 0.15) 0,
            rgba(94, 234, 212, 0.08) 28%,
            rgba(15, 23, 42, 0.0) ${radius}px
          )
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Global hover hook: add a glow on hover for primary interactive elements
    const hoverTargets = Array.from(
      document.querySelectorAll(
        'button, a, [data-glass-card], .nav-cta-btn, .mobile-cta'
      )
    );

    hoverTargets.forEach((el) => {
      el.classList.add('nb-hover-soft');
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafId) cancelAnimationFrame(rafId);

      hoverTargets.forEach((el) => {
        el.classList.remove('nb-hover-soft');
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="nb-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base 4K winter gradient background */}
      <div className="nb-bg-base absolute inset-0" />

      {/* Soft mountains / horizon glow (back layer, slow drift) */}
      <div
        ref={parallaxBackRef}
        className="nb-bg-back absolute inset-0"
      >
        <div className="nb-bg-back-mountain" />
      </div>

      {/* Aurora / glassy gradient ribbons (front layer, slightly faster) */}
      <div
        ref={parallaxFrontRef}
        className="nb-bg-front absolute inset-0"
      >
        <div className="nb-bg-aurora nb-bg-aurora-1" />
        <div className="nb-bg-aurora nb-bg-aurora-2" />
        <div className="nb-bg-aurora nb-bg-aurora-3" />
      </div>

      {/* Procedural "4K" snow layer */}
      <div
        ref={snowLayerRef}
        className="nb-bg-snow absolute inset-0"
      />

      {/* Mouse spotlight overlay */}
      <div
        ref={spotlightRef}
        className="nb-bg-spotlight absolute inset-0 mix-blend-screen"
      />

      {/* Very subtle vignette for depth */}
      <div className="nb-bg-vignette absolute inset-0" />
    </div>
  );
}