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
    <nav className="fixed w-full top-0 z-50 glass-panel border-x-0 border-t-0 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
              <ArcReactorLogo companyName="RAAGNEET" size={44} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-teal-400 relative group ${
                  location.pathname === link.path ? 'text-teal-400' : 'text-slate-300'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'group-hover:w-full'}`} />
              </Link>
            ))}
            <button onClick={onGetStarted} className="btn-primary ml-4">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-3 glass-panel rounded-b-xl border-t-0 bg-[#0B1120]/90 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                location.pathname === link.path ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-white/5 hover:text-teal-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => { onGetStarted(); setIsOpen(false); }} className="w-full btn-primary py-3 mt-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;