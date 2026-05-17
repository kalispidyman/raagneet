export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">Nexa<span className="text-cyan-400">Glass</span></h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Pioneering the future of UI design with premium glassmorphism aesthetics and high-performance engineering.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">About</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Services</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NexaGlass. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}