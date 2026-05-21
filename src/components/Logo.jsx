import React from 'react';

export default function Logo({ size = 'md', animated = true }) {
  const dimensions = {
    sm: { box: 36, icon: 20, font: '0.98rem' },
    md: { box: 46, icon: 26, font: '1.2rem' },
    lg: { box: 68, icon: 38, font: '1.75rem' }
  };

  const current = dimensions[size] || dimensions.md;

  return (
    <div className={`logo-container size-${size} ${animated ? 'animated' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div className="logo-icon-wrapper" style={{
        position: 'relative',
        width: current.box,
        height: current.box,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.04) 100%)',
        border: '1.5px solid rgba(99, 102, 241, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.15), inset 0 0 8px rgba(6, 182, 212, 0.1)',
        overflow: 'visible'
      }}>
        {/* Interactive radial hover glow */}
        <div className="logo-glow-overlay" />

        {/* High performance vector cyber core */}
        <svg 
          width={current.icon} 
          height={current.icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="cyberIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="neonPink" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <filter id="neonGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer constellation ring - clockwise rotation */}
          <circle 
            cx="50" 
            cy="50" 
            r="42" 
            stroke="url(#cyberIndigo)" 
            strokeWidth="3.5" 
            strokeDasharray="14 10" 
            className="logo-ring-outer-svg" 
          />

          {/* Middle tactical segment - counter-clockwise rotation */}
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            stroke="url(#neonPink)" 
            strokeWidth="4" 
            strokeDasharray="30 20" 
            className="logo-ring-mid-svg" 
          />

          {/* Hyper-glowing central agent core */}
          <polygon 
            points="50,28 68,62 32,62" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="5" 
            strokeLinejoin="round" 
            className="logo-poly-core" 
            filter="url(#neonGlow)"
          />

          {/* Center singularity point */}
          <circle cx="50" cy="50" r="5.5" fill="#ffffff" filter="url(#neonGlow)" />
        </svg>
      </div>
      
      <span className="logo-text" style={{ 
        fontFamily: "var(--ffd)", 
        fontWeight: 900, 
        fontSize: current.font, 
        letterSpacing: '-0.02em',
        color: '#f1f5f9',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        <span style={{ 
          background: 'linear-gradient(135deg, #a5b4fc, #c4b5fd, #22d3ee)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontWeight: 900
        }}>NEET</span> 
        <span style={{ 
          color: '#94a3b8', 
          fontWeight: 500,
          borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
          paddingLeft: '8px',
          marginLeft: '4px',
          fontSize: '0.85em',
          letterSpacing: '0.02em'
        }}>AI Studio</span>
      </span>
    </div>
  );
}