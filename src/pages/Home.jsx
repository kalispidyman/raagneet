import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="bg-slate-50">
      <HeroSection 
        title="Elevate Your" 
        subtitle="Digital Presence Today"
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />
      
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We blend creativity with technology to deliver solutions that stand out in a crowded market.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🚀', title: 'Fast Performance', desc: 'Lightning-fast load times and optimized code to keep your users engaged and reduce bounce rates.' },
            { icon: '🎨', title: 'Modern Design', desc: 'Sleek, responsive, and user-centric interfaces built with the latest design trends and best practices.' },
            { icon: '🛡️', title: 'Secure & Reliable', desc: 'Enterprise-grade security standards ensuring your data and your users data stays protected.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="text-6xl mb-6 bg-blue-50 w-24 h-24 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-blue-100 transition-transform duration-300 mx-auto">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{item.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;