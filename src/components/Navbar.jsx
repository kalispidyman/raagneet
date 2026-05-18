import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArcReactorLogo from './ArcReactorLogo';

const Navbar = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F19]/60 backdrop-blur-xl border-b border-white/[0.08]' : 'bg-transparent'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group overflow-visible">
            <div className="group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <ArcReactorLogo companyName="RAAGNEET" size={26} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                    location.pathname === link.path 
                      ? 'text-white bg-white/[0.08] shadow-inner' 
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"></span>
                  )}
                </Link>
              ))}
            </div>
            <button 
              onClick={onGetStarted} 
              className="btn-primary-glass !py-2.5 !px-6 text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
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
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 glass-card-modern !bg-dark-950/90 !backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`w-full py-3 text-center rounded-xl transition-all ${
                  location.pathname === link.path 
                    ? 'text-white bg-white/[0.08] border border-white/[0.08]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => { onGetStarted(); setIsOpen(false); }} 
              className="btn-primary-glass w-full mt-4"
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