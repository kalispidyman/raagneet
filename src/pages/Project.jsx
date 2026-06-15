import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot Integration',
    description: 'Implementing advanced AI chatbot capabilities for seamless customer interactions.',
    icon: 'Bot',
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    title: 'Automated Testing Framework',
    description: 'Developing a robust testing framework for continuous integration and delivery.',
    icon: 'TestTube2',
    gradient: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    title: 'Cloud Migration Strategy',
    description: 'Strategizing and executing cloud migration for enhanced scalability and performance.',
    icon: 'Cloud',
    gradient: 'from-blue-500/20 to-sky-500/20'
  },
];

export default function Project() {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
          
          <div className="relative">
            <LucideIcon className="w-8 h-8 mb-4 text-white/60" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}