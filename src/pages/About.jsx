import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-50 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Us</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are a passionate team dedicated to creating exceptional digital experiences. 
                Our approach combines creativity with technical expertise to deliver results that exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of industry experience, we specialize in transforming ideas into reality, 
                focusing on quality, innovation, and client satisfaction.
              </p>
            </div>
            <div className="relative h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;