import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2, Megaphone, Smartphone, Settings2, BarChart, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-accent-teal" />,
      title: "UI/UX Design",
      desc: "Creating visually stunning and highly intuitive user interfaces that prioritize user experience and brand identity.",
      color: "from-accent-teal/20 to-transparent"
    },
    {
      icon: <Code2 className="text-accent-cyan" />,
      title: "Web Development",
      desc: "Building robust, scalable, and high-performance web applications using modern frameworks and best practices.",
      color: "from-accent-cyan/20 to-transparent"
    },
    {
      icon: <Smartphone className="text-accent-purple" />,
      title: "App Development",
      desc: "Developing seamless mobile experiences for iOS and Android that engage users and deliver value.",
      color: "from-accent-purple/20 to-transparent"
    },
    {
      icon: <Megaphone className="text-orange-400" />,
      title: "Digital Marketing",
      desc: "Strategic marketing campaigns designed to increase visibility, engagement, and conversion rates.",
      color: "from-orange-400/20 to-transparent"
    },
    {
      icon: <BarChart className="text-green-400" />,
      title: "SEO Optimization",
      desc: "Enhancing your online presence to rank higher in search results and drive organic traffic.",
      color: "from-green-400/20 to-transparent"
    },
    {
      icon: <ShieldCheck className="text-blue-400" />,
      title: "Cyber Security",
      desc: "Implementing advanced security protocols to protect your digital assets and user data.",
      color: "from-blue-400/20 to-transparent"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-premium"
          >
            Specialized Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We provide a wide range of digital solutions tailored to meet your unique business needs and objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card-modern p-10 relative overflow-hidden group"
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:border-accent-teal/50">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-white transition-colors group/btn">
                Learn More 
                <Settings2 size={16} className="group-hover/btn:rotate-90 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 glass-container rounded-[2rem] p-12 text-center border-accent-teal/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-teal/5 opacity-20 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Need a Custom Solution?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10">We specialize in bespoke digital products. Let's discuss your vision and bring it to life.</p>
          <button className="btn-primary-glass relative z-10">
            Schedule a Discovery Call
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
