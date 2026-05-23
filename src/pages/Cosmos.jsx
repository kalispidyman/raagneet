import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Activity, Cpu, Zap, Server, Terminal, Database, Shield, Wifi } from 'lucide-react';

const AnimatedSphere = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color="#6366f1" opacity={0.3} transparent />
      </mesh>
    </Float>
  );
};

const MovingBackground = () => (
  <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent' }} camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
    <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
    <AnimatedSphere />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
);

const GlassCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={`glass-card ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({ icon: Icon, label, value, color, delay }) => (
  <GlassCard delay={delay} className="stat-card">
    <div className="stat-icon" style={{ background: `${color}20`, color: color, borderColor: `${color}40` }}>
      <Icon size={24} />
    </div>
    <div className="stat-info">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  </GlassCard>
);

const StatusRow = ({ label, status, ok, warn, err }) => (
  <div className="status-row">
    <span className="status-label">{label}</span>
    <span className={`status-badge ${ok ? 'badge-ok' : warn ? 'badge-warn' : 'badge-err'}`}>
      {status}
    </span>
  </div>
);

const Cosmos = () => {
  const [logs, setLogs] = useState([
    { time: '10:42:01', type: 'INFO', msg: 'Antigravity CLI initialized successfully.' },
    { time: '10:42:05', type: 'SUCCESS', msg: 'Sub-agent [SIERRA] spawned in sector 7.' },
    { time: '10:42:12', type: 'WARN', msg: 'Token consumption rate exceeding baseline by 14%.' },
    { time: '10:42:18', type: 'INFO', msg: 'Syncing glassmorphism UI state across nodes...' },
    { time: '10:42:24', type: 'ERROR', msg: 'WebGL context lost on node-04. Reconnecting...' },
    { time: '10:42:30', type: 'SUCCESS', msg: 'Node-04 reconnected. Framer-motion cache cleared.' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateLog();
      setLogs(prev => [...prev.slice(-8), newLog]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateLog = () => {
    const types = ['INFO', 'SUCCESS', 'WARN', 'ERROR'];
    const msgs = [
      'Pinging autonomous agent heartbeat...',
      'Compiling React Three Fiber shaders...',
      'Optimizing Draco compression for 3D assets...',
      'Executing background worker: cache_nuke.sh',
      'Database migration completed. 4 tables updated.',
      'Vercel deployment pipeline triggered.',
      'Agent [DELTA] hallucination detected. Re-prompting...',
      'Synchronizing state across distributed nodes...'
    ];
    const now = new Date();
    return {
      time: now.toTimeString().split(' ')[0],
      type: types[Math.floor(Math.random() * types.length)],
      msg: msgs[Math.floor(Math.random() * msgs.length)]
    };
  };

  return (
    <div className="cosmos-page">
      <MovingBackground />
      
      <div className="cosmos-overlay" />

      <div className="cosmos-content">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="cosmos-header"
        >
          <div className="header-badge">
            <Activity size={14} className="pulse-icon" />
            <span>SYSTEM ONLINE</span>
          </div>
          <h1 className="cosmos-title">
            NEET AI <span className="text-gradient">Testing Core</span>
          </h1>
          <p className="cosmos-subtitle">
            Autonomous agent orchestration, real-time telemetry, and 3D environment diagnostics.
          </p>
        </motion.div>

        <div className="cosmos-grid">
          <div className="grid-col-1">
            <StatCard icon={Cpu} label="Active Agents" value="14" color="#22d3ee" delay={0.1} />
            <StatCard icon={Zap} label="Tokens / Min" value="8.2K" color="#f59e0b" delay={0.2} />
            <StatCard icon={Server} label="Uptime" value="99.9%" color="#10b981" delay={0.3} />
            <StatCard icon={Database} label="Memory Load" value="42%" color="#8b5cf6" delay={0.4} />
          </div>

          <div className="grid-col-2">
            <GlassCard delay={0.2} className="terminal-card">
              <div className="card-header">
                <Terminal size={18} />
                <span>Live Agent Telemetry</span>
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
              </div>
              <div className="terminal-body">
                {logs.map((log, i) => (
                  <div key={i} className={`log-line log-${log.type.toLowerCase()}`}>
                    <span className="log-time">[{log.time}]</span>
                    <span className="log-type">[{log.type}]</span>
                    <span className="log-msg">{log.msg}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid-col-3">
            <GlassCard delay={0.3} className="status-card">
              <div className="card-header">
                <Shield size={18} />
                <span>Core Systems</span>
              </div>
              <div className="status-list">
                <StatusRow label="Antigravity Engine" status="Operational" ok />
                <StatusRow label="React Three Fiber" status="Rendering" ok />
                <StatusRow label="Origin Music API" status="Degraded" warn />
                <StatusRow label="Tournament Backend" status="Operational" ok />
                <StatusRow label="Local Ollama Node" status="Offline" err />
              </div>
            </GlassCard>

            <GlassCard delay={0.4} className="network-card">
              <div className="card-header">
                <Wifi size={18} />
                <span>Network Topology</span>
              </div>
              <div className="network-visual">
                <div className="node central">CORE</div>
                <div className="node n1">N-01</div>
                <div className="node n2">N-02</div>
                <div className="node n3">N-03</div>
                <div className="node n4">N-04</div>
                <svg className="network-lines" viewBox="0 0 200 200">
                  <line x1="100" y1="100" x2="30" y2="30" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
                  <line x1="100" y1="100" x2="170" y2="40" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
                  <line x1="100" y1="100" x2="40" y2="160" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
                  <line x1="100" y1="100" x2="160" y2="170" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="4" />
                </svg>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmos;