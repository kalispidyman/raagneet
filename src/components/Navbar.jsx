import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-[#0B0F19]/70 backdrop-blur-xl border-b border-white/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
            Nexa<span className="text-cyan-400">Glass</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                {link.name}
              </Link>
            ))}
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transition-all duration-300 ease-out">
              Get Started
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}