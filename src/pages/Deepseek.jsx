import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Ghost, Eye, Flame } from 'lucide-react';
import HorrorBackground from '../components/HorrorBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const glitchKeyframes = `
  @keyframes glitch {
    0% { text-shadow: 2px 2px 0 #ff003c, -2px -2px 0 #6a0dad; transform: translate(0); }
    20% { text-shadow: -2px 2px 0 #ff003c, 2px -2px 0 #6a0dad; transform: translate(-2px, 2px); }
    40% { text-shadow: 2px -2px 0 #ff003c, -2px 2px 0 #6a0dad; transform: translate(2px, -2px); }
    60% { text-shadow: -2px -2px 0 #ff003c, 2px 2px 0 #6a0dad; transform: translate(-2px, -2px); }
    80% { text-shadow: 2px 2px 0 #6a0dad, -2px -2px 0 #ff003c; transform: translate(2px, 2px); }
    100% { text-shadow: -2px 2px 0 #6a0dad, 2px -2px 0 #ff003c; transform: translate(0); }
  }
  @keyframes flicker {
    0% { opacity: 0.9; }
    5% { opacity: 0.2; }
    10% { opacity: 1; }
    15% { opacity: 0.85; }
    20% { opacity: 0.3; }
    30% { opacity: 1; }
    100% { opacity: 0.95; }
  }
`;

const Deepseek = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0a0011' }}>
      <HorrorBackground />

      {/* Glitch CSS */}
      <style>{glitchKeyframes}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Glitch Title */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-4 select-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: '#fff',
              textShadow: '0 0 10px rgba(255,0,50,0.8), 0 0 40px rgba(128,0,255,0.6)',
              animation: 'glitch 2.5s infinite linear, flicker 3s infinite'
            }}
          >
            DEEPSEEK
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-red-200/80 font-light mb-12 tracking-widest"
            style={{ textShadow: '0 0 8px rgba(255,0,0,0.5)' }}
          >
            Awaken the darkness. Seek knowledge in the abyss.
          </motion.p>

          {/* Horror Icons Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Skull, label: 'Necromancy', desc: 'Rebirth of the dead data' },
              { icon: Ghost, label: 'Spectral AI', desc: 'Phantom intelligence' },
              { icon: Eye, label: 'All-Seeing', desc: 'No secret hidden' },
              { icon: Flame, label: 'Hellfire', desc: 'Infernal processing' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(200,0,30,0.15)' }}
                className="backdrop-blur-md bg-black/30 border border-red-900/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer group"
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-red-500 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-red-300 group-hover:text-red-100 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,0,0,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-red-900/70 border border-red-500/60 rounded-full text-lg font-semibold text-red-100 backdrop-blur-sm hover:bg-red-700/80 transition-all duration-300"
            >
              Enter the Abyss
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(128,0,255,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-purple-900/50 border border-purple-500/50 rounded-full text-lg font-semibold text-purple-100 backdrop-blur-sm hover:bg-purple-800/70 transition-all duration-300"
            >
              Summon Spirits
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Corner occult runes */}
        <div className="absolute top-10 left-10 text-red-700/30 text-8xl font-mono select-none">⚝</div>
        <div className="absolute bottom-10 right-10 text-purple-700/20 text-9xl font-mono select-none">⁕</div>
      </div>
    </div>
  );
};

export default Deepseek;