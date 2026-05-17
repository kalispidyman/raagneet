import React from 'react';
import './ArcReactorLogo.css';

const ArcReactorLogo = ({ companyName = "VIBRANIUM", size = 300 }) => {
  return (
    <div className="arc-container" style={{ '--reactor-size': `${size}px` }}>
      {/* Target for Segment 2 (Embedded CSS Stylesheet) goes right here */}
      
      {/* Reactor Hardware Stack */}
      <div className="arc-reactor">
        <div className="ring outer-ring" />
        <div className="ring middle-ring" />
        
        {/* The 10 Electromagnetic Vibranium Shunts */}
        <div className="shunts-container">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="reactor-shunt" 
              style={{ '--index': i }}
            />
          ))}
        </div>

        <div className="ring inner-ring" />
        
        {/* Central Core Chamber */}
        <div className="plasma-core">
          <div className="core-glow" />
          <div className="core-singularity" />
        </div>

        {/* Vector HUD Geometry Overlays */}
        <svg className="reactor-hud" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="45" className="hud-line hud-dashed" />
          <circle cx="100" cy="100" r="30" className="hud-line hud-solid" />
        </svg>
      </div>

      {/* Typography Module */}
      <div className="branding-container">
        <h1 className="company-title">{companyName}</h1>
        <span className="company-subtitle">ENERGY ARCHITECTURE</span>
      </div>
    </div>
  );
};

export default ArcReactorLogo;