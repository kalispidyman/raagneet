import { ArrowRight, Sparkles, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 min-h-[80vh] flex flex-col justify-center">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-teal-300 font-medium mx-auto w-fit shadow-[0_0_15px_rgba(20,184,166,0.1)] animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,1)]" />
          Redefining Digital Excellence
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-gradient max-w-5xl mx-auto animate-fade-in-up delay-100">
          Crafting the Future of <br /> Digital Experiences
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
          Raagneet Studios delivers cutting-edge web, mobile, and AI solutions designed to elevate your brand and accelerate growth in a rapidly evolving digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up delay-300">
          <button className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary px-8 py-4 text-lg flex items-center justify-center gap-2">
            View Our Work <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Glassmorphic Feature Pills */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-500">
        {[
          { icon: <Zap className="w-4 h-4" />, text: 'Lightning Fast' },
          { icon: <Globe className="w-4 h-4" />, text: 'Global Scale' },
          { icon: <Sparkles className="w-4 h-4" />, text: 'Premium Design' }
        ].map((item, i) => (
          <div key={i} className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm text-slate-300 hover:text-teal-300 hover:border-teal-500/30 transition-all duration-300 cursor-default">
            {item.icon}
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;