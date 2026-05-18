import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-[#0B0F19] flex items-center justify-center overflow-hidden"
        >
          {/* Background Atmospheric Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-teal rounded-full blur-[150px]"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* The Scorpion Logo in Preloader */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 relative"
            >
              <Logo className="w-32 h-32 md:w-40 md:h-32" />
              
              {/* Outer Energy Pulse Ring */}
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-accent-cyan"
              />
            </motion.div>

            {/* Progress Container */}
            <div className="w-64 md:w-80 space-y-4">
              <div className="flex justify-between items-end px-1">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.3em] text-accent-cyan uppercase">Initializing_System</span>
                  <span className="text-[8px] font-medium text-slate-500 uppercase tracking-widest">Neural_Link_Stable</span>
                </div>
                <span className="text-sm font-mono text-white tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent-teal via-accent-cyan to-white rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Loading Status Text */}
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[9px] text-center font-bold tracking-[0.2em] text-slate-400 uppercase"
              >
                Syncing Quantum Core Assets...
              </motion.p>
            </div>
          </div>

          {/* Bottom HUD elements */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-20">
             <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white" />
             <span className="text-[8px] font-black tracking-[0.5em] text-white uppercase">RAAGNEET_OS_V2.0</span>
             <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
