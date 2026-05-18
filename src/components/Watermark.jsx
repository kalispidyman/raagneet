import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-6 left-6 z-[100] pointer-events-none select-none"
    >
      <div className="glass-container px-4 py-2 rounded-full border-white/[0.05] flex items-center gap-3 backdrop-blur-md shadow-2xl">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
          Designer <span className="text-white">@NEET</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Watermark;
