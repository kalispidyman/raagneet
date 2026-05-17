import React from 'react';
import { Code, Palette, Cloud, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "UI/UX Design", 
      desc: "Crafting intuitive, visually stunning interfaces that captivate users and drive engagement.",
      icon: <Palette className="w-8 h-8 text-teal-400" />
    },
    { 
      title: "Web Development", 
      desc: "Full-stack solutions built with modern, resilient frameworks and scalable architectures.",
      icon: <Code className="w-8 h-8 text-cyan-400" />
    },
    { 
      title: "Cloud Architecture", 
      desc: "Secure, resilient, and globally distributed infrastructure optimized for peak performance.",
      icon: <Cloud className="w-8 h-8 text-purple-400" />
    },
    { 
      title: "AI Integration", 
      desc: "Seamless machine learning models and intelligent automation to supercharge your workflow.",
      icon: <Brain className="w-8 h-8 text-pink-400" />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient max-w-3xl mx-auto mb-4">Our Services</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">We deliver cutting-edge solutions tailored to your unique business needs, blending aesthetics with enterprise-grade performance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="glass-card p-8 animate-fade-in-up group" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-14 h-14 mb-6 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-teal-500/10 group-hover:border-teal-500/30 border border-white/10 transition-all duration-300">
              {s.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;