import React, { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Interactive3DObject = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ultra-smooth spring configuration for a "heavy/premium" feel
  const springConfig = { stiffness: 60, damping: 20, mass: 1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

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

  // Layered Parallax: Different speeds for different depths
  const rotateX = useTransform(mouseY, [-1, 1], [35, -35]);
  const rotateY = useTransform(mouseX, [-1, 1], [-35, 35]);
  
  const innerRotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const innerRotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  const driftX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const driftY = useTransform(mouseY, [-1, 1], [-40, 40]);

  // Specular light follow
  const lightShiftX = useTransform(mouseX, [-1, 1], [-150, 150]);
  const lightShiftY = useTransform(mouseY, [-1, 1], [-150, 150]);

  // Particle data
  const particles = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 600 - 300,
    y: Math.random() * 600 - 300,
    z: Math.random() * 400 - 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2
  })), []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[900px] hidden lg:flex items-center justify-center pointer-events-none perspective-[2500px]">
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[700px] h-[700px] flex items-center justify-center"
      >
        {/* --- ATMOSPHERIC LAYERS --- */}
        {/* Massive Ambient Volumetric Glow */}
        <div className="absolute w-[600px] h-[600px] bg-accent-teal/5 blur-[180px] rounded-full mix-blend-screen" />
        <motion.div 
          style={{ x: lightShiftX, y: lightShiftY, translateZ: 400 }}
          className="absolute w-80 h-80 bg-accent-cyan/15 blur-[140px] rounded-full mix-blend-plus-lighter" 
        />

        {/* --- THE QUANTUM CORE ASSEMBLY --- */}
        {/* Central Pulsing Singularity */}
        <motion.div 
           style={{ translateZ: 200, rotateX: innerRotateX, rotateY: innerRotateY }}
           className="absolute w-72 h-72 flex items-center justify-center"
        >
          {/* Core Structure */}
          <div className="absolute inset-0 glass-container bg-slate-950/80 border-accent-teal/50 rounded-[3rem] shadow-[0_0_100px_rgba(34,211,238,0.4)]" />
          
          {/* Internal Plasma Sphere */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-40 h-40 bg-accent-cyan/30 blur-[40px] rounded-full"
          />

          {/* Precision Mechanical Rings */}
          <div className="relative w-48 h-48 rounded-full border border-accent-cyan/20 animate-[spin_30s_linear_infinite]">
             {[...Array(24)].map((_, i) => (
               <div key={i} className="absolute w-[2px] h-4 bg-accent-cyan/60" style={{ transform: `rotate(${i * 15}deg) translateY(-85px)` }} />
             ))}
          </div>

          <div className="absolute w-56 h-56 rounded-full border-[0.5px] border-accent-purple/30 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Core Heart */}
          <div className="absolute w-16 h-16 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.9),0_0_100px_rgba(34,211,238,0.7)] flex items-center justify-center">
             <div className="absolute inset-0 bg-white rounded-full blur-[8px]" />
             <div className="relative z-10 w-8 h-8 rounded-full border-2 border-accent-cyan animate-ping" />
          </div>
        </motion.div>

        {/* --- GEOMETRIC SHARDS (PARALLAX) --- */}
        {/* Shard 1: Top Left - Precision Glass */}
        <motion.div 
          style={{ translateZ: 450, x: -220, y: -180, rotateZ: -25 }}
          className="absolute w-40 h-72 glass-card-modern bg-white/[0.04] border-white/[0.2] rounded-[2rem] backdrop-blur-3xl overflow-hidden shadow-2xl"
        >
          <motion.div 
            animate={{ y: [-200, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent skew-y-12"
          />
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-accent-cyan/50" />
        </motion.div>

        {/* Shard 2: Bottom Right - Data Crystal */}
        <motion.div 
          style={{ translateZ: 100, x: 260, y: 180, rotateZ: 15 }}
          className="absolute w-48 h-48 glass-card-modern bg-accent-purple/10 border-accent-purple/30 rounded-[3rem] backdrop-blur-2xl flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-accent-purple/20 rounded-full animate-pulse flex items-center justify-center">
             <div className="w-12 h-12 bg-accent-purple/40 blur-[20px] rounded-full" />
          </div>
        </motion.div>

        {/* Shard 3: Floating Hud Panel */}
        <motion.div 
          style={{ translateZ: 500, x: 180, y: -220 }}
          className="absolute glass-container px-6 py-3 rounded-2xl border-accent-cyan/40 backdrop-blur-xl flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
             <span className="text-[10px] font-bold tracking-[3px] text-white">NEURAL_SYNC_ACTIVE</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
               animate={{ width: ["0%", "100%", "0%"] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="h-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,1)]"
             />
          </div>
        </motion.div>

        {/* --- ENERGY ORBITS --- */}
        <motion.div 
           style={{ translateZ: 150, rotateX: 80, rotateY: innerRotateY }}
           className="absolute w-[600px] h-[600px] rounded-full border border-white/10 shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]"
        />
        <motion.div 
           style={{ translateZ: -100, rotateY: 75, rotateX: innerRotateX }}
           className="absolute w-[650px] h-[650px] rounded-full border border-accent-cyan/5"
        />

        {/* --- MAGNETIC PARTICLE SYSTEM --- */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{ 
              translateZ: p.z,
              x: p.x,
              y: p.y,
            }}
            animate={{
              x: [p.x, p.x + (Math.random() * 40 - 20), p.x],
              y: [p.y, p.y + (Math.random() * 40 - 20), p.y],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay
            }}
            className="absolute rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)] mix-blend-screen"
            style={{ width: p.size, height: p.size }}
          />
        ))}

        {/* Cursor Attractor Light */}
        <motion.div 
          style={{ 
            x: driftX, 
            y: driftY, 
            translateZ: 600,
          }}
          className="absolute w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_20px_rgba(255,255,255,1)] opacity-40"
        />

        {/* Energy Conduits (Faint Rays) */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
           {[...Array(6)].map((_, i) => (
             <div 
               key={i} 
               className="absolute w-[1px] h-[1000px] bg-gradient-to-b from-transparent via-accent-cyan to-transparent" 
               style={{ transform: `rotate(${i * 30}deg)` }}
             />
           ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DObject;
