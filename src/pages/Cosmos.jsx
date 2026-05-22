import React, { useState, useRef, useEffect, useMemo, Suspense, createContext, useContext, useCallback } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, Stars, useCursor, Html, MeshDistortMaterial } from '@react-three/drei';
import { AnimatePresence, motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { Search, Globe, Zap, Database, Settings, ChevronLeft, ChevronRight, Radio, Activity, Shield, Cpu, ArrowRight } from 'lucide-react';

// === SECTION 1: GLOBAL CONTEXT & UTILS ===
export const ThemeContext = createContext({ accent: 'cyan', setAccent: () => {} });

const useMouse = () => {
  const pos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return pos;
};

const useMagnetic = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const btn = ref.current;
    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(btn, {
        x: (e.clientX - cx) * 0.25,
        y: (e.clientY - cy) * 0.25,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
        transformPerspective: 500
      });
    };
    const onMouseLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' });
    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);
  return ref;
};

// === SECTION 2: 3D SCENES (OPTIMIZED & ROBUST R3F SHADER REGISTRATION) ===
const NebulaParticles = ({ mouseRef }) => {
  const mesh = useRef();
  
  const count = 1200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  }), []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const m = mouseRef.current;
    mesh.current.material.uniforms.uTime.value += delta * 0.4;
    mesh.current.material.uniforms.uMouse.value.set(m.x * 5, m.y * 5);
  });

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    attribute vec3 instanceOffset;
    varying float vDist;
    varying float vAlpha;
    void main() {
      vec3 pos = position;
      float wave = sin(pos.y * 0.5 + uTime * 2.0) * 0.4;
      pos += wave;
      
      vec2 diff = (pos.xy - uMouse) * 0.5;
      float force = smoothstep(0.8, 0.0, length(diff));
      pos.xy += normalize(diff) * force * 1.5;
      
      vDist = length(pos) * 0.1;
      vAlpha = smoothstep(1.5, 0.0, length(pos.xy));
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = 6.0 * (30.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vDist;
    varying float vAlpha;
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      vec3 core = vec3(0.4, 0.7, 1.0);
      vec3 edge = vec3(0.9, 0.3, 0.8);
      vec3 color = mix(core, edge, smoothstep(0.1, 0.5, dist));
      gl_FragColor = vec4(color, vAlpha * 0.9 * smoothstep(0.5, 0.0, dist));
    }
  `;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </points>
  );
};

const ExoplanetGlobe = ({ onCoordinateSelect }) => {
  const mesh = useRef();
  const { camera } = useThree();
  useCursor();
  
  const handleRaycast = (e) => {
    e.stopPropagation();
    const { lat, lon } = e.uv ? { lat: (e.uv.y - 0.5) * 180, lon: (e.uv.x - 0.5) * 360 } : { lat: 45, lon: -90 };
    gsap.to(camera.position, {
      x: Math.sin(lon * 0.01) * 4 + 2,
      y: Math.cos(lat * 0.01) * 2,
      z: 4.5,
      duration: 1.2,
      ease: 'power3.inOut'
    });
    onCoordinateSelect({ lat: lat.toFixed(2), lon: lon.toFixed(2) });
  };

  useFrame(({ clock }) => {
    if (mesh.current) mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group scale={2}>
      <mesh ref={mesh} onClick={handleRaycast}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
        <MeshDistortMaterial speed={2} distort={0.1} color="#0f172a" />
      </mesh>
      <gridHelper args={[5, 20, '#06b6d4', '#1e293b']} rotation={[0, 0, 0]} scale={0.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
      <Stars radius={40} depth={30} count={4000} factor={4} fade />
    </group>
  );
};

const BlackHoleShader = () => {
  const mat = useRef();
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh scale={[10, 10, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        transparent
        side={2}
        uniforms={{ uTime: { value: 0 }, uResolution: { value: [1, 1] } }}
        vertexShader={`
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vec2 p = (vUv * 2.0 - 1.0);
            float r = length(p);
            float angle = atan(p.y, p.x);
            float distortion = 0.15 * sin(r * 10.0 - uTime * 3.0) / r;
            vec3 col = vec3(0.05, 0.0, 0.1);
            col += vec3(0.9, 0.3, 0.5) * smoothstep(0.45, 0.4, r + distortion);
            col += vec3(0.2, 0.5, 0.8) * smoothstep(0.55, 0.48, r + distortion);
            col *= pow(max(0.0, 1.0 - r * 1.5), 2.0);
            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
};

