import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass-container rounded-full px-6 py-3 flex items-center justify-between border-white/[0.08] ${
          scrolled ? 'bg-slate-900/60' : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1.5 glass-container border-accent-cyan/30 group-hover:border-accent-cyan/50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <img 
                src="/logo.png" 
                alt="RAAGNEET Logo" 
                className="w-full h-full object-contain brightness-[1.5] contrast-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
              RAAG<span className="text-accent-cyan">NEET</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent-cyan ${
                  location.pathname === link.path ? 'text-accent-cyan' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary-glass !py-2 !px-6 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-2 md:hidden"
          >
            <div className="glass-card-modern p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-accent-teal/10 text-accent-cyan' 
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span className="font-medium">{link.name}</span>
                  <ChevronRight size={18} />
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary-glass w-full text-center block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
