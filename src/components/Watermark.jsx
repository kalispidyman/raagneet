import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 pb-12 select-none">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glass-container px-6 py-3 rounded-full border-white/[0.08] flex items-center gap-3 backdrop-blur-xl shadow-2xl"
      >
        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-slate-400">
          Designer <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">@NEET</span>
        </span>
      </motion.div>
    </div>
  );
};

export default Watermark;
