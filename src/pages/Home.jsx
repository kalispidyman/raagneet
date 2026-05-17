export default function Home() {
  const features = [
    { title: 'Ultra-Modern Glass UI', desc: 'Seamless backdrop filters and translucent layers for depth and elegance.', icon: '✨' },
    { title: 'GPU-Accelerated Anim', desc: 'Smooth 120Hz transitions using transform and opacity for zero layout shifts.', icon: '🚀' },
    { title: 'Dark Ambient Vibes', desc: 'Deep slate backgrounds with glowing, animated orbs for premium aesthetics.', icon: '🌌' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6 leading-tight">
          Design the Future with <br className="hidden md:block" /> Glassmorphism
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience premium UI components crafted with modern frosted glass aesthetics, smooth micro-interactions, and blazing-fast performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-lg shadow-[0_0_25px_rgba(13,148,136,0.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(13,148,136,0.6)] transition-all duration-300 ease-out">
            Start Building
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ease-out">
            View Components
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
      
      <div className="glass-panel rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your interface?</h2>
        <p className="text-slate-400 mb-6">Join thousands of developers crafting next-gen web experiences.</p>
        <input type="email" placeholder="Enter your email" className="w-full max-w-md mx-auto px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300" />
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden cursor-pointer group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}