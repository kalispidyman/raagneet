import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div 
      className="group relative p-8 rounded-3xl bg-glass border border-glass-border hover:border-glass-border-hover transition-all ease-in-out duration-300"
      whileHover={{ y: -10 }}
    >
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"
      />
      
      <div className="relative z-10 space-y-5">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-xl text-indigo-400">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;