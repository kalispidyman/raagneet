import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-nav mt-auto border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-gradient mb-4">BRAND</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Crafting premium digital experiences with modern aesthetics and cutting-edge technology.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] mt-10 pt-6 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Premium Glassmorphism Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;