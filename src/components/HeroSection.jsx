import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-dark-950 to-dark-900 overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <motion.h1 
          className="text-7xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PresumeDigitech
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Empowering businesses with cutting-edge IT solutions and digital transformation strategies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full hover:scale-105 transition-transform">
            Get Started <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;