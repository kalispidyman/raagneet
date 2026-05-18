import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-24 pb-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <Logo className="w-14 h-14" />
              <span className="text-2xl font-black text-white tracking-tighter">
                RAAG<span className="text-accent-cyan group-hover:text-white transition-colors">NEET</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences with cutting-edge glassmorphism design and high-performance animations.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass-container flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Design', 'Development', 'Branding', 'UI/UX Design', 'Consultancy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe for the latest updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-teal/50 transition-colors pr-12"
              />
              <button className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-accent-teal flex items-center justify-center text-white hover:bg-accent-teal/80 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} RAAGNEET. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
