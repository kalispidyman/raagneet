import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="glass-panel inline-block px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-medium text-cyan-300">✨ Redefining Digital Excellence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-gradient">Crafting the Future</span>
          <br />
          <span className="text-white/90">of Digital Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Raagneet Studios delivers premium, cutting-edge web solutions designed to elevate your brand and captivate your audience.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/portfolio" className="btn-primary px-8 py-4 text-lg">
            View Our Work
          </Link>
          <Link to="/contact" className="px-8 py-4 text-lg rounded-full border border-white/[0.15] text-white hover:bg-white/[0.05] transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;