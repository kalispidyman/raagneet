import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/[0.08] bg-[#0B0F19]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-teal to-accent-cyan flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(13,148,136,0.3)] group-hover:scale-110 transition-transform duration-500">
                R
              </div>
              <span className="text-2xl font-black text-white tracking-tight group-hover:text-accent-cyan transition-colors">Raagneet Studios</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Crafting premium digital experiences that merge aesthetics, performance, and innovation.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Github size={20} />, label: 'Github' },
                { icon: <Linkedin size={20} />, label: 'Linkedin' },
                { icon: <Instagram size={20} />, label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:bg-accent-teal/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link === 'Home' ? '' : link.toLowerCase()}`} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Raagneet Studios. All rights reserved.</p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-slate-500 text-sm">
            <span>Designed with</span>
            <span className="text-accent-teal animate-pulse">✦</span>
            <span>by Raagneet Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;