import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, ctaText = "Get Started", ctaLink = "/contact" }) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient-bg text-white px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm animate-fade-in">
          Welcome to Our Agency
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-glow animate-slide-up">
          {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
          We craft beautiful, high-performance digital experiences that drive growth and captivate audiences worldwide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-300">
          <a href={ctaLink} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
            {ctaText}
          </a>
          <a href="/portfolio" className="px-8 py-4 glass-card rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            View Our Work <span>→</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;