// === SECTION 3: UI COMPONENTS ===
const GlassMetricCard = ({ title, value, icon: Icon, delay }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      style={{ rotateX, rotateY, perspective: 600 }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-2xl will-change-transform"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        <span className="text-xs font-mono text-gray-400 tracking-widest">SYS_ACTIVE</span>
      </div>
      <h3 className="text-lg font-light text-gray-300 mb-1">{title}</h3>
      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-purple-300">{value}</p>
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
    </motion.div>
  );
};

const TelemetryRings = ({ label, percent, color }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const { accent } = useContext(ThemeContext);
  const strokeDashoffset = useMotionValue(circumference);

  useEffect(() => {
    gsap.to(strokeDashoffset, {
      x: circumference - (percent / 100) * circumference,
      duration: 1.5,
      ease: 'power2.inOut',
      overwrite: true
    });
  }, []);

  return (
    <motion.div className="flex flex-col items-center justify-center gap-2 p-4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90">
          <circle cx="40" cy="40" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
          <motion.circle cx="40" cy="40" r={radius} stroke={accent} strokeWidth="6" fill="none" strokeLinecap="round" style={{ strokeDasharray: circumference, strokeDashoffset }} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-mono font-bold text-white">{percent}%</span>
      </div>
      <span className="text-sm font-medium tracking-wider text-gray-400">{label}</span>
    </motion.div>
  );
};

const DataTableRow = ({ id, origin, timestamp, status, priority, index }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
      className="border-b border-white/5 text-sm font-mono group cursor-pointer transition-colors duration-200 hover:text-white"
    >
      <td className="px-4 py-3 text-gray-500 group-hover:text-cyan-400 transition-colors">#{id}</td>
      <td className="px-4 py-3 text-gray-300">{origin}</td>
      <td className="px-4 py-3 text-gray-400">{timestamp}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs border ${status === 'RECEIVED' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-amber-500/30 text-amber-400 bg-amber-500/10'}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3 text-right">
        <ArrowRight className="w-4 h-4 text-transparent group-hover:text-cyan-400 transition-all transform translate-x-0 group-hover:translate-x-1" />
      </td>
    </motion.tr>
  );
};

const ControlToggle = ({ label, checked, onChange }) => {
  return (
    <motion.div
      layout
      className="flex items-center justify-between py-4 px-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <span className="text-sm font-medium text-gray-200">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-14 h-7 rounded-full transition-all duration-500 ease-out ${checked ? 'bg-cyan-500/20' : 'bg-gray-700'}`}
      >
        <motion.div
          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg shadow-black/50"
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ left: checked ? 28 : 2, background: checked ? '#22d3ee' : '#9ca3af' }}
        />
      </button>
    </motion.div>
  );
};

// === SECTION 4: VIEW CONTAINERS ===
const View1 = () => {
  const mouseRef = useMouse();
  return (
    <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 animate-fade" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <GlassMetricCard title="Anomalies Detected" value="1,482" icon={Radio} delay={0.1} />
        <GlassMetricCard title="Warp Core Efficiency" value="98.4%" icon={Zap} delay={0.2} />
        <GlassMetricCard title="Quantum Flux Variance" value="0.04σ" icon={Activity} delay={0.3} />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 70 }} style={{ background: 'transparent' }}>
          <NebulaParticles mouseRef={mouseRef} />
        </Canvas>
      </div>
    </motion.div>
  );
};

