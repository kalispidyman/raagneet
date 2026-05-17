import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto p-4 rounded-2xl bg-[#0B0F19]/70 backdrop-blur-xl border border-white/[0.08] shadow-lg flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
          Glass<span className="text-cyan-400">UI</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.page)}
              className="text-slate-300 hover:text-white font-medium transition-colors duration-300 text-sm tracking-wide hover:bg-white/5 px-3 py-1 rounded-lg"
            >
              {link.name}
            </button>
          ))}
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-medium shadow-[0_0_15px_rgba(13,148,136,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(13,148,136,0.5)] transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-[#0B0F19]/95 backdrop-blur-xl border border-white/[0.08] md:hidden flex flex-col gap-4 shadow-2xl z-50">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.page)}
              className="text-left text-slate-300 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium shadow-[0_0_15px_rgba(13,148,136,0.3)] hover:scale-[1.02] transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;