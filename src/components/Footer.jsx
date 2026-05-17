import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 px-6 py-8 border-t border-white/[0.05] bg-[#0B0F19]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white tracking-tight">
          Glass<span className="text-cyan-400">UI</span>
        </div>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Premium Glassmorphism Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;