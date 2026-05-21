import React from 'react';

export default function Logo({ size = 'md', animated = true }) {
  const dimensions = {
    sm: { box: 34, icon: 16, font: '0.95rem' },
    md: { box: 42, icon: 20, font: '1.15rem' },
    lg: { box: 64, icon: 30, font: '1.65rem' }
  };

  const current = dimensions[size] || dimensions.md;

  return (
    <div className={`logo-container size-${size} ${animated ? 'animated' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div className="logo-icon-wrapper" style={{
        position: 'relative',
        width: current.box,
        height: current.box,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(99,102,241,0.3)',
        overflow: 'hidden'
      }}>
        {/* Glowing sweep overlay */}
        <div className="logo-glow-overlay" />
        
        {/* Animated outer dashed ring */}
        <div className="logo-outer-ring" />

        {/* Center custom symbol: N-Core styled with a high-intensity cyan node */}
        <div className="logo-center-symbol" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={current.icon} height={current.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4V20L12 11.5L18 20V4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="11.5" r="2.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      
      <span className="logo-text" style={{ 
        fontFamily: "var(--ffd)", 
        fontWeight: 900, 
        fontSize: current.font, 
        letterSpacing: '-0.02em',
        color: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        <span style={{ 
          background: 'linear-gradient(135deg, #a5b4fc, #c4b5fd)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontWeight: 900
        }}>NEET</span> 
        <span style={{ color: '#f1f5f9', fontWeight: 500 }}>AI Studio</span>
      </span>
    </div>
  );
}