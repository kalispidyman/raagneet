import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-24 pb-12 border-t border-white/[0.05] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand - Centered on mobile */}
          <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-4 group">
              <Logo className="w-14 h-14" />
              <span className="text-2xl font-black text-white tracking-tighter">
                RAAG<span className="text-accent-cyan group-hover:text-white transition-colors">NEET</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences with cutting-edge glassmorphism design and high-performance animations.
            </p>
            <div className="flex gap-5">
              {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-11 h-11 rounded-xl glass-container flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links & Services - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-2 lg:col-span-2">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="text-slate-400 text-sm hover:text-accent-cyan transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Services</h4>
              <ul className="space-y-4">
                {['Web Design', 'Development', 'Branding', 'UI/UX Design', 'Consultancy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-accent-cyan transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Centered on mobile */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Stay updated with our latest insights.</p>
            <div className="relative max-w-sm mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] transition-all pr-14"
              />
              <button className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-accent-teal flex items-center justify-center text-white hover:bg-accent-teal/80 transition-colors shadow-lg shadow-accent-teal/20">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-slate-500 text-xs font-medium tracking-wider">
            © {new Date().getFullYear()} RAAGNEET STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
