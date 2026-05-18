import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Cpu, Shield, Layers } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleText = "Crafting the Future of Digital Experiences";
  
  // Split into words, then characters to avoid layout shifts but allow granular animation
  const words = titleText.split(" ");

  return (
    <section className={`hero-section ${isLoaded ? 'is-loaded' : ''}`}>
      {/* Background Animated Loop */}
      <div className="hero-bg-loop">
        <div className="loop-grid" />
        <div className="loop-lines" />
        <div className="hero-bg-accents">
          <div className="accent-orb orb-1" />
          <div className="accent-orb orb-2" />
        </div>
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
          
          {/* Enhanced Animated Heading */}
          <h1 className="hero-title">
            {words.map((word, wIdx) => (
              <span key={wIdx} className="title-word-wrapper">
                {word.split("").map((char, cIdx) => (
                  <span 
                    key={cIdx} 
                    className="title-char" 
                    style={{ '--char-index': wIdx * 10 + cIdx }}
                  >
                    {char}
                  </span>
                ))}
                {wIdx < words.length - 1 && <span className="title-char">&nbsp;</span>}
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

          {/* Left Side Feature Indicators (Redesigned Animation) */}
          <div className="hero-indicators animate-fade-in">
            <div className="indicator-track">
              <div className="indicator-pulse" />
              <div className="indicator-label">SYSTEM_READY</div>
            </div>
            <div className="indicator-track">
              <div className="indicator-pulse delay-1" />
              <div className="indicator-label">ENCRYPTION_ACTIVE</div>
            </div>
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
              <div className="nexus-scanner" />
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