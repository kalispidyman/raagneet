import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Zap } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating/Parallax Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div style={{ y: yBg }} className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }} className="absolute bottom-40 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div style={{ y: yText }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-indigo-300"
          >
            <Zap size={14} /> Next-Gen Digital Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Crafting <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Future-Proof</span> <br className="hidden sm:block" /> Digital Visions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We blend cutting-edge technology with stunning design to build immersive web experiences that captivate, convert, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton to="/portfolio" variant="primary">View Our Work</MagneticButton>
            <MagneticButton to="/contact" variant="secondary">Start a Project</MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-500" size={24} />
      </motion.div>
    </section>
  )
}

function MagneticButton({ children, to, variant }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-lg transition-all cursor-pointer ${
        variant === 'primary' 
          ? 'bg-white text-gray-900 hover:bg-gray-200 shadow-lg shadow-white/20' 
          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md'
      }`}
    >
      <Link to={to} className="flex items-center gap-2">{children}</Link>
    </motion.div>
  )
}