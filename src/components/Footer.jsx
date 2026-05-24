import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#050510]/80 backdrop-blur-xl overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div className="lg:col-span-5 flex flex-col gap-6" variants={itemVariants}>
            <Logo size="md" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
              We build AI-powered systems and premium digital experiences that drive real business growth. Crafting the future, one line of code at a time.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:hello@neetai.studio" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                  <Mail size={14} className="text-indigo-400" />
                </div>
                hello@neetai.studio
              </a>
              <a href="tel:+919876543210" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                  <Phone size={14} className="text-indigo-400" />
                </div>
                +91 98765 43210
              </a>
              <div className="group flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={14} className="text-indigo-400" />
                </div>
                Indore, India
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/products' },
                { label: 'Technology', to: '/technology' },
                { label: 'Contact', to: '/contact' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.to} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'AI Development', to: '/products' },
                { label: 'Web Applications', to: '/products' },
                { label: 'Automation Systems', to: '/products' },
                { label: '3D Experiences', to: '/products' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.to} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Get Started</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Free Consultation', to: '/contact' },
                { label: 'Get a Quote', to: '/contact' },
                { label: 'View Pricing', to: '/products' },
                { label: 'Our Process', to: '/about' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.to} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6" variants={itemVariants}>
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} NEET AI Studio. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <p>Crafted with precision in India</p>
          </div>

          {/* Designer Badge */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-xs font-mono font-medium bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Designer @NEEt
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}