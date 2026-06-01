import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

export default function AnimatedCard({
  icon: Icon,
  title,
  description,
  index = 0,
  accentColor = '#6366f1',
  gradient = 'from-indigo-500/20 to-cyan-500/20',
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-glass-border bg-glass p-6 md:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-glass-border-hover hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Background glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Icon */}
      {Icon && (
        <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
          <Icon size={24} />
        </div>
      )}

      {/* Title */}
      <h3
        className="relative text-xl font-semibold tracking-tight text-white"
        style={{ fontFamily: 'var(--ffd)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="relative mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-60" />
    </motion.div>
  );
}