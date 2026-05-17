import React from 'react';
import './Watermark.css';

const Watermark = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 mt-4 pointer-events-none select-none">
      <div className="glass-watermark pointer-events-auto px-5 py-2.5 rounded-full flex items-center gap-3">
        <span className="watermark-dot w-2 h-2 rounded-full bg-cyan-400" />
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-slate-300/90">
          Designer <span className="gradient-text font-bold">@Neet</span>
        </span>
      </div>
    </div>
  );
};

export default Watermark;