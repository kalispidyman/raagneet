import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Background Aura */}
      <div className="absolute inset-0 bg-accent-cyan/20 blur-xl rounded-full group-hover:bg-accent-cyan/40 transition-colors duration-500" />
      
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      >
        {/* Hexagonal Frame */}
        <path 
          d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z" 
          stroke="url(#logo-gradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-[pulse_4s_infinite]"
        />
        
        {/* Stylized 'R' */}
        <path 
          d="M35 30V70M35 30H55C62 30 65 35 65 40C65 45 62 50 55 50H35M50 50L65 70" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Glow Dots */}
        <circle cx="50" cy="95" r="3" fill="#22d3ee" className="animate-ping" />
        <circle cx="89.5" cy="27.5" r="2" fill="#7c3aed" />
        <circle cx="10.5" cy="27.5" r="2" fill="#7c3aed" />

        <defs>
          <linearGradient id="logo-gradient" x1="10.5" y1="5" x2="89.5" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#0d9488" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
