import React from 'react';
import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-orb w-[600px] h-[600px] bg-accent-teal top-[-10%] left-[-10%]"
      />
      
      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-orb w-[500px] h-[500px] bg-accent-purple bottom-[10%] right-[-5%]"
      />

      {/* Cyan/Blue Orb */}
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 80, 50, 0],
          scale: [1, 1.1, 1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-orb w-[700px] h-[700px] bg-accent-cyan top-[30%] left-[20%] opacity-10"
      />
    </div>
  );
};

export default BackgroundOrbs;
