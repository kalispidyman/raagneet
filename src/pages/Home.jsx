import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Zap, Layers, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Interactive3DObject from '../components/Interactive3DObject';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Cpu className="text-accent-cyan" size={24} />,
      title: "Intelligent Systems",
      desc: "Harnessing the power of AI to create smarter, more adaptive digital environments."
    },
    {
      icon: <Zap className="text-accent-teal" size={24} />,
      title: "Ultra Performance",
      desc: "Optimized for speed and responsiveness, ensuring a flawless experience on every device."
    },
    {
      icon: <Layers className="text-accent-purple" size={24} />,
      title: "Modern Architecture",
      desc: "Built with the latest technologies for scalability and long-term maintainability."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-container border-accent-teal/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">Next-Gen Digital Solutions</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]">
              <span className="text-premium">Design the Future</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-teal to-accent-cyan">
                With Precision.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Experience the pinnacle of digital craftsmanship. We blend immersive glassmorphism aesthetics with high-performance engineering to build websites that breathe.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-primary-glass flex items-center justify-center gap-2 group">
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary-glass flex items-center justify-center gap-2">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Interactive Object */}
        <Interactive3DObject />
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-premium">Core Strengths</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We leverage cutting-edge tools and methodologies to deliver exceptional results that drive growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card-modern p-10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:border-accent-teal/50 group-hover:shadow-[0_0_20px_rgba(13,148,136,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="glass-container rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center border-white/[0.05]">
            {[
              { label: 'Happy Clients', value: '150+' },
              { label: 'Projects Done', value: '320+' },
              { label: 'Team Experts', value: '25+' },
              { label: 'Awards Won', value: '12' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-4xl font-black text-white">{stat.value}</h4>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
