import React from 'react';
import { Target, Shield, Users, Zap, Heart, Code, Palette, Rocket } from 'lucide-react';

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
      avatar: '👩‍🎨',
      bio: 'Award-winning creative specializing in premium dark modes, glassmorphism, and branding.'
    },
    {
      name: 'Neet Sharma',
      role: 'Director of Technology',
      avatar: '🚀',
      bio: 'Cloud systems and DevOps specialist focused on seamless automated deployments.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 relative z-10">
      {/* Header */}
      <div className="text-center space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-teal-300 font-medium mx-auto w-fit shadow-[0_0_15px_rgba(20,184,166,0.1)]">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,1)]" />
          About Raagneet Studios
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gradient max-w-4xl mx-auto">
          We Build Digital Excellence
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Born from a passion for cutting-edge technology and premium design, we transform complex challenges into elegant, high-performing digital solutions.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-100">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel p-6 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto mb-3 p-3 rounded-full bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Values */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core <span className="text-gradient">Values</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">The principles that drive every decision we make and every product we deliver.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div key={i} className="glass-card p-8 group hover:border-teal-500/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors">{val.title}</h3>
              <p className="text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet The <span className="text-gradient">Team</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">A collective of visionaries, engineers, and creators dedicated to pushing boundaries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="glass-panel p-8 text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-5xl group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300">
                {member.avatar}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-teal-400 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;