import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArcReactorLogo from './ArcReactorLogo';

const Navbar = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border-b border-white/[0.08]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <div className="group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
              <ArcReactorLogo companyName="RAAGNEET" size={36} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 blur-sm opacity-60 rounded-full"></span>
                )}
              </Link>
            ))}
            <button onClick={onGetStarted} className="btn-primary ml-4">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors relative z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 animate-fade-in-up shadow-2xl">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => { onGetStarted(); setIsOpen(false); }} 
              className="btn-primary w-full mt-4 py-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;