const View2 = () => {
  const [panelData, setPanelData] = useState(null);
  return (
    <div className="absolute inset-0 flex">
      <div className="w-full md:w-3/4 h-full relative">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <ExoplanetGlobe onCoordinateSelect={setPanelData} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
          </Suspense>
        </Canvas>
      </div>
      <AnimatePresence>
        {panelData && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="absolute right-0 top-0 bottom-0 w-80 md:w-1/4 h-full border-l border-white/10 bg-black/80 backdrop-blur-xl p-6 z-20 flex flex-col"
          >
            <h3 className="text-xl font-mono text-cyan-300 mb-2">ATMOSPHERE SCAN</h3>
            <p className="text-gray-400 text-sm mb-6">Sector {panelData.lat}° N / {panelData.lon}° W</p>
            <div className="space-y-4">
              {['Nitrogen', 'Methane', 'Oxygen', 'Argon'].map((gas, i) => {
                const percentVal = Math.floor(Math.random() * 40 + 10);
                return (
                  <div key={gas}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1"><span>{gas}</span><span>{percentVal}%</span></div>
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} style={{ transformOrigin: 'left' }} className="h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${percentVal}%` }} />
                    </motion.div>
                  </div>
                );
              })}
            </div>
            <button onClick={() => setPanelData(null)} className="mt-auto py-2 text-sm text-gray-500 hover:text-white transition-colors border border-white/10 rounded-lg bg-white/5">Close Panel</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const View3 = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
      <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 6] }} style={{ background: 'transparent', position: 'absolute' }}>
        <BlackHoleShader />
      </Canvas>
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Shield Matrix', 'Quantum Core', 'Ion Thruster'].map((label, i) => (
          <div key={label} className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex flex-col items-center">
            <TelemetryRings label={label} percent={[87, 94, 62][i]} color={i === 0 ? '#22d3ee' : i === 1 ? '#a855f7' : '#f97316'} />
            <motion.div className="mt-4 text-2xl font-bold font-mono" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}>
              <CountDisplay target={[87, 94, 62][i]} delay={i * 0.2} />
              <span className="text-gray-400 text-sm font-normal">%</span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountDisplay = ({ target, delay }) => {
  const val = useRef(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(val, { current: target, duration: 1.8, delay, ease: 'power2.out', onUpdate: function() { setDisplay(Math.floor(val.current || 0)); } });
    });
    return () => ctx.revert();
  }, [target, delay]);
  return <>{display || target}</>;
};

const View4 = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const logs = useMemo(() => Array.from({ length: 24 }, (_, i) => ({ id: `TR-${i.toString().padStart(3, '0')}`, origin: `Kepler-${Math.floor(Math.random() * 9000) + 1000}`, timestamp: new Date().toISOString().split('T')[0], status: Math.random() > 0.3 ? 'RECEIVED' : 'DECRYPTING', priority: 'HIGH' })), []);

  return (
    <div className="absolute inset-0 p-8 flex flex-col z-20">
      <div className="flex justify-between items-center mb-6 mt-16 md:mt-0">
        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2"><Database className="w-6 h-6 text-purple-400" /> TRANSMISSION LOG</h2>
        <motion.div
          animate={{ width: searchExpanded ? 240 : 40, borderRadius: 20 }}
          className="bg-white/5 border border-white/10 flex items-center overflow-hidden cursor-pointer h-10"
          onClick={() => setSearchExpanded(!searchExpanded)}
        >
          <Search className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" />
          <AnimatePresence>
            {searchExpanded && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 180, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-transparent text-white text-sm px-3 py-2 focus:outline-none w-full"
                placeholder="Filter logs..."
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="flex-1 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-auto p-4">
        <table className="w-full text-left">
          <thead className="text-xs uppercase text-gray-500 border-b border-white/10">
            <tr><th className="px-4 py-2 font-mono">ID</th><th className="px-4 py-2">Origin Sector</th><th className="px-4 py-2">Timestamp</th><th className="px-4 py-2">Status</th><th className="px-4 py-2 text-right">Details</th></tr>
          </thead>
          <tbody>
            {logs.slice(page * 5, (page + 1) * 5).map((log, i) => <DataTableRow key={log.id} index={i} {...log} />)}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-6 px-2">
          <button disabled={page === 0} onClick={() => setPage(p => p - 1)} className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 text-gray-400"><ChevronLeft /></button>
          <span className="text-sm font-mono text-gray-400">PAGE {page + 1} / {Math.ceil(logs.length / 5)}</span>
          <button disabled={(page + 1) * 5 >= logs.length} onClick={() => setPage(p => p + 1)} className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 text-gray-400"><ChevronRight /></button>
        </div>
      </div>
    </div>
  );
};

