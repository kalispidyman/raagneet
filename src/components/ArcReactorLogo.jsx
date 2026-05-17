import React from 'react';
import './ArcReactorLogo.css';

const ArcReactorLogo = ({ companyName = "RAAGNEET", size = 300 }) => {
  return (
    <div className="arc-container" style={{ '--reactor-size': `${size}px` }}>
      <div className="arc-reactor">
        {/* Outer Metallic Housing */}
        <div className="housing-outer" />
        
        {/* Rotating Energy Conduits */}
        <div className="energy-ring">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="energy-segment" style={{ '--i': i }} />
          ))}
        </div>

        {/* Central Glowing Core */}
        <div className="core-chamber">
          <div className="core-glow" />
          <div className="core-light" />
          <div className="core-shard" />
        </div>

        {/* Holographic HUD Overlays */}
        <svg className="hud-overlay" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="92" className="hud-ring" />
          <circle cx="100" cy="100" r="82" className="hud-ring hud-dashed" />
        </svg>
      </div>

      <div className="branding-container">
        <h1 className="company-title">{companyName}</h1>
        <span className="company-subtitle">ADVANCED SYSTEMS</span>
      </div>
    </div>
  );
};

export default ArcReactorLogo;