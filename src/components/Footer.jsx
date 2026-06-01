import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const PARTICLE_COUNT = 12;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.03 }
  }
};

const particleVariants = {
  hidden: { opacity: 1, scale: 1, x: 0, y: 0 },
  visible: (i) => ({
    opacity: 0,
    scale: 0,
    x: Math.random() * 120 - 60,
    y: Math.random() * 120 - 60,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.02 }
  })
};

export default function Footer() {
  const [spark, setSpark] = useState(false);

  const handleSpark = useCallback(() => {
    setSpark(true);
    setTimeout(() => setSpark(false), 600);
  }, []);

  return (
    <footer className="footer-premium">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size="sm" />
          <p>
            Building the world's most powerful AI systems, autonomous bots, and next-generation intelligence platforms. We engineer the future of human-AI collaboration.
          </p>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <Link to="/products">Services</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">Careers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Blog</Link>
          <Link to="/about">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} NEET AI Studio. All rights reserved.</span>
        <span
          className="relative inline-flex items-center cursor-pointer select-none"
          onClick={handleSpark}
          onTouchStart={handleSpark}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSpark()}
        >
          Designer @NEET
          <AnimatePresence>
            {spark && (
              <motion.span
                className="absolute inset-0 pointer-events-none"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={particleVariants}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `hsl(${Math.random() * 60 + 180}, 80%, 60%)`,
                      boxShadow: '0 0 4px 1px currentColor',
                    }}
                  />
                ))}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </div>
    </footer>
  );
}