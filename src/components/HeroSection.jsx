import { ArrowRight, Sparkles, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] w-full flex flex-col justify-center relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-32 max-w-7xl mx-auto">
      <div className="w-full space-y-6 sm:space-y-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-teal-300 font-medium mx-auto w-fit shadow-[0_0_15px_rgba(20,184,166,0.1)] animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 animate-pulse" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,1)]" />
          <span className="truncate">Redefining Digital Excellence</span>
        </div>
        
        {/* Heading - Full width, optimized for mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-[1.1] text-gradient max-w-full sm:max-w-5xl mx-auto animate-fade-in-up delay-100 px-2 sm:px-0">
          Crafting the Future of <br className="hidden sm:block" /> Digital Experiences
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-full sm:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed px-2 sm:px-0">
          Raagneet Studios delivers cutting-edge web, mobile, and AI solutions designed to elevate your brand and accelerate growth.
        </p>
        
        {/* Buttons - Full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 animate-fade-in-up delay-300 w-full sm:w-auto">
          <button className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-2">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-2">
            View Our Work <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Glassmorphic Feature Pills - Full width wrapping */}
      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-2 sm:gap-4 animate-fade-in-up delay-500 w-full px-2 sm:px-0">
        {[
          { icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: 'Lightning Fast' },
          { icon: <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: 'Global Scale' },
          { icon: <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: 'Premium Design' }
        ].map((item, i) => (
          <div key={i} className="flex-1 sm:flex-none glass-panel px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-teal-300 hover:border-teal-500/30 transition-all duration-300 cursor-default min-w-[110px] sm:min-w-0">
            {item.icon}
            <span className="truncate">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;