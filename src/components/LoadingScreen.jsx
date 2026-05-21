import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

const LOGS = [
  "⚡ Booting Antigravity v2.0 Agent Core...",
  "📦 Hydrating node_modules (downloading half the internet)...",
  "🌾 Querying soil pH databases for Indore village project...",
  "🏋️‍♂️ Calibrating wrist angles for 10 consecutive muscle-ups...",
  "🕉️ Deploying Bhagavad Gita equanimity script...",
  "👶 Twins Munnar & Hyan monitor: SLEEPING. Silent mechanical clacks activated.",
  "🎮 Syncing Erangel brackets for Free Fire / BGMI matches...",
  "🧊 Tuning premium glassmorphic physical matrices...",
  "🔒 Securing private key vaults & whitelists...",
  "✨ Calibration complete. Deploying absolute visual masterpiece..."
];

export default function LoadingScreen({ onDone }) {
  const screenRef = useRef(null);
  const coreRef = useRef(null);
  const terminalRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState("");
  const [logIndex, setLogIndex] = useState(0);

  // Animate progress percentage and system logs
  useEffect(() => {
    let progressTimer;
    let logTimer;

    const startProgress = () => {
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          // Increments faster with slight random delay skips
          const increment = Math.random() > 0.6 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 3) + 1;
          return Math.min(prev + increment, 100);
        });
      }, 45);
    };

    const startLogs = () => {
      setCurrentLog(LOGS[0]);
      logTimer = setInterval(() => {
        setLogIndex((prev) => {
          const next = prev + 1;
          if (next < LOGS.length) {
            setCurrentLog(LOGS[next]);
            return next;
          }
          clearInterval(logTimer);
          return prev;
        });
      }, 220);
    };

    startProgress();
    startLogs();

    return () => {
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, []);

  // Trigger GSAP outro when progress hits 100%
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });
      tl.to(coreRef.current, { scale: 0.8, opacity: 0, filter: 'blur(10px)', duration: 0.6 })
        .to(terminalRef.current, { y: 30, opacity: 0, duration: 0.5 }, '-=0.4')
        .to(screenRef.current, {
          yPercent: -100,
          duration: 0.85,
          onComplete: onDone
        }, '-=0.2');
      return () => tl.kill();
    }
  }, [progress, onDone]);

  // Entry animations
  useEffect(() => {
    gsap.fromTo(coreRef.current,
      { scale: 0.5, opacity: 0, rotate: -30 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.1, ease: 'back.out(1.5)' }
    );
    gsap.fromTo(terminalRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.75, delay: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div ref={screenRef} className="loading-screen">
      {/* Cyber Grid Background Matrix */}
      <div className="loading-grid-overlay" />
      <div className="orb loading-orb-1" />
      <div className="orb loading-orb-2" />

      {/* Cyber Rotating Core */}
      <div ref={coreRef} className="loading-core-container">
        <div className="quantum-scanner" />
        <div className="loading-ring-quantum" />
        <div className="loading-ring-quantum-outer" />
        <div className="core-logo-wrapper">
          <Logo size="lg" animated={true} />
        </div>
        
        {/* Progress bubble */}
        <div className="progress-percentage-bubble">
          <span className="percentage-number">{progress}%</span>
          <span className="percentage-lbl">SYNCED</span>
        </div>
      </div>

      {/* Console panel */}
      <div ref={terminalRef} className="loading-terminal-panel glass">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title-text">neet@ai-studio:~</span>
          <span className="system-status-indicator">ACTIVE STAGE</span>
        </div>
        
        <div className="terminal-body">
          <div className="terminal-history">
            {LOGS.slice(0, logIndex).map((log, idx) => (
              <div key={idx} className="terminal-line history-line">
                <span className="prompt-symbol">&gt;</span> {log}
              </div>
            ))}
          </div>
          <div className="terminal-line active-line">
            <span className="prompt-symbol blink">&gt;</span> {currentLog}
          </div>
        </div>

        {/* Console line progress fill */}
        <div className="terminal-progress-track">
          <div className="terminal-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}