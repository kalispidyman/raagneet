import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Skull, Ghost, Eye, Flame, Moon, Cat, Zap, BookOpen, Dna } from 'lucide-react';
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
    20% { text-shadow: -2px 2px 0 #ff003c, 2px -2px 0 #6a0dad; transform: translate(-3px, 2px); }
    40% { text-shadow: 2px -2px 0 #ff003c, -2px 2px 0 #6a0dad; transform: translate(3px, -2px); }
    60% { text-shadow: -2px -2px 0 #ff003c, 2px 2px 0 #6a0dad; transform: translate(-3px, -2px); }
    80% { text-shadow: 2px 2px 0 #6a0dad, -2px -2px 0 #ff003c; transform: translate(3px, 2px); }
    100% { text-shadow: -2px 2px 0 #6a0dad, 2px -2px 0 #ff003c; transform: translate(0); }
  }
  @keyframes flicker {
    0% { opacity: 0.92; }
    4% { opacity: 0.18; }
    8% { opacity: 1; }
    12% { opacity: 0.88; }
    16% { opacity: 0.35; }
    20% { opacity: 0.95; }
    24% { opacity: 0.25; }
    28% { opacity: 0.98; }
    32% { opacity: 0.78; }
    36% { opacity: 1; }
    100% { opacity: 0.94; }
  }
  @keyframes pentagramSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bloodDrip {
    0% { opacity: 0.6; transform: translateY(0) scaleY(1); }
    70% { opacity: 0.9; transform: translateY(60px) scaleY(1.5); }
    100% { opacity: 0; transform: translateY(90px) scaleY(2.5); }
  }
`;

// Custom hook for mouse-following eye
const useMousePosition = () => {
  const posRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return posRef;
};

const FollowEye = () => {
  const mouseRef = useMousePosition();
  const eyeRef = useRef(null);
  
  useEffect(() => {
    let frame;
    const animate = () => {
      if (!eyeRef.current) return;
      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;
      const angle = Math.atan2(mouseRef.current.y - eyeCenterY, mouseRef.current.x - eyeCenterX);
      const distance = Math.min(8, Math.hypot(mouseRef.current.x - eyeCenterX, mouseRef.current.y - eyeCenterY) / 40);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const pupil = eyeRef.current.querySelector('.pupil');
      if (pupil) {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mouseRef]);

  return (
    <div ref={eyeRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20 pointer-events-none opacity-80">
      <div className="relative w-full h-full rounded-full bg-red-900/60 border-4 border-red-700/80 backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.4)]">
        <div className="absolute inset-4 rounded-full bg-black/80 flex items-center justify-center">
          <div className="pupil w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_#ff0000] transition-transform duration-75" />
        </div>
        {/* Vein details */}
        <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-red-950/60 rounded-full" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-red-950/60 rounded-full" />
      </div>
    </div>
  );
};

const Deepseek = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0a0011' }}>
      <HorrorBackground />

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Custom animations */}
      <style>{glitchKeyframes}</style>

      {/* Floating pentagram */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 opacity-20 animate-[pentagramSpin_30s_linear_infinite]" style={{ filter: 'drop-shadow(0 0 20px rgba(200,0,0,0.6))' }}>
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <polygon points="50,5 61,42 95,42 67,62 78,98 50,78 22,98 33,62 5,42 39,42" stroke="#cc0000" strokeWidth="2" fill="none" strokeLinejoin="round" />
            <circle cx="50" cy="50" r="45" stroke="#660000" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          </svg>
        </div>
      </div>

      {/* Blood drip lines */}
      <div className="absolute top-0 left-0 w-full h-32 z-5 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-red-800/70 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 20}%`,
              height: `${30 + Math.random() * 40}px`,
              animation: `bloodDrip ${3 + Math.random() * 2}s infinite linear ${i * 0.5}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-8xl md:text-[10rem] font-black tracking-tighter mb-2 select-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: '#fff',
              textShadow: '0 0 15px rgba(255,0,50,0.9), 0 0 50px rgba(128,0,255,0.7), 0 0 100px rgba(255,0,0,0.5)',
              animation: 'glitch 3s infinite linear, flicker 4s infinite'
            }}
          >
            DEEPSEEK
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-red-200/90 font-light mb-12 tracking-[0.3em] uppercase"
            style={{ textShadow: '0 0 12px rgba(255,0,0,0.6)' }}
          >
            Embrace the Darkness. Unleash the Forbidden.
          </motion.p>

          {/* Main feature cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Skull, label: 'Necromancy Core', desc: 'Undeath protocols revived' },
              { icon: Ghost, label: 'Spectral AI', desc: 'Phantom intelligence engines' },
              { icon: Eye, label: 'All-Seeing Oracle', desc: 'No secret hidden from us' },
              { icon: Flame, label: 'Hellfire Processing', desc: 'Infernal compute speeds' },
              { icon: Moon, label: 'Dark Rituals', desc: 'Automated occult workflows' },
              { icon: Cat, label: 'Familiar Bots', desc: 'Loyal companion constructs' },
              { icon: Zap, label: 'Thunder Hex', desc: 'Electromagnetic curses' },
              { icon: BookOpen, label: 'Eldritch Knowledge', desc: 'Forbidden deep learning texts' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(200,0,30,0.25)', borderColor: 'rgba(255,0,0,0.6)' }}
                className="backdrop-blur-md bg-black/40 border border-red-900/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer group shadow-lg shadow-red-900/20"
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-red-500 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-red-200 group-hover:text-red-100 mb-1 font-display tracking-wide">{item.label}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Demon Testimonials Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-red-400/90 mb-8 font-display tracking-wider">
              Whispers from the Abyss
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "Deepseek's spectral AI turned our cursed data into gold. The spirits are pleased.", author: "Azazel, Lord of the Pit" },
                { quote: "We summoned 400% more demonic conversions using their Hellfire engine. Truly infernal.", author: "Lilith, CEO of NetherCorp" },
                { quote: "Their familiar bots never sleep, never tire, never hesitate to do the dark bidding. A game-changer.", author: "Baphomet, Sabbatic Goat" }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(139,0,0,0.15)' }}
                  className="backdrop-blur-md bg-black/30 border border-red-900/40 rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600/0 via-red-500/80 to-red-600/0" />
                  <p className="text-red-100/80 italic mb-4 leading-relaxed">"{t.quote}"</p>
                  <p className="text-xs text-red-300/60 font-mono uppercase tracking-widest">— {t.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="space-x-4 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(255,0,0,0.7)' }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 bg-red-950/80 border-2 border-red-600/80 rounded-full text-lg font-bold text-red-100 backdrop-blur-md hover:bg-red-900/80 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.3)] font-display tracking-widest uppercase"
            >
              Enter the Abyss
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(128,0,255,0.7)' }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 bg-purple-950/70 border-2 border-purple-600/60 rounded-full text-lg font-bold text-purple-100 backdrop-blur-md hover:bg-purple-900/80 transition-all duration-300 shadow-[0_0_20px_rgba(128,0,255,0.3)] font-display tracking-widest uppercase"
            >
              Summon Spirits
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating eye cursor tracker */}
        <FollowEye />
      </div>

      {/* Occult corner runes */}
      <div className="absolute top-8 left-8 text-red-800/30 text-8xl font-mono select-none z-20 pointer-events-none">⚝</div>
      <div className="absolute bottom-8 right-8 text-purple-800/20 text-9xl font-mono select-none z-20 pointer-events-none rotate-12">⁕</div>
      <div className="absolute top-1/3 right-5 text-red-900/20 text-6xl select-none z-20 pointer-events-none">☠</div>
      <div className="absolute bottom-1/4 left-5 text-purple-900/20 text-7xl select-none z-20 pointer-events-none -rotate-45">☽</div>
    </div>
  );
};

export default Deepseek;