import React from 'react';

const Services = () => {
  const services = [
    { title: "UI/UX Design", desc: "Crafting intuitive, visually stunning interfaces." },
    { title: "Web Development", desc: "Full-stack solutions using modern frameworks." },
    { title: "Cloud Architecture", desc: "Scalable, secure, and resilient infrastructure." },
    { title: "AI Integration", desc: "Seamless machine learning and automation." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Our Services</h2>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">We deliver cutting-edge solutions tailored to your unique business needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 ease-out">
            <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;