const View5 = ({ accent, setAccent }) => {
  const [settings, setSettings] = useState({ warpSync: true, stealthMode: false, autoPilot: true, deepScan: false });
  
  const update = (key) => (val) => setSettings(s => ({ ...s, [key]: val }));
  
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 md:mt-0">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="space-y-3">
          <h3 className="text-xl font-mono text-white mb-4 flex items-center gap-2"><Settings className="w-5 h-5" /> SYSTEM CONTROLS</h3>
          <ControlToggle label="Warp Sync" checked={settings.warpSync} onChange={update('warpSync')} />
          <ControlToggle label="Stealth Protocol" checked={settings.stealthMode} onChange={update('stealthMode')} />
          <ControlToggle label="Auto-Pilot" checked={settings.autoPilot} onChange={update('autoPilot')} />
          <ControlToggle label="Deep Scan" checked={settings.deepScan} onChange={update('deepScan')} />
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-4">
          <h3 className="text-xl font-mono text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5" /> INTERFACE THEME</h3>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-gray-400 mb-3">ACCENT CHROMATIC</p>
            <div className="flex gap-3">
              {['#22d3ee', '#a855f7', '#ef4444', '#10b981'].map(c => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  className={`w-8 h-8 rounded-full transition-transform duration-300 hover:scale-110 ${accent === c ? 'ring-2 ring-white/80 scale-110' : 'ring-1 ring-white/20'}`}
                  style={{ background: c, boxShadow: `0 0 12px ${c}60` }}
                />
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-gray-400 mb-2">RESONANCE FREQUENCY</p>
            <input type="range" className="w-full accent-cyan-500 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// === SECTION 5: MAIN APP SHELL ===
export default function CosmosDashboard() {
  const [activeView, setActiveView] = useState(1);
  const [accent, setAccent] = useState('#22d3ee');

  const views = [1, 2, 3, 4, 5];
  const navItems = [
    { id: 1, label: 'Nebula', icon: Radio },
    { id: 2, label: 'Observatory', icon: Globe },
    { id: 3, label: 'Telemetry', icon: Zap },
    { id: 4, label: 'Logs', icon: Database },
    { id: 5, label: 'Control', icon: Settings }
  ];

  const renderView = () => {
    switch(activeView) {
      case 1: return <View1 />;
      case 2: return <View2 />;
      case 3: return <View3 />;
      case 4: return <View4 />;
      case 5: return <View5 accent={accent} setAccent={setAccent} />;
      default: return null;
    }
  };

  return (
    <ThemeContext.Provider value={{ accent, setAccent }}>
      <div className="w-screen h-screen bg-black text-white overflow-hidden font-sans selection:bg-cyan-500/30" style={{ '--accent': accent }}>
        {/* Standalone Back to main site button on top left */}
        <div className="absolute top-4 left-4 z-50">
          <a
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-400 hover:text-white transition-all shadow-lg"
          >
            ← Back to NEET AI
          </a>
        </div>

        {/* Global Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Viewport */}
        <AnimatePresence mode="wait">
          <motion.div key={activeView} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: 'circOut' }}>
            {renderView()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dock */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
          >
            {navItems.map(item => (
              <NavButton key={item.id} {...item} active={activeView === item.id} onClick={() => setActiveView(item.id)} />
            ))}
          </motion.div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const NavButton = ({ label, icon: Icon, active, onClick }) => {
  const magRef = useMagnetic();
  return (
    <motion.button
      ref={magRef}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${active ? 'bg-white/10 text-cyan-300' : 'text-gray-500 hover:text-gray-300'}`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-[10px] font-medium uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div layoutId="activeNav" className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" transition={{ type: 'spring', stiffness: 400, damping: 25 }} />
      )}
    </motion.button>
  );
};