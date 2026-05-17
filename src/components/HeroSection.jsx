import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm text-sm text-slate-300 mb-4 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse" />
            Crafting Digital Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-gradient">Elevate Your</span>
            <br />
            <span className="text-gradient-accent">Digital Presence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Raagneet studios transforms ideas into stunning digital experiences. 
            We blend cutting-edge technology with premium design to build websites and applications that captivate and convert.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/portfolio" className="btn-primary px-8 py-4 text-base w-full sm:w-auto">
              View Our Work
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-base w-full sm:w-auto">
              Start a Project
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '3+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-panel p-4 md:p-6 text-center hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-1">{stat.number}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}