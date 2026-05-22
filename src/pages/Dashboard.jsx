import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Lock, Unlock, ShieldAlert, Terminal, LogOut, Flame, Sprout, Play, 
  HelpCircle, RefreshCw, Sliders, Dumbbell, Sparkles, Send, Check, ExternalLink 
} from 'lucide-react';

const SYSTEM_LOGS_PRESET = [
  "⚡ Decrypting Antigravity v2.0 secure keys...",
  "🌾 Querying soil parameters for Indore central village coordinates...",
  "🏋️‍♂️ Muscle-up trajectory: 90% optimization score.",
  "👶 twins Munnar & Hyan sleeping status: STABLE. No heavy mechanical clicks authorized.",
  "🕉️ 'Karmanye vadhikaraste...' - perform duty without attachment.",
  "🚀 System whitelisted. Welcome Navneet."
];

const PresetsLyrics = {
  dad: {
    title: "Indore Dad Late-Night Blues",
    lyrics: `(Verse 1)
It's 2 AM in Indore, twin monitors are glowing
Munnar and Hyan are sleeping, the code is steadily flowing
Apurva alert status: Chill but proceed with caution
If I wake up the twins, there'll be a serious commotion!

(Chorus)
Calisthenics pullups, agricultural degree B.Sc
Antigravity 2.0 rendering in perfect 3D
Sarcastic AI agents working like a master crew
God give me some equanimity to make it through!

(Outro)
No mechanical keyboard clacks allowed
Dad shift dev making the Indore village proud! 🌾`
  },
  gita: {
    title: "The equanimity state machine",
    lyrics: `(Verse 1)
My React state is rendering in an infinite loop again
My memory leaks are piling up, causing endless brain strain
But Krishna said to Arjun: 'Gatasun agatasums ca'
Grieve not for wasted hours, clear your cache with a 'Tala'

(Chorus)
'Vyavasayatmika buddhir ekeha' - be one-pointed with your code
Master the Antigravity agent, traverse the ultimate road
No attachment to the outcomes, let Vercel trigger the deploy
In the union of pure focus, you will find eternal joy!

(Outro)
Calm the restless mind, conquer your console log,
Rise above the matrix of this heavy frontend fog! 🕉️`
  },
  gaming: {
    title: "BGMI Erangel Anthems",
    lyrics: `(Verse 1)
Drop into Pochinki, M416 in the hand
Managing 100 gamers across the digital land
Brackets are all scrambled, custom room is getting hot
But I'm centering the divs with the speed of Neet's Bot!

(Chorus)
No scope creep, just scope-in with the 8x lens
Autopilot sub-agents are my only real friends
Charge them like a premium 3D autonomous agency
Win the tournament, then commit with perfect urgency!

(Outro)
Server whitelisted, chicken dinner on the plate,
Antigravity squad never meets defeat or hate! 🎮`
  }
};

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  
  // Auth Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupUser, setSignupUser] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  
  // Feedback Messages
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  // Active Dashboard States
  const [logs, setLogs] = useState(SYSTEM_LOGS_PRESET);
  const [terminalInput, setTerminalInput] = useState('');
  const [apurvaStatus, setApurvaStatus] = useState('CHILL'); // 'CHILL' | 'WARNING' | 'CRITICAL'
  const [soilPh, setSoilPh] = useState(6.8);
  const [nitrogen, setNitrogen] = useState(45);
  const [muscleUps, setMuscleUps] = useState(12);
  const [dips, setDips] = useState(25);
  const [pullups, setPullups] = useState(30);
  
  // Song Generator
  const [selectedVibe, setSelectedVibe] = useState('dad');
  const [generatedSong, setGeneratedSong] = useState(null);
  const [generatingSong, setGeneratingSong] = useState(false);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    // Check session
    const authed = sessionStorage.getItem('neet_auth') === 'true';
    if (authed) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (username.toLowerCase() === 'admin' && password === 'kali') {
      sessionStorage.setItem('neet_auth', 'true');
      setIsAuthenticated(true);
      setAuthPopup(false);
      setSuccessMsg('System Decrypted! Decryption matrix fully unlocked.');
      setTimeout(() => setSuccessMsg(''), 4000);
      setUsername('');
      setPassword('');
    } else {
      setErrorMsg("Anger leads to delusion, Neet! 'Krodhad bhavati sammohah'. Reset your ego, type admin/kali to unlock the core. 🕉️");
    }
  };

  // Handle Signup (Mock)
  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!signupUser || !signupEmail) {
      setErrorMsg('Inputs cannot be hollow, Neet!');
      return;
    }

    setSuccessMsg(`Welcome, ${signupUser}! Minion account registered. But the master core remains sealed unless you login with 'admin' / 'kali'! ⚔️`);
    setTimeout(() => {
      setAuthMode('login');
      setUsername(signupUser);
      setSuccessMsg('');
    }, 4500);
  };

  // Logout
  const handleLogout = () => {
    sessionStorage.removeItem('neet_auth');
    setIsAuthenticated(false);
    setLogs(SYSTEM_LOGS_PRESET);
  };

  // Trigger Terminal Action
  const triggerTerminalCommand = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = "Available protocols: /spawn, /gita, /indore, /muscleups, /clear, /wifey";
    } else if (cmd.startsWith('/spawn')) {
      response = "🤖 Spawning [AGENT.SIERRA]. Spooling 3D glassmorphic compiler... 'Na hi kalyana-krit kascid durgatim tata gacchati.' Sierra is now optimizing your Three.js frames!";
    } else if (cmd.startsWith('/gita')) {
      const gitaQuotes = [
        "Karmanye vadhikaraste Ma Phaleshu Kadachana. Detach from the output and push to main, Neet! 🌌💻",
        "Uddhared atmanatmanam. Let a man lift himself by his own self! Stop looking at the CLI, write one function.",
        "Sreyan svadharmo vigunah. It is better to do your own duty imperfectly than to mimic Claude 3.5 Sonnet.",
        "Bandhur atmatmanastasya. The mind is your friend when mastered, and a chaotic compiler error when not."
      ];
      response = `🕉️ [Gita Protocol] ${gitaQuotes[Math.floor(Math.random() * gitaQuotes.length)]}`;
    } else if (cmd.startsWith('/indore')) {
      response = `🌾 [Indore Village Database] Soil pH is currently set to ${soilPh}. Recommended: ${soilPh < 6.0 ? 'Apply lime immediately!' : soilPh > 7.5 ? 'Add organic matter!' : 'Indore wheat is looking magnificent!'}`;
    } else if (cmd.startsWith('/muscleups')) {
      response = `💪 Current target: 15 momentum-free reps. You logged ${muscleUps} today. Remember, half reps don't count in the digital universe!`;
    } else if (cmd.startsWith('/wifey')) {
      response = `🚨 [Wifey Radar Sensor] Apurva warning level: ${apurvaStatus}. ${apurvaStatus === 'CRITICAL' ? 'CLOSE THE MECHANICAL KEYBOARD AND GO HELP WITH MUNNAR AND HYAN! NOW!' : 'Atmosphere is stable.'}`;
    } else if (cmd === 'clear') {
      setLogs([]);
      setTerminalInput('');
      return;
    } else {
      response = `Command '${cmd}' not whitelisted. Try typing 'help' or '/gita' for supreme wisdom.`;
    }

    setLogs(prev => [...prev, `neet@antigravity:~$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  // Log Workout Reps
  const incrementRep = (type) => {
    let msg = "";
    if (type === 'mu') {
      setMuscleUps(m => m + 1);
      msg = " logged 1 clean muscle-up. Make sure you don't use kip momentum, Neet! 🐒";
    } else if (type === 'dip') {
      setDips(d => d + 1);
      msg = " logged 1 deep parallel bar dip. Go all the way down!";
    } else {
      setPullups(p => p + 1);
      msg = " logged 1 pure pull-up. Focus on that explosive pull!";
    }
    setLogs(prev => [...prev, `🏋️‍♂️ Calisthenics Update: Navneet${msg}`]);
  };

  // Trigger Song Generation
  const generateSongAction = () => {
    setGeneratingSong(true);
    setTimeout(() => {
      setGeneratedSong(PresetsLyrics[selectedVibe]);
      setGeneratingSong(false);
      setLogs(prev => [...prev, `🎵 Origin Music Hub: Successfully synthesized track for vibe '${selectedVibe}'. Quality check complete.`]);
    }, 1500);
  };

  // Determine Indore Crop Advice
  const getCropAdvice = () => {
    if (soilPh < 6.0) return "⚠️ Soil is acidic! Add agricultural lime to raise pH. Crop focus: Potatoes & Rye. Soil needs actual dirt work, Neet! 🌱";
    if (soilPh > 7.5) return "⚠️ Soil is too alkaline! Mix in organic compost or elemental sulfur. Crop focus: Alfalfa & Barley. Get in the tractor! 🚜";
    return "✅ Perfect Indore pH! Wheat, soybean, and cotton will thrive beautifully. Excellent agriculture coordination! 🌾";
  };

  // Spawn standalone popout window
  const openDetachedWindow = () => {
    window.open('/portal', 'AntigravityDevPortal', 'width=1280,height=820,menubar=no,status=no,toolbar=no,location=no');
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '90vh', paddingBottom: '80px' }}>
      
      {/* Immersive Background Warning when Apurva alert is critical */}
      {isAuthenticated && apurvaStatus === 'CRITICAL' && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 80%)',
          border: '4px solid rgba(239,68,68,0.4)',
          pointerEvents: 'none',
          zIndex: 999,
          animation: 'pulse-slow 2s infinite'
        }} />
      )}

      {/* Hero Header */}
      <div className="page-header" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: 16 }}>
            <ShieldAlert size={12} color="#8b5cf6" /> Cryptographic Node
          </div>
          <h1 className="section-title">
            Antigravity <span className="gradient-text">Portal Center</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Decrypted dashboard portal for managing agent arrays, calisthenics matrices, agriculture databases, and e-sports squads.
          </p>
        </div>
      </div>

      <div className="container">
        {successMsg && (
          <div className="glass" style={{
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(16,185,129,0.3)',
            background: 'rgba(16,185,129,0.08)',
            color: '#34d399',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Check size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* ── NOT AUTHENTICATED: SECURE LOCK PAGE ── */}
        {!isAuthenticated ? (
          <div style={{ maxWidth: '640px', margin: '40px auto 0', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '48px 36px', position: 'relative', overflow: 'hidden' }}>
              <div className="orb" style={{ width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)', top: '-40px', left: '-40px' }} />
              
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.15)'
              }}>
                <Lock size={32} color="#ef4444" />
              </div>

              <h2 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.75rem', marginBottom: 12 }}>
                Access Denied: Node Restricted
              </h2>
              
              <p style={{ color: '#94a3b8', fontSize: '.9rem', lineHeight: 1.6, marginBottom: 32 }}>
                You are attempting to access the private Antigravity v2.0 Dev Console. To view coordinates, B.Sc Agriculture Indore databases, and Agent status, you must unlock this portal.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '290px', margin: '0 auto' }}>
                <button 
                  onClick={() => { setAuthMode('login'); setAuthPopup(true); setErrorMsg(''); }}
                  className="btn btn-primary" 
                  style={{ justifyContent: 'center' }}
                >
                  <Unlock size={16} /> Decrypt Node
                </button>
                <button 
                  onClick={openDetachedWindow}
                  className="btn btn-outline" 
                  style={{ justifyContent: 'center', gap: '8px', color: '#38bdf8', borderColor: 'rgba(56,189,248,0.2)' }}
                >
                  <ExternalLink size={14} /> Detached Window Mode ↗
                </button>
                <button 
                  onClick={() => { setAuthMode('signup'); setAuthPopup(true); setErrorMsg(''); }}
                  className="btn btn-outline" 
                  style={{ justifyContent: 'center' }}
                >
                  Join the Squad
                </button>
              </div>

              <div style={{ marginTop: '36px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                <span className="mono" style={{ fontSize: '.72rem', color: '#475569', display: 'block' }}>
                  Sacred Gita Hint: Krodhad bhavati sammohah...
                </span>
                <span className="mono" style={{ fontSize: '.72rem', color: '#6366f1', display: 'block', marginTop: '4px' }}>
                  Use admin / kali for full clearance.
                </span>
              </div>
            </div>
          </div>
        ) : (
          
          /* ── AUTHENTICATED: GLORIOUS HACKER PORTAL DASHBOARD ── */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            {/* Dashboard Sub-Header */}
            <div className="glass" style={{
              borderRadius: '16px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              border: '1px solid rgba(99,102,241,0.25)',
              background: 'rgba(9, 7, 30, 0.6)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  animation: 'pulse-dot 1.5s infinite'
                }} />
                <div>
                  <span style={{ fontSize: '.75rem', color: '#64748b', display: 'block', fontWeight: 600, textTransform: 'uppercase' }}>Operator Mode</span>
                  <span style={{ fontFamily: "var(--ffd)", fontWeight: 700, fontSize: '.95rem', color: '#fff' }}>
                    Welcome back, Navneet (Administrator) 👑
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="badge" style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)' }}>
                  Twins: Sleeping 🍼
                </span>
                <button 
                  onClick={openDetachedWindow}
                  className="btn btn-outline btn-sm" 
                  style={{ gap: '6px', borderColor: 'rgba(99,102,241,0.3)', color: '#a5b4fc' }}
                >
                  <ExternalLink size={13} /> Standalone View ↗
                </button>
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm" 
                  style={{ gap: '6px', borderColor: 'rgba(239,68,68,0.2)', color: '#f43f5e' }}
                >
                  <LogOut size={13} /> Lock Console
                </button>
              </div>
            </div>

            {/* Dashboard Core Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }} className="grid-2">
              
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* 1. Terminal / Agent Console */}
                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '400px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Terminal size={18} color="#06b6d4" />
                      <h3 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.05rem' }}>Antigravity CLI Interactive Console</h3>
                    </div>
                    <span className="mono" style={{ fontSize: '.68rem', color: '#475569', marginLeft: 'auto' }}>v2.0-secure-port</span>
                  </div>

                  {/* Terminal Screen */}
                  <div style={{
                    flex: 1,
                    background: '#020206',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: '10px',
                    padding: '14px',
                    fontFamily: "var(--ffm)",
                    fontSize: '.76rem',
                    color: '#a5b4fc',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {logs.map((log, idx) => (
                      <div key={idx} style={{ 
                        whiteSpace: 'pre-wrap', 
                        lineHeight: 1.5,
                        color: log.startsWith('neet@antigravity') ? '#22d3ee' : log.includes('Gita') ? '#ec4899' : '#a5b4fc'
                      }}>
                        {log}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>

                  {/* Console inputs */}
                  <form onSubmit={triggerTerminalCommand} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <span style={{ fontFamily: "var(--ffm)", fontSize: '.85rem', color: '#6366f1', alignSelf: 'center' }}>$</span>
                    <input 
                      type="text" 
                      value={terminalInput}
                      onChange={e => setTerminalInput(e.target.value)}
                      placeholder="Type a command (e.g. /gita, /spawn, /wifey, help)..."
                      className="footer-newsletter-input"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.2)' }}
                    />
                    <button type="submit" className="btn btn-primary btn-sm">
                      <Send size={13} />
                    </button>
                  </form>

                  {/* Quick-tap action chips */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {[
                      { l: 'Spawn Sierra Agent', cmd: '/spawn sierra' },
                      { l: 'Gita Verse Dev-Wisdom', cmd: '/gita' },
                      { l: 'Check Indore Crops', cmd: '/indore' },
                      { l: 'Trigger wifey check', cmd: '/wifey' },
                      { l: 'Clear Console Logs', cmd: 'clear' }
                    ].map((btn, i) => (
                      <button 
                        key={i} 
                        onClick={() => { setTerminalInput(btn.cmd); }}
                        style={{
                          background: 'rgba(99,102,241,0.06)',
                          border: '1px solid rgba(99,102,241,0.15)',
                          borderRadius: '6px',
                          color: '#a5b4fc',
                          fontSize: '.68rem',
                          padding: '4px 10px',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        {btn.l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. B.Sc Agriculture: Indore Soil Database */}
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Sprout size={20} color="#10b981" />
                    <h3 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.1rem' }}>
                      B.Sc Agriculture Crop & Soil Simulator (Indore Village)
                    </h3>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '.83rem', lineHeight: 1.5, marginBottom: '20px' }}>
                    Adjust Indore regional parameters below to calculate fertilizer needs and crop compatibility. Stop over-engineering code, look at actual dirt!
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="grid-2">
                    
                    {/* pH Slider */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '.78rem', color: '#94a3b8', fontWeight: 600 }}>SOIL pH SCALE</span>
                        <span style={{ fontSize: '.85rem', color: '#10b981', fontWeight: 'bold' }}>{soilPh} pH</span>
                      </div>
                      <input 
                        type="range" 
                        min="4.0" 
                        max="9.0" 
                        step="0.1" 
                        value={soilPh} 
                        onChange={e => setSoilPh(parseFloat(e.target.value))} 
                        style={{ width: '100%', cursor: 'pointer', accentColor: '#10b981' }} 
                      />
                      <div style={{ display: 'flex', justifyBetween: 'space-between', fontSize: '.6rem', color: '#475569', marginTop: '4px' }}>
                        <span>Acidic (4.0)</span>
                        <span>Neutral (7.0)</span>
                        <span>Alkaline (9.0)</span>
                      </div>
                    </div>

                    {/* Nitrogen Slider */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '.78rem', color: '#94a3b8', fontWeight: 600 }}>NITROGEN LEVEL</span>
                        <span style={{ fontSize: '.85rem', color: '#22d3ee', fontWeight: 'bold' }}>{nitrogen} kg/ha</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={nitrogen} 
                        onChange={e => setNitrogen(parseInt(e.target.value))} 
                        style={{ width: '100%', cursor: 'pointer', accentColor: '#22d3ee' }} 
                      />
                      <div style={{ display: 'flex', justifyBetween: 'space-between', fontSize: '.6rem', color: '#475569', marginTop: '4px' }}>
                        <span>Low (10)</span>
                        <span>Optimal (50)</span>
                        <span>High (100)</span>
                      </div>
                    </div>

                  </div>

                  {/* Calculated analysis output */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.04)',
                    border: '1px solid rgba(16, 185, 129, 0.18)',
                    borderRadius: '10px',
                    padding: '16px',
                    color: '#a5b4fc',
                    fontSize: '.85rem',
                    lineHeight: 1.6
                  }}>
                    <span style={{ fontSize: '.68rem', color: '#10b981', display: 'block', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Indore Farm Intelligence Report
                    </span>
                    {getCropAdvice()}
                  </div>

                </div>

              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* 3. Apurva Wifey Alert Status Core */}
                <div className="glass-card" style={{ 
                  padding: '24px', 
                  border: apurvaStatus === 'CRITICAL' ? '1px solid rgba(239,68,68,0.4)' : undefined,
                  background: apurvaStatus === 'CRITICAL' ? 'rgba(239,68,68,0.06)' : undefined
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Flame size={20} color={apurvaStatus === 'CRITICAL' ? '#ef4444' : '#f59e0b'} />
                    <h3 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.1rem' }}>
                      Apurva Radar Sensor (Work-Life Chaos)
                    </h3>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '.83rem', lineHeight: 1.5, marginBottom: '16px' }}>
                    Toggle the threat level of Apurva checking on the studio. Avoid staying up till 4 AM rewriting absolute glassmorphism layouts!
                  </p>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    {[
                      { s: 'CHILL', c: '#10b981', desc: 'Apurva is relaxing. Continue mechanical keyboard clacking safely.' },
                      { s: 'WARNING', c: '#f59e0b', desc: 'Apurva asks you to get off the computer. Twin baby Munnar is moving.' },
                      { s: 'CRITICAL', c: '#ef4444', desc: 'Twins Munnar & Hyan are awake! Apurva approaches. Flee the desk immediately!' }
                    ].map((level) => (
                      <button
                        key={level.s}
                        onClick={() => {
                          setApurvaStatus(level.s);
                          setLogs(prev => [...prev, `🚨 [Alert System] Navneet changed Apurva radar target level to ${level.s}.`]);
                        }}
                        style={{
                          flex: 1,
                          padding: '10px 6px',
                          borderRadius: '8px',
                          border: apurvaStatus === level.s ? `2px solid ${level.c}` : '1px solid rgba(255,255,255,0.05)',
                          background: apurvaStatus === level.s ? `${level.c}18` : 'rgba(255,255,255,0.01)',
                          color: apurvaStatus === level.s ? '#fff' : '#64748b',
                          fontFamily: "var(--ffd)",
                          fontWeight: 'bold',
                          fontSize: '.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        {level.s}
                      </button>
                    ))}
                  </div>

                  <div style={{
                    background: apurvaStatus === 'CRITICAL' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.02)',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '.78rem',
                    color: apurvaStatus === 'CRITICAL' ? '#f43f5e' : '#cbd5e1',
                    lineHeight: 1.5,
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}>
                    <strong>Active Directive:</strong> {
                      apurvaStatus === 'CHILL' ? "Performing normal high-frequency agency operations." :
                      apurvaStatus === 'WARNING' ? "Step away from the screen, Neet. She is the only one in the house with common sense right now!" :
                      "CRITICAL LOCK INITIATED! GO SOOTHE THE BABIES! I CANNOT SOOTHE TWINS FROM A DOCKER CONTAINER!"
                    }
                  </div>
                </div>

                {/* 4. Daily Calisthenics reps tracker */}
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <Dumbbell size={20} color="#8b5cf6" />
                    <h3 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.1rem' }}>
                      Navneet's Finger & Core Calisthenics
                    </h3>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '.83rem', lineHeight: 1.5, marginBottom: '18px' }}>
                    Finger calisthenics on the mechanical keyboard pays the bills, but real pull-ups build the physical master. Track reps:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div>
                        <span style={{ fontSize: '.85rem', fontWeight: 'bold', display: 'block' }}>Muscle-Ups (Strict)</span>
                        <span style={{ fontSize: '.7rem', color: '#8b5cf6' }}>Goal: 15 reps cleanly</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                        <span className="mono" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#8b5cf6' }}>{muscleUps}</span>
                        <button onClick={() => incrementRep('mu')} className="btn btn-primary btn-sm" style={{ padding: '4px 10px', borderRadius: '6px' }}>+1</button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div>
                        <span style={{ fontSize: '.85rem', fontWeight: 'bold', display: 'block' }}>Deep Parallel Bar Dips</span>
                        <span style={{ fontSize: '.7rem', color: '#22d3ee' }}>Goal: 40 reps</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                        <span className="mono" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#22d3ee' }}>{dips}</span>
                        <button onClick={() => incrementRep('dip')} className="btn btn-primary btn-sm" style={{ padding: '4px 10px', borderRadius: '6px' }}>+1</button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div>
                        <span style={{ fontSize: '.85rem', fontWeight: 'bold', display: 'block' }}>Explosive Pull-Ups</span>
                        <span style={{ fontSize: '.7rem', color: '#10b981' }}>Goal: 35 reps</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                        <span className="mono" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>{pullups}</span>
                        <button onClick={() => incrementRep('pull')} className="btn btn-primary btn-sm" style={{ padding: '4px 10px', borderRadius: '6px' }}>+1</button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 5. Origin Music Hub Lyric Generator */}
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <Sparkles size={20} color="#ec4899" />
                    <h3 style={{ fontFamily: "var(--ffd)", fontWeight: 800, fontSize: '1.1rem' }}>
                      Origin Music Hub: Custom Lyric Synthesizer
                    </h3>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '.83rem', lineHeight: 1.5, marginBottom: '16px' }}>
                    Select a core atmospheric theme of Navneet's dad/dev life, and generate beautiful, highly emotional lyrics instantly!
                  </p>

                  <div className="form-group">
                    <label>Select Core Theme</label>
                    <select 
                      value={selectedVibe} 
                      onChange={e => setSelectedVibe(e.target.value)} 
                      className="form-select"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: '#fff' }}
                    >
                      <option value="dad">Indore Dad late-night delusions</option>
                      <option value="gita">The Bhagavad Gita Equanimity state</option>
                      <option value="gaming">E-Sports BGMI Pochinki drops</option>
                    </select>
                  </div>

                  <button 
                    onClick={generateSongAction}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                    disabled={generatingSong}
                  >
                    {generatingSong ? (
                      <><RefreshCw size={14} className="spin-loader" style={{ animation: 'spin 1s linear infinite' }} /> Synthesizing Track...</>
                    ) : (
                      <><Play size={14} /> Synthesize Song Lyrics</>
                    )}
                  </button>

                  {generatedSong && (
                    <div style={{
                      marginTop: '20px',
                      background: 'rgba(236,72,153,0.03)',
                      border: '1px solid rgba(236,72,153,0.25)',
                      borderRadius: '12px',
                      padding: '16px'
                    }}>
                      <div style={{ display: 'flex', justifyBetween: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px solid rgba(236,72,153,0.15)', paddingBottom: '6px' }}>
                        <span style={{ fontSize: '.75rem', fontWeight: 'bold', color: '#ec4899', textTransform: 'uppercase' }}>
                          Title: {generatedSong.title}
                        </span>
                        <span style={{ fontSize: '.6rem', color: '#64748b' }}>Origin v1.4</span>
                      </div>
                      <pre style={{
                        fontFamily: "var(--ffm)",
                        fontSize: '.72rem',
                        color: '#cbd5e1',
                        whiteSpace: 'pre-wrap',
                        maxHeight: '220px',
                        overflowY: 'auto',
                        lineHeight: 1.6
                      }}>
                        {generatedSong.lyrics}
                      </pre>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>
        )}
      </div>

      {/* ── POPUP LOGIN/SIGNUP MODAL ── */}
      {authPopup && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(2, 2, 8, 0.85)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '16px'
        }}>
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '440px',
            padding: '36px 28px',
            position: 'relative',
            boxShadow: '0 24px 64px rgba(99,102,241,0.25)',
            border: '1px solid rgba(99,102,241,0.3)',
            animation: 'float-y 8s ease-in-out infinite'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setAuthPopup(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '4px'
              }}
            >
              ✕
            </button>

            {/* Auth Tab selectors */}
            <div style={{ display: 'flex', gap: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '14px', marginBottom: '24px' }}>
              <button 
                onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: authMode === 'login' ? '#a5b4fc' : '#475569',
                  fontFamily: "var(--ffd)",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  paddingBottom: '4px',
                  borderBottom: authMode === 'login' ? '2px solid #6366f1' : 'none'
                }}
              >
                Developer Sign In
              </button>
              <button 
                onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: authMode === 'signup' ? '#a5b4fc' : '#475569',
                  fontFamily: "var(--ffd)",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  paddingBottom: '4px',
                  borderBottom: authMode === 'signup' ? '2px solid #8b5cf6' : 'none'
                }}
              >
                Join Squad
              </button>
            </div>

            {/* Sarcastic error display */}
            {errorMsg && (
              <div style={{
                padding: '12px 14px',
                borderRadius: '8px',
                background: 'rgba(239,68,68,0.06)',
                border: '1px solid rgba(239,68,68,0.2)',
                color: '#f43f5e',
                fontSize: '.78rem',
                lineHeight: 1.5,
                marginBottom: '16px'
              }}>
                {errorMsg}
              </div>
            )}

            {/* Sarcastic Success Display */}
            {successMsg && (
              <div style={{
                padding: '12px 14px',
                borderRadius: '8px',
                background: 'rgba(16,185,129,0.06)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: '#34d399',
                fontSize: '.78rem',
                lineHeight: 1.5,
                marginBottom: '16px'
              }}>
                {successMsg}
              </div>
            )}

            {/* LOGIN FORM */}
            {authMode === 'login' ? (
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Operator ID / Username</label>
                  <input 
                    type="text" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter 'admin' for master access..." 
                    className="form-input" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Cryptographic Passkey</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter the sacred word..." 
                    className="form-input" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                  Unlock Agent Decryption Console
                </button>
              </form>
            ) : (
              
              /* SIGNUP FORM */
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label>Developer Nickname</label>
                  <input 
                    type="text" 
                    value={signupUser}
                    onChange={e => setSignupUser(e.target.value)}
                    placeholder="e.g. Indore_Sniper" 
                    className="form-input" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                    placeholder="you@agency.world" 
                    className="form-input" 
                    required 
                  />
                </div>
                <p style={{ fontSize: '.7rem', color: '#64748b', lineHeight: 1.4, marginBottom: '14px' }}>
                  * Signing up gives you access to public waitlists. Absolute executive clearance is only provided via 'kali' security keys!
                </p>
                <button type="submit" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(139,92,246,0.3)', color: '#a5b4fc' }}>
                  Register Minion Protocol
                </button>
              </form>
            )}

            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '.75rem', color: '#475569' }}>
              "Equanimity is called yoga. Stop stressing and just write the code." 🕉️
            </div>
          </div>
        </div>
      )}
    </div>
  );
}