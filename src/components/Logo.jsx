import React from 'react';

const Logo = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Background Luminous Aura - intensified for visibility */}
      <div className="absolute inset-0 bg-accent-cyan/30 blur-2xl rounded-full group-hover:bg-accent-cyan/50 transition-all duration-500 scale-110" />
      
      {/* Outer Rotating Energy Ring */}
      <div className="absolute inset-[-4px] rounded-2xl border border-accent-cyan/20 animate-[spin_10s_linear_infinite] opacity-50" />
      
      {/* Inner Glowing Hexagon Frame */}
      <div className="absolute inset-0 glass-container border-accent-cyan/40 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-purple/10" />
      </div>

      {/* The Scorpion Logo - Processed for maximum visibility */}
      <div className="relative z-10 w-full h-full p-1.5 flex items-center justify-center">
        <img 
          src="/logo.png" 
          alt="RAAGNEET Scorpion Logo" 
          className="w-full h-full object-contain brightness-[1.8] contrast-[1.2] invert drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]"
        />
      </div>

      {/* Decorative Glow Dots at corners */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent-purple rounded-full animate-pulse shadow-[0_0_10px_rgba(124,58,237,1)]" />
    </div>
  );
};

export default Logo;
