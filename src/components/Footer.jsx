import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <span className="text-xl font-bold text-white tracking-wide">Raagneet Studios</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Crafting premium digital experiences that merge aesthetics, performance, and innovation.
            </p>
            <div className="flex gap-4">
              {['twitter', 'github', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500/20 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="text-slate-400 hover:text-teal-400 transition-colors duration-200">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Raagneet Studios. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Designed & Developed with 💎</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;