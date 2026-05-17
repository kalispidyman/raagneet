import React from 'react';
import { Rocket, Heart, Zap, Shield, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <Rocket className="w-5 h-5 text-teal-400" /> },
    { value: '99%', label: 'Happy Clients', icon: <Heart className="w-5 h-5 text-cyan-400" /> },
    { value: '5+', label: 'Years Experience', icon: <Zap className="w-5 h-5 text-purple-400" /> },
    { value: '24/7', label: 'Premium Support', icon: <Shield className="w-5 h-5 text-pink-400" /> }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: 'Innovation First',
      desc: 'We explore new technologies and design paradigms to create future-proof solutions that stand the test of time.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Quality & Integrity',
      desc: 'Every line of code and pixel of design is crafted with precision, ensuring enterprise-grade reliability and aesthetics.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'True Collaboration',
      desc: 'We partner closely with you to transform your visions into concrete digital successes that drive real business growth.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & Principal Engineer',
      avatar: '👨‍💻',
      bio: 'Ex-FAANG architect passionate about high-performance web systems and AI integrations.'
    },
    {
      name: 'Sarah Miller',
      role: 'Lead UI/UX Designer',
      avatar: '🎨',
      bio: 'Award-winning designer focused on crafting immersive and accessible user experiences.'
    },
    {
      name: 'David Park',
      role: 'Full Stack Developer',
      avatar: '🚀',
      bio: 'Expert in modern JavaScript frameworks, cloud infrastructure, and scalable backend systems.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-fade-in-up space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-teal-300 font-medium mx-auto w-fit">
          <Rocket className="w-4 h-4" />
          Our Story
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gradient max-w-3xl mx-auto">
          About <span className="text-gradient">Raagneet</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We are a collective of engineers, designers, and visionaries dedicated to pushing the boundaries of digital craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in-up delay-100">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card text-center p-6 flex flex-col items-center gap-3 group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-teal-500/10 transition-colors">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {values.map((val, i) => (
          <div key={i} className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{val.title}</h3>
            <p className="text-slate-400 leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the <span className="text-gradient">Team</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {team.map((member, i) => (
          <div key={i} className="glass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center text-5xl mb-6 border border-white/10 group-hover:border-teal-500/30 transition-colors">
              {member.avatar}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-teal-400 text-sm font-medium mb-4">{member.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;