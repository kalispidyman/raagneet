import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax calculations
  const parallaxOffset = scrollY * 0.35;
  const contentOpacity = Math.max(0, 1 - scrollY / 250);
  const contentScale = Math.max(0.95, 1 - scrollY / 1200);

  return (
    <section 
      ref={heroRef} 
      className="hero-section"
      aria-label="Hero Section"
    >
      <div className="hero-bg-layer" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div 
        className="hero-content"
        style={{ opacity: contentOpacity, transform: `scale(${contentScale})` }}
      >
        <div className={`hero-text-wrapper ${visible ? 'animate-in' : ''}`}>
          <h1 className="hero-title">
            <span className="word">Design.</span>
            <span className="word">Develop.</span>
            <span className="word highlight">Deliver.</span>
          </h1>
          <p className="hero-subtitle">
            Building immersive, mobile-first web experiences that engage users from the first scroll.
          </p>
          <div className="hero-cta-group">
            <button className="btn btn-primary" aria-label="View Portfolio">
              View My Work
            </button>
            <button className="btn btn-secondary" aria-label="Contact Me">
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Swipe Down</span>
      </div>
    </section>
  );
};

export default HeroSection;