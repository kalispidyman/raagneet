import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-dark-950/80 backdrop-blur-xl">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-slate-400/80 leading-relaxed mb-6 max-w-xs">
              Building the world's most powerful AI systems and autonomous intelligence platforms.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group">
                <Github size={18} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                <Twitter size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <Linkedin size={18} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href="mailto:hello@neetai.studio"
                 className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 group">
                <Mail size={18} className="text-slate-400 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Services' },
                { to: '/technology', label: 'Technology' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 hover:text-white/90 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {[
                'AI Chatbots',
                'Autonomous Agents',
                'Neural Networks',
                'Data Analytics',
                'Cloud Infrastructure'
              ].map(service => (
                <li key={service}>
                  <span className="text-sm text-slate-400 hover:text-white/90 transition-colors duration-200 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wider uppercase">Get In Touch</h4>
            <p className="text-sm text-slate-400/80 mb-6">
              Ready to transform your business with AI? Let's build something extraordinary together.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium border border-white/10 shadow-lg shadow-indigo-600/20 transition-all duration-300 group">
              <Zap size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-mono font-medium bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Designer @NEET
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} NEET AI Studio. All rights reserved. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}