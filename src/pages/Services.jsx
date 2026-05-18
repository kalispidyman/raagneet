import React from 'react';
import { Code, Palette, Cloud, Brain, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "UI/UX Design", 
      desc: "Crafting intuitive, visually stunning interfaces that captivate users and drive engagement.",
      icon: <Palette className="w-10 h-10 text-accent-teal" />,
      color: "from-accent-teal/20 to-accent-cyan/10"
    },
    { 
      title: "Web Development", 
      desc: "Full-stack solutions built with modern, resilient frameworks and scalable architectures.",
      icon: <Code className="w-10 h-10 text-accent-cyan" />,
      color: "from-accent-cyan/20 to-accent-purple/10"
    },
    { 
      title: "Cloud Architecture", 
      desc: "Secure, resilient, and globally distributed infrastructure optimized for peak performance.",
      icon: <Cloud className="w-10 h-10 text-accent-purple" />,
      color: "from-accent-purple/20 to-accent-teal/10"
    },
    { 
      title: "AI Integration", 
      desc: "Seamless machine learning models and intelligent automation to supercharge your workflow.",
      icon: <Brain className="w-10 h-10 text-accent-teal" />,
      color: "from-accent-teal/20 to-accent-cyan/10"
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb w-[700px] h-[700px] bg-accent-cyan top-[10%] left-[-10%] animate-drift-slow" />
        <div className="bg-orb w-[600px] h-[600px] bg-accent-purple bottom-[10%] right-[-10%] animate-drift-slower" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-premium">
            Our <span className="text-accent-teal">Services</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions tailored to your unique business needs, blending aesthetics with enterprise-grade performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="glass-card-modern p-10 group relative overflow-hidden flex flex-col items-start"
            >
              {/* ACCENT GRADIENT */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="w-20 h-20 mb-8 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] group-hover:scale-110 group-hover:border-accent-cyan/30 transition-all duration-500 shadow-xl">
                {s.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                {s.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-lg mb-8 flex-grow">
                {s.desc}
              </p>
              
              <button className="flex items-center gap-2 text-white font-bold group-hover:text-accent-cyan transition-colors">
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* ECOSYSTEM SECTION */}
        <div className="glass-container !rounded-[2.5rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">A Complete Digital Ecosystem.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don't just build apps; we create integrated digital environments that scale with your ambitions. From strategy to deployment.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary-glass">Get a Quote</button>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-3xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group hover:bg-white/[0.05] transition-all">
                <div className="w-12 h-12 rounded-full bg-accent-teal/10 animate-pulse-slow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;