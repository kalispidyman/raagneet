import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 pb-16 select-none">
      <motion.div 
        animate={{ 
          y: [0, -8, 0],
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.1)",
            "0 0 40px rgba(34, 211, 238, 0.3)",
            "0 0 20px rgba(34, 211, 238, 0.1)"
          ]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="glass-container px-7 py-3.5 rounded-full border-white/[0.1] flex items-center gap-4 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
      >
        {/* Shimmer Light Sweep */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
        />

        <div className="relative flex items-center gap-3">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(34,211,238,1)]" 
          />
          
          <span className="text-[12px] font-bold tracking-[0.5em] uppercase flex items-center">
            <span className="text-slate-500">Designer</span>
            <motion.span 
              animate={{ 
                color: ["#cbd5e1", "#ffffff", "#22d3ee", "#ffffff", "#cbd5e1"],
                textShadow: [
                  "0 0 0px rgba(34, 211, 238, 0)",
                  "0 0 10px rgba(34, 211, 238, 0.5)",
                  "0 0 20px rgba(34, 211, 238, 0.8)",
                  "0 0 10px rgba(34, 211, 238, 0.5)",
                  "0 0 0px rgba(34, 211, 238, 0)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="ml-3 font-black"
            >
              @NEET
            </motion.span>
          </span>
        </div>

        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-accent-cyan/10 scale-105" />
      </motion.div>
    </div>
  );
};

export default Watermark;
