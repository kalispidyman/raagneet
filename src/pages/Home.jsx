import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose <span className="text-gradient">Us</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">We blend cutting-edge technology with premium aesthetics to deliver unparalleled digital solutions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Innovative Design', desc: 'Pixel-perfect UIs that captivate and engage your audience from the very first click.', icon: '✨' },
            { title: 'Advanced Tech', desc: 'Scalable architectures powered by the latest frameworks and resilient cloud infrastructure.', icon: '⚡' },
            { title: 'Growth Driven', desc: 'Data-informed strategies that seamlessly convert visitors into loyal, long-term customers.', icon: '🚀' }
          ].map((item, i) => (
            <div key={i} className="glass-card group cursor-default animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-white/[0.08] flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:border-teal-500/30 transition-all duration-300">
                <span>{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;