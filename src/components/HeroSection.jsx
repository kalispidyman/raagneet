import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Smartphone } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="pulse-dot"></span>
            Elevating Digital Experiences
          </div>
          
          <h1 className="hero-title animate-fade-in-up delay-100">
            Transform Your Vision Into <br/>
            <span className="text-gradient glow-text">Digital Reality</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up delay-200">
            Neet's Studios delivers premium web applications, mobile solutions, 
            and cutting-edge software tailored for modern businesses.
          </p>
          
          <div className="hero-cta animate-fade-in-up delay-300">
            <Link to="/contact" className="btn btn-primary">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              View Our Work
            </Link>
          </div>
          
          <div className="hero-features animate-fade-in-up delay-300">
            <div className="feature-item">
              <div className="feature-icon"><Code size={24} /></div>
              <span>Web Dev</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Smartphone size={24} /></div>
              <span>App Dev</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Zap size={24} /></div>
              <span>Fast ROI</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in-up delay-200">
          <div className="glass-panel visual-card">
            <div className="card-header">
              <div className="mac-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="card-body">
              <div className="skeleton-line skeleton-title"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line w-80"></div>
              
              <div className="stats-grid">
                <div className="stat-box glow-box">
                  <div className="stat-value">99%</div>
                  <div className="stat-label">Performance</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value text-gradient">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="floating-element el-1 glass">
            <Code className="text-gradient" size={32} />
          </div>
          <div className="floating-element el-2 glass">
            <span className="tech-badge">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
