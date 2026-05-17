import React from 'react';
import { Target, Shield, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '99%', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Premium Support' }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: 'Innovation First',
      desc: 'We explore new technologies and design paradigms to create future-proof solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Quality & Integrity',
      desc: 'Every line of code and pixel of design is crafted with precision and absolute attention to detail.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Collaboration',
      desc: 'We partner closely with you to transform your visions into concrete digital successes.'
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
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto animate-float">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">About Raagneet Studios</h1>
        <p className="text-lg md:text-xl text-slate-400">
          We are a collective of visionaries, engineers, and creators dedicated to building the premium digital products of tomorrow.
        </p>
      </div>

      {/* Main Grid: Story & Stats */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Story */}
        <div className="glass-panel p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
              <Target className="w-6 h-6" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Founded with a passion for cutting-edge aesthetics and flawless engineering, Raagneet Studios stands at the intersection of technology and art. We craft robust digital experiences that captivate, convert, and endure.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Whether building high-scale SaaS architectures or crafting elegant visual landing pages, our goal is to deliver unparalleled quality. We believe that outstanding design combined with clean, resilient code empowers organizations to build trust and scale infinitely.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card text-center p-6 md:p-8 flex flex-col justify-center items-center">
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The principles that guide our everyday decisions and define our culture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass-panel p-8 space-y-4 hover:border-teal-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/[0.08]">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{v.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Meet The Visionaries</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collaborative team of experts committed to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <div key={i} className="glass-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-white/[0.08] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {t.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">{t.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.bio}</p>
              </div>
              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-500">
                <span>Raagneet Studios</span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-teal-500/60" /> Core Team
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;