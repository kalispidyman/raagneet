import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth > 768 && heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * 15, y: -x * 15 });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0 && heroRef.current) {
      const touch = e.touches[0];
      const rect = heroRef.current.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width - 0.5;
      const y = (touch.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * 10, y: -x * 10 });
    }
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const parallaxOffset = scrollY * 0.3;
  const textOffset = scrollY * 0.15;
  const visualOffset = scrollY * -0.2;

  return (
    <section 
      ref={heroRef} 
      className="hero-section" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={resetTilt}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetTilt}
    >
      <div className="hero-background" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text" style={{ opacity: Math.max(0, 1 - scrollY / 500), transform: `translateY(${textOffset}px)` }}>
          <span className="badge animate-slide-down">Mobile-First Design</span>
          <h1 className="animate-slide-up">Crafting Digital <br /> <span className="highlight">Experiences</span></h1>
          <p className="animate-fade-in">Immersive, interactive, and beautifully responsive. Built for the modern screen and optimized for every touchpoint.</p>
          <div className="hero-buttons animate-fade-in-delay">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Explore Work</button>
          </div>
        </div>
        
        <div className="hero-visual" style={{ transform: `translateY(${visualOffset}px)` }}>
          <div className="phone-mockup" style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
            <div className="notch"></div>
            <div className="screen-content">
              <div className="app-header"></div>
              <div className="mockup-card card-1"></div>
              <div className="mockup-card card-2"></div>
              <div className="mockup-card card-3"></div>
            </div>
          </div>
          <div className="floating-element fe-1">📱</div>
          <div className="floating-element fe-2">🎨</div>
          <div className="floating-element fe-3">⚡</div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default HeroSection;