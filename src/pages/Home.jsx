import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Innovative Design', desc: 'Pixel-perfect UIs that captivate and engage your audience from the first click.' },
            { title: 'Advanced Tech', desc: 'Scalable architectures powered by the latest frameworks and cloud infrastructure.' },
            { title: 'Growth Driven', desc: 'Data-informed strategies that convert visitors into loyal customers.' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-teal-500/30 group-hover:to-purple-500/30 transition-all">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;