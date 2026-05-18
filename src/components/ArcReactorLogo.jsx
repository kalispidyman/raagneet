import React from 'react';
import './ArcReactorLogo.css';

const ArcReactorLogo = ({ companyName = "RAAGNEET", size = 300 }) => {
  return (
    <div className="logo-container" style={{ '--logo-size': `${size}px` }}>
      <div className="nexus-core">
        {/* Geometric Outer Frame */}
        <div className="nexus-frame">
          <div className="frame-inner" />
        </div>
        
        {/* Inner Geometric "R" Element */}
        <div className="nexus-geometry">
          <svg viewBox="0 0 100 100" className="r-shape">
            <path 
              d="M30 20 H55 C70 20 70 45 55 45 H30 V80 M30 45 L65 80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Central Pulsing Nexus */}
        <div className="nexus-point">
          <div className="point-glow" />
          <div className="point-core" />
        </div>

        {/* Particle Ring */}
        <div className="particle-ring">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="nexus-branding">
        <h1 className="nexus-title">{companyName}</h1>
        <div className="nexus-accent-line" />
        <span className="nexus-subtitle">SYSTEMS</span>
      </div>
    </div>
  );
};

export default ArcReactorLogo;