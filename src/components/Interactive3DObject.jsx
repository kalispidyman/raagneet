import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Interactive3DObject = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

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
  const rotateX = useTransform(mouseY, [-1, 1], [25, -25]);
  const rotateY = useTransform(mouseX, [-1, 1], [-25, 25]);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] hidden lg:flex items-center justify-center pointer-events-none perspective-[1500px]">
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[500px] h-[500px] flex items-center justify-center"
      >
        {/* Core Glow */}
        <div className="absolute w-64 h-64 bg-accent-teal/20 blur-[100px] rounded-full" />

        {/* Main Central Core - Arc Reactor Style */}
        <motion.div 
           style={{ translateZ: 120 }}
           className="absolute w-56 h-56 rounded-3xl glass-card-modern bg-slate-900/60 border-accent-teal/30 shadow-[0_0_50px_rgba(13,148,136,0.2)] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 to-transparent" />
          <div className="relative w-32 h-32 rounded-full border border-accent-cyan/20 flex items-center justify-center animate-[spin_15s_linear_infinite]">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-4 bg-accent-cyan/40 rounded-full" 
                style={{ transform: `rotate(${i * 45}deg) translateY(-50px)` }}
              />
            ))}
          </div>
          <div className="absolute w-16 h-16 rounded-full bg-accent-teal shadow-[0_0_30px_rgba(13,148,136,0.6)] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-white/20 animate-ping" />
          </div>
        </motion.div>

        {/* Floating Glass Panels at different depths */}
        <motion.div 
          style={{ translateZ: 200, x: -140, y: -120, rotateZ: -10 }}
          className="absolute w-40 h-56 glass-card-modern bg-white/[0.03] border-white/[0.1] rounded-2xl backdrop-blur-2xl shadow-2xl"
        />
        
        <motion.div 
          style={{ translateZ: 80, x: 180, y: 100, rotateZ: 15 }}
          className="absolute w-32 h-32 glass-card-modern bg-accent-purple/5 border-accent-purple/20 rounded-full backdrop-blur-xl"
        />

        <motion.div 
          style={{ translateZ: 250, x: 60, y: -180, rotateZ: 5 }}
          className="absolute w-20 h-20 glass-card-modern bg-accent-cyan/5 border-accent-cyan/20 rounded-xl flex items-center justify-center"
        >
          <div className="w-10 h-10 border border-white/10 rounded-lg animate-spin" />
        </motion.div>

        {/* Orbiting Rings */}
        <motion.div 
           style={{ translateZ: 50, rotateX: 70 }}
           className="absolute w-[450px] h-[450px] rounded-full border border-white/10 glass-container"
        />
        
        <motion.div 
           style={{ translateZ: -100, rotateY: 80 }}
           className="absolute w-[500px] h-[500px] rounded-full border border-white/5 glass-container"
        />

        {/* Background Depth Elements */}
        <motion.div 
          style={{ translateZ: -200, x: 120, y: -60 }}
          className="absolute w-48 h-48 glass-card-modern bg-white/[0.01] border-white/[0.05] rounded-[3rem] blur-sm"
        />

        {/* Floating Particles (Small Dots) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{ 
              translateZ: Math.random() * 300 - 100,
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 bg-accent-cyan/40 rounded-full blur-[1px]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Interactive3DObject;
