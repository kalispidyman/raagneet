import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Cpu, Shield, Layers } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleWords = "Crafting the Future of Digital Experiences".split(" ");

  return (
    <section className={`hero-section ${isLoaded ? 'is-loaded' : ''}`}>
      {/* Background Ambient Elements */}
      <div className="hero-bg-accents">
        <div className="accent-orb orb-1" />
        <div className="accent-orb orb-2" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-wrapper animate-slide-down">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>Redefining Digital Excellence</span>
              <div className="badge-glow" />
            </div>
          </div>
          
          {/* Animated Heading */}
          <h1 className="hero-title">
            {titleWords.map((word, i) => (
              <span key={i} className="title-word-wrapper">
                <span className="title-word" style={{ '--word-index': i }}>
                  {word}
                </span>
                {i < titleWords.length - 1 && "\u00A0"}
              </span>
            ))}
          </h1>
          
          {/* Description */}
          <p className="hero-description animate-fade-in">
            Raagneet Studios delivers cutting-edge web, mobile, and AI solutions designed to elevate your brand and accelerate growth.
          </p>
          
          {/* Action Buttons */}
          <div className="hero-actions animate-slide-up">
            <button className="btn-primary hero-btn">
              Start Your Project <ArrowRight className="btn-icon" />
            </button>
            <button className="btn-secondary hero-btn">
              View Our Work <Globe className="btn-icon" />
            </button>
          </div>

          {/* Feature Pills */}
          <div className="hero-features animate-fade-in">
            {[
              { icon: <Zap />, text: 'Lightning Fast' },
              { icon: <Shield />, text: 'Secure Scale' },
              { icon: <Layers />, text: 'Premium Design' }
            ].map((item, i) => (
              <div key={i} className="feature-pill" style={{ '--pill-index': i }}>
                <span className="pill-icon">{item.icon}</span>
                <span className="pill-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element / Side Graphic */}
        <div className="hero-visual animate-float-delayed">
          <div className="visual-nexus-wrapper">
            <div className="visual-nexus">
              <div className="nexus-ring ring-1" />
              <div className="nexus-ring ring-2" />
              <div className="nexus-ring ring-3" />
              <div className="nexus-core-glow" />
              <Cpu className="nexus-icon" />
            </div>
            {/* Floating Data Points */}
            <div className="data-point point-1"><Zap size={12} /></div>
            <div className="data-point point-2"><Globe size={12} /></div>
            <div className="data-point point-3"><Shield size={12} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;