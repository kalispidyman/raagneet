import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-dark-950">
      <HeroSection />
      
      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-premium mb-6">
            Why Choose <span className="text-accent-cyan">Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We blend cutting-edge technology with premium aesthetics to deliver unparalleled digital solutions that redefine the industry standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Innovative Design', desc: 'Pixel-perfect UIs that captivate and engage your audience from the very first click.', icon: '✨', color: 'bg-accent-teal/10' },
            { title: 'Advanced Tech', desc: 'Scalable architectures powered by the latest frameworks and resilient cloud infrastructure.', icon: '⚡', color: 'bg-accent-cyan/10' },
            { title: 'Growth Driven', desc: 'Data-informed strategies that seamlessly convert visitors into loyal, long-term customers.', icon: '🚀', color: 'bg-accent-purple/10' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="glass-card-modern group p-8 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} border border-white/5 flex items-center justify-center mb-8 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <span>{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
              
              {/* HOVER GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-container !rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* DECORATIVE ORBS */}
          <div className="absolute top-[-50%] left-[-20%] w-[400px] h-[400px] bg-accent-teal/20 blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[400px] h-[400px] bg-accent-purple/20 blur-[100px] animate-pulse-slow" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-premium mb-8">Ready to Build the Future?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl mb-12">
              Join dozens of brands scaling their digital presence with Raagneet Studios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary-glass text-lg !px-10">Get Started Now</button>
              <button className="btn-secondary-glass text-lg !px-10">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;