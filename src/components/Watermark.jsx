import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 mt-4 pointer-events-none select-none">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-container px-5 py-2.5 rounded-full border-white/[0.05] flex items-center gap-3 backdrop-blur-md shadow-lg"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500/80">
          Designer <span className="text-slate-300">@NEET</span>
        </span>
      </motion.div>
    </div>
  );
};

export default Watermark;
