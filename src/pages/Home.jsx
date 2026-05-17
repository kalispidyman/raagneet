import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const features = [
    { title: "Lightning Fast", desc: "Optimized for 120Hz displays and ultra-low latency interactions." },
    { title: "Secure by Design", desc: "Enterprise-grade encryption and zero-knowledge architecture." },
    { title: "Scalable Core", desc: "Built to grow with your user base from day one." }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <HeroSection />
      
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{feat.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;