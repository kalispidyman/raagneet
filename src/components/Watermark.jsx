import React from 'react';
import './Watermark.css';

const Watermark = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] pointer-events-none select-none">
      <div className="glass-watermark pointer-events-auto px-4 py-2.5 rounded-full flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-slate-400/80">
          Designed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-bold">@Neet</span>
        </span>
      </div>
    </div>
  );
};

export default Watermark;