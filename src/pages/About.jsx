import React from 'react';
import { Rocket, Heart, Zap, Shield, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <Rocket className="w-5 h-5 text-accent-teal" /> },
    { value: '99%', label: 'Happy Clients', icon: <Heart className="w-5 h-5 text-accent-cyan" /> },
    { value: '5+', label: 'Years Experience', icon: <Zap className="w-5 h-5 text-accent-purple" /> },
    { value: '24/7', label: 'Premium Support', icon: <Shield className="w-5 h-5 text-accent-teal" /> }
  ];

  const values = [
    {
      icon: <Zap className="w-10 h-10 text-accent-teal" />,
      title: 'Innovation First',
      desc: 'We explore new technologies and design paradigms to create future-proof solutions that stand the test of time.'
    },
    {
      icon: <Shield className="w-10 h-10 text-accent-cyan" />,
      title: 'Quality & Integrity',
      desc: 'Every line of code and pixel of design is crafted with precision, ensuring enterprise-grade reliability and aesthetics.'
    },
    {
      icon: <Users className="w-10 h-10 text-accent-purple" />,
      title: 'True Collaboration',
      desc: 'We partner closely with you to transform your visions into concrete digital successes that drive real business growth.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb w-[600px] h-[600px] bg-accent-teal top-[-10%] right-[-10%] animate-drift-slow" />
        <div className="bg-orb w-[500px] h-[500px] bg-accent-purple bottom-[-5%] left-[-5%] animate-drift-slower" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-sm text-accent-cyan font-semibold mx-auto w-fit">
            <Rocket className="w-4 h-4" />
            Our Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-premium">
            About <span className="text-accent-cyan">Raagneet</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are a collective of engineers, designers, and visionaries dedicated to pushing the boundaries of digital craftsmanship.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card-modern text-center p-8 flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-accent-teal/10 transition-all">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-4xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((val, i) => (
            <div key={i} className="glass-card-modern p-10 group">
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform duration-500">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* MISSION CTA */}
        <div className="glass-container !rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Driven by Excellence.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
              Our mission is to empower businesses through technology that is as beautiful as it is functional.
            </p>
            <button className="btn-primary-glass">Work With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;