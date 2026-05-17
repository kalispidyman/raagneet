const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-teal-300 font-medium mx-auto w-fit">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Redefining Digital Excellence
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gradient max-w-4xl mx-auto">
          Crafting the Future of <br /> Digital Experiences
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Raagneet Studios delivers cutting-edge web, mobile, and AI solutions designed to elevate your brand and accelerate growth in a rapidly evolving digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="btn-primary px-8 py-4 text-lg">Start Your Project</button>
          <button className="btn-secondary px-8 py-4 text-lg">View Our Work</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;