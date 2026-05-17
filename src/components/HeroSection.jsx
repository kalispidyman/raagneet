import { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax and fade calculation
  const parallaxOffset = scrollY * 0.25;
  const opacity = Math.max(0, 1 - scrollY / 700);
  const blur = Math.min(scrollY * 0.02, 10);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>
      
      <div 
        className="hero-content" 
        style={{ 
          transform: `translate3d(0, ${-parallaxOffset}px, 0)`,
          opacity,
          filter: `blur(${blur}px)`
        }}
      >
        <h1 className="hero-title">
          <span className="title-line line-1">Design Beyond</span>
          <span className="title-line line-2">Expectations</span>
        </h1>
        <p className="hero-subtitle">
          Crafting immersive mobile experiences with stunning visuals and smooth interactions.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;