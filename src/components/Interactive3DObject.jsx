import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Interactive3DObject = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 80, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 2;
      const yPct = (clientY / innerHeight - 0.5) * 2;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Transform mouse movement into 3D rotations
  const rotateX = useTransform(mouseY, [-1, 1], [30, -30]);
  const rotateY = useTransform(mouseX, [-1, 1], [-30, 30]);

  // Dynamic light position based on mouse
  const lightX = useTransform(mouseX, [-1, 1], [-100, 100]);
  const lightY = useTransform(mouseY, [-1, 1], [-100, 100]);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] hidden lg:flex items-center justify-center pointer-events-none perspective-[2000px]">
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[600px] h-[600px] flex items-center justify-center"
      >
        {/* --- GLOBAL LIGHTING ENVIRONMENT --- */}
        {/* Main Ambient Glow */}
        <div className="absolute w-[500px] h-[500px] bg-accent-teal/10 blur-[150px] rounded-full mix-blend-screen" />
        
        {/* Dynamic Light Source (follows mouse slightly) */}
        <motion.div 
          style={{ x: lightX, y: lightY, translateZ: 300 }}
          className="absolute w-64 h-64 bg-accent-cyan/20 blur-[120px] rounded-full mix-blend-plus-lighter" 
        />

        {/* --- CENTRAL ARC CORE --- */}
        <motion.div 
           style={{ translateZ: 150 }}
           className="absolute w-64 h-64 rounded-[2.5rem] glass-card-modern bg-slate-900/40 border-accent-teal/40 shadow-[0_0_80px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden"
        >
          {/* Internal Energy Swirl */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-teal/20 via-transparent to-transparent opacity-60" />
          
          {/* Primary Glow Core */}
          <div className="absolute w-32 h-32 bg-accent-cyan/40 blur-[40px] rounded-full animate-pulse" />
          
          {/* Rotating Mechanical Parts */}
          <div className="relative w-40 h-40 rounded-full border-2 border-accent-cyan/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1.5 h-6 bg-gradient-to-t from-accent-cyan to-white/80 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                style={{ transform: `rotate(${i * 30}deg) translateY(-65px)` }}
              />
            ))}
          </div>

          <div className="absolute relative w-20 h-20 rounded-full border border-accent-purple/30 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
             <div className="w-full h-0.5 bg-accent-purple/40 blur-[1px]" />
          </div>

          {/* Super Bright Center */}
          <div className="absolute w-12 h-12 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.8),0_0_70px_rgba(34,211,238,0.6)] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-4 border-accent-cyan animate-ping opacity-50" />
            <div className="absolute inset-0 bg-white rounded-full blur-[4px]" />
          </div>
        </motion.div>

        {/* --- ORBITING ENERGY RINGS --- */}
        <motion.div 
           style={{ translateZ: 100, rotateX: 75 }}
           className="absolute w-[500px] h-[500px] rounded-full border-[3px] border-accent-cyan/20 shadow-[0_0_30px_rgba(34,211,238,0.1),inset_0_0_30px_rgba(34,211,238,0.1)]"
        />
        
        <motion.div 
           style={{ translateZ: -50, rotateY: 85 }}
           className="absolute w-[550px] h-[550px] rounded-full border border-accent-purple/20"
        />

        {/* --- FLOATING HIGH-LIGHT PANELS --- */}
        {/* Top-Left Glass */}
        <motion.div 
          style={{ translateZ: 250, x: -180, y: -150, rotateZ: -15 }}
          className="absolute w-44 h-64 glass-card-modern bg-white/[0.05] border-white/[0.2] rounded-3xl backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Specular Highlight */}
          <motion.div 
            animate={{ x: [-100, 200], y: [-100, 300] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent rotate-45"
          />
          <div className="absolute bottom-4 left-4 w-12 h-1 bg-accent-cyan/50 rounded-full" />
        </motion.div>
        
        {/* Bottom-Right Glass */}
        <motion.div 
          style={{ translateZ: 120, x: 220, y: 140, rotateZ: 20 }}
          className="absolute w-36 h-36 glass-card-modern bg-accent-purple/10 border-accent-purple/30 rounded-[2rem] backdrop-blur-2xl shadow-2xl flex items-center justify-center"
        >
          <div className="w-16 h-16 border-2 border-accent-purple/40 rounded-full border-t-transparent animate-spin" />
        </motion.div>

        {/* Small UI HUD Element */}
        <motion.div 
          style={{ translateZ: 300, x: 100, y: -200 }}
          className="absolute glass-container px-4 py-2 rounded-xl border-accent-cyan/30 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]" />
          <span className="text-[10px] font-black tracking-widest text-accent-cyan/80 uppercase">CORE_STABLE</span>
        </motion.div>

        {/* --- ENERGY PARTICLES (BRIGHTER) --- */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            style={{ 
              translateZ: Math.random() * 400 - 100,
              x: Math.random() * 500 - 250,
              y: Math.random() * 500 - 250,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] blur-[1px] mix-blend-plus-lighter"
          />
        ))}

        {/* Energy Strings / Rays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute w-[1px] h-[800px] bg-gradient-to-b from-transparent via-accent-cyan to-transparent rotate-45 animate-pulse" />
           <div className="absolute w-[1px] h-[800px] bg-gradient-to-b from-transparent via-accent-purple to-transparent -rotate-45 animate-pulse delay-700" />
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DObject;
