import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Cpu, Shield, Layers } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleText = "Crafting the Future of Digital Experiences";
  const words = titleText.split(" ");

  return (
    <section className={`hero-section ${isLoaded ? 'is-loaded' : ''} relative min-h-screen flex items-center justify-center overflow-hidden pt-20`}>
      {/* BACKGROUND ORBS & EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb w-[600px] h-[600px] bg-accent-teal top-[-10%] left-[-10%] animate-drift-slow" />
        <div className="bg-orb w-[500px] h-[500px] bg-accent-purple bottom-[-5%] right-[-5%] animate-drift-slower" />
        <div className="bg-orb w-[400px] h-[400px] bg-accent-cyan top-[30%] left-[40%] animate-pulse-slow opacity-10" />
        <div className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-[2px]" />
      </div>

      {/* TECH BACKGROUND LOOP (EXISTING) */}
      <div className="hero-bg-loop opacity-30">
        <div className="loop-grid" />
        <div className="loop-lines" />
      </div>

      <div className="hero-container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-wrapper mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="hero-badge !bg-white/[0.03] !border-white/[0.08] !text-accent-cyan/80">
              <Sparkles className="badge-icon" />
              <span>Redefining Digital Excellence</span>
            </div>
          </div>
          
          {/* Animated Heading */}
          <h1 className="hero-title text-premium mb-6">
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
          <p className="hero-description text-slate-400/90 text-lg max-w-xl leading-relaxed mb-10 opacity-0 translate-y-4 transition-all duration-1000 delay-700 is-loaded:opacity-100 is-loaded:translate-y-0">
            Raagneet Studios delivers cutting-edge web, mobile, and AI solutions designed to elevate your brand and accelerate growth.
          </p>
          
          {/* Action Buttons */}
          <div className="hero-actions flex gap-5 opacity-0 translate-y-4 transition-all duration-1000 delay-1000 is-loaded:opacity-100 is-loaded:translate-y-0">
            <button className="btn-primary-glass flex items-center gap-2 group">
              Start Your Project 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-glass flex items-center gap-2">
              View Our Work 
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="hero-indicators mt-12 space-y-3 opacity-0 transition-opacity duration-1000 delay-[1200ms] is-loaded:opacity-100">
            <div className="indicator-track !bg-white/[0.02] !border-white/[0.08]">
              <div className="indicator-pulse !bg-accent-cyan !shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
              <div className="indicator-label !text-slate-400/70">SYSTEM_READY</div>
            </div>
            <div className="indicator-track !bg-white/[0.02] !border-white/[0.08]">
              <div className="indicator-pulse delay-1 !bg-accent-purple !shadow-[0_0_12px_rgba(124,58,237,0.5)]" />
              <div className="indicator-label !text-slate-400/70">ENCRYPTION_ACTIVE</div>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hero-visual lg:block hidden">
          <div className="visual-nexus-wrapper relative">
            {/* GLASS OVERLAY FOR NEXUS */}
            <div className="absolute inset-[-20px] bg-white/[0.01] backdrop-blur-[1px] rounded-full border border-white/[0.05] z-[-1]" />
            
            <div className="visual-nexus">
              <div className="nexus-ring ring-1 !border-white/[0.1]" />
              <div className="nexus-ring ring-2 !border-accent-purple/20" />
              <div className="nexus-ring ring-3 !border-accent-cyan/10" />
              <div className="nexus-core-glow !bg-accent-cyan/10" />
              <div className="nexus-scanner !bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
              <Cpu className="nexus-icon !text-white/80" />
            </div>
            
            <div className="data-point point-1 glass-card-modern !p-0 !rounded-full w-10 h-10 flex items-center justify-center">
              <Zap size={14} className="text-accent-cyan" />
            </div>
            <div className="data-point point-2 glass-card-modern !p-0 !rounded-full w-10 h-10 flex items-center justify-center">
              <Globe size={14} className="text-accent-purple" />
            </div>
            <div className="data-point point-3 glass-card-modern !p-0 !rounded-full w-10 h-10 flex items-center justify-center">
              <Shield size={14} className="text-accent-cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;