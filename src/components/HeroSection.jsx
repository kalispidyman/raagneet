import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
        Build the Future
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Experience a premium, ultra-modern interface designed for performance, clarity, and seamless interaction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transition-all duration-300 ease-out">
          Get Started
        </button>
        <button className="px-8 py-4 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-slate-300 font-medium hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 ease-out">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;