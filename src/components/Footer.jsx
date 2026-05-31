import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const sparkContainerRef = useRef(null);

  const handleSparkClick = useCallback((e) => {
    const container = sparkContainerRef.current;
    if (!container) return;

    // Get click/touch position relative to container
    const rect = container.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

    // Create multiple spark particles
    const colors = ['#22d3ee', '#a855f7', '#f43f5e', '#6366f1', '#34d399', '#fbbf24'];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
      const spark = document.createElement('div');
      const size = Math.random() * 6 + 3;
      const angle = (Math.PI * 2 / particleCount) * i + (Math.random() - 0.5) * 0.5;
      const velocity = Math.random() * 80 + 40;
      const color = colors[Math.floor(Math.random() * colors.length)];

      spark.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        pointer-events: none;
        z-index: 50;
        box-shadow: 0 0 6px ${color}, 0 0 12px ${color}66;
        transition: none;
      `;

      container.appendChild(spark);

      // Animate outward with requestAnimationFrame
      let startTime = null;
      const duration = 600 + Math.random() * 200;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        const currentX = x + Math.cos(angle) * velocity * eased;
        const currentY = y + Math.sin(angle) * velocity * eased - (velocity * 0.3 * eased); // slight upward arc
        const opacity = 1 - eased;
        const scale = 1 - eased * 0.5;

        spark.style.transform = `translate(${currentX - x}px, ${currentY - y}px) scale(${scale})`;
        spark.style.opacity = opacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          spark.remove();
        }
      };

      requestAnimationFrame(animate);
    }

    // Also add a radial burst glow effect
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: absolute;
      left: ${x - 30}px;
      top: ${y - 30}px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%);
      pointer-events: none;
      z-index: 49;
      transition: all 0.5s ease-out;
    `;
    container.appendChild(burst);
    requestAnimationFrame(() => {
      burst.style.transform = 'scale(3)';
      burst.style.opacity = '0';
    });
    setTimeout(() => burst.remove(), 500);
  }, []);

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
          <div 
            ref={sparkContainerRef}
            onClick={handleSparkClick}
            onTouchStart={handleSparkClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer select-none active:scale-95 transition-transform duration-150 hover:bg-white/[0.08]"
          >
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