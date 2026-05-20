import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 pb-16 select-none">
      <motion.div 
        whileHover={{ 
          scale: 1.08,
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.15)",
            "0 0 50px rgba(34, 211, 238, 0.4)",
            "0 0 20px rgba(34, 211, 238, 0.15)"
          ]
        }}
        className="glass-container px-7 py-3.5 rounded-full border-white/[0.1] flex items-center gap-4 backdrop-blur-2xl shadow-2xl relative overflow-hidden group cursor-pointer"
      >
        {/* Shimmer Light Sweep */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
        />

        {/* Mouse-follow Glow Effect */}
        <motion.div 
          className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.15) 0%, transparent 60%)'
          }}
        />

        {/* Hover Border Glow Pulse */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-transparent pointer-events-none"
          whileHover={{
            borderColor: ["rgba(34,211,238,0)", "rgba(34,211,238,0.6)", "rgba(34,211,238,0)"],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="relative flex items-center gap-3">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(34,211,238,1)]" 
          />
        </div>

        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-accent-cyan/10 scale-105" />

        {/* Mouse Trail Particles on Hover */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{
            x: [0, -20, 20, 0],
            y: [-10, 10, -10],
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
        />
      </motion.div>
    </div>
  );
};

export default Watermark;