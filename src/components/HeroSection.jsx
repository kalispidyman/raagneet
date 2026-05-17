const HeroSection = ({ title, subtitle, ctaPrimary, ctaSecondary }) => {
  return (
    <div className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/15 via-[#0B0F19] to-[#0B0F19] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-gradient leading-tight">
          {title || "Elevate Your Digital Presence"}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          {subtitle || "Experience the future of web design with our ultra-modern, frosted glass aesthetics and seamless interactions."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary">
            {ctaPrimary || "Get Started"}
          </button>
          <button className="btn-secondary">
            {ctaSecondary || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;