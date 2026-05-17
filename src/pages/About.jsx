import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Target } from 'lucide-react'

export default function About() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Who We Are" subtitle="Driven by passion, powered by innovation" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <TextBlock />
          <ImageBlock />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <StatCard icon={<Users size={32} />} value="50+" label="Team Members" />
          <StatCard icon={<Target size={32} />} value="100+" label="Projects Delivered" />
          <StatCard icon={<Award size={32} />} value="15" label="Industry Awards" />
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ title, subtitle }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-400">{subtitle}</p>
      <div className="w-20 h-1 bg-indigo-500 rounded mt-4" />
    </motion.div>
  )
}

function TextBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 text-lg text-gray-300">
      <p>Founded in 2020, our studio has rapidly evolved into a powerhouse of digital craftsmanship. We believe that great design isn't just about aesthetics—it's about solving complex problems with elegant, intuitive solutions.</p>
      <p>Our multidisciplinary team combines expertise in UX/UI design, full-stack development, and motion graphics to deliver holistic digital products that stand out in crowded markets.</p>
    </motion.div>
  )
}

function ImageBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="relative rounded