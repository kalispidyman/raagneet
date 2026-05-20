import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

interface TokenUsage { prompt_tokens: number; completion_tokens: number; total_tokens: number; }
interface ChatMessage { sender: 'user' | 'bot'; text: string; timestamp: string; }
interface SessionData {
  loggedIn: boolean; email: string | null; name: string | null; picture: string | null;
  hasApiKey: boolean; maskedApiKey: string | null;
  usage?: TokenUsage; chats?: ChatMessage[];
}

function Toast({ msg, type, onDone }: { msg: string; type: 'success' | 'error'; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t); }, []);
  return (
    <div className={`toast ${type}`}>
      {type === 'success' ? '✅' : '❌'} {msg}
    </div>
  );
}

export default function App() {
  const [session, setSession] = useState<SessionData>({
    loggedIn: false, email: null, name: null, picture: null,
    hasApiKey: false, maskedApiKey: null,
    usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }, chats: []
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [boaKey, setBoaKey] = useState('');
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const fetchSession = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/session`);
      if (res.ok) setSession(await res.json());
    } catch (_) {}
  };

  const fetchLogs = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/logs`);
      if (res.ok) { const d = await res.json(); setLogs(d.logs || []); }
    } catch (_) {}
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([fetchSession(), fetchLogs()]);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleLogin = () => { window.location.href = `${BACKEND_URL}/api/auth/google/login`; };
  const handleLogout = async () => {
    await fetch(`${BACKEND_URL}/api/logout`, { method: 'POST' });
    handleRefresh();
  };

  const handleSaveKey = async () => {
    if (!boaKey.trim()) { setToast({ msg: 'API key cannot be empty!', type: 'error' }); return; }
    setIsSavingKey(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/credentials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: boaKey.trim() })
      });
      if (res.ok) {
        setBoaKey('');
        setToast({ msg: 'API Key updated successfully!', type: 'success' });
        fetchSession();
      } else {
        const err = await res.json();
        setToast({ msg: err.error || 'Failed to update key', type: 'error' });
      }
    } catch (_) {
      setToast({ msg: 'Network error', type: 'error' });
    } finally {
      setIsSavingKey(false);
    }
  };

  useEffect(() => {
    handleRefresh();
    const iv = setInterval(() => { fetchSession(); fetchLogs(); }, 2500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [session.chats]);

  const usage = session.usage || { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };
  const total = usage.total_tokens || 1;
  const promptPct = Math.round((usage.prompt_tokens / total) * 100) || 0;
  const completionPct = Math.round((usage.completion_tokens / total) * 100) || 0;
  const isBoa = session.maskedApiKey?.startsWith('boa-') || (!session.hasApiKey);
  const modelName = isBoa ? 'Claude Sonnet (Thinking)' : 'Gemini 2.5 Flash';

  const fmt = (iso: string) => { try { return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); } catch { return ''; } };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', position: 'relative', zIndex: 1 }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '68px',
        background: 'rgba(4,6,13,0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-orb">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(90deg, #93c5fd, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              NEET BOT STUDIO
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              AI-Powered Telegram Command Center
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className={`stat-badge ${session.hasApiKey ? 'active' : 'inactive'}`}>
            <span className="dot" />
            {session.hasApiKey ? 'API ACTIVE' : 'NO API KEY'}
          </div>
          <button
            onClick={handleRefresh}
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-secondary)', borderRadius: '8px', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--transition)' }}
            title="Refresh"
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ animation: isRefreshing ? 'spin 0.6s linear infinite' : 'none' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.213 15M21 21v-5h-.581m0 0a8.003 8.003 0 01-15.357-2" />
            </svg>
          </button>
          {session.loggedIn ? (
            <button onClick={handleLogout} style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'var(--red)', borderRadius: '8px', cursor: 'pointer', padding: '7px 14px', fontSize: '0.75rem', fontWeight: 600, transition: 'all var(--transition)' }}>
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="glow-btn" style={{ padding: '7px 18px', fontSize: '0.78rem' }}>
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <div className="hero-wrapper glass" style={{ margin: '1.25rem', borderRadius: '24px', minHeight: '180px' }}>
        {/* Background orbs */}
        <div className="hero-bg-orb" style={{ width: '350px', height: '350px', background: 'rgba(139,92,246,0.15)', top: '-80px', left: '-60px' }} />
        <div className="hero-bg-orb" style={{ width: '250px', height: '250px', background: 'rgba(59,130,246,0.12)', bottom: '-60px', right: '-40px' }} />
        <div className="hero-bg-orb" style={{ width: '180px', height: '180px', background: 'rgba(6,182,212,0.08)', top: '40%', left: '50%' }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hero-chip">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A78BFA', animation: 'pulse-dot 2s infinite' }} />
            Autonomous AI Bot Platform
          </div>

          <h1 className="hero-title">
            Your AI Architect,<br />On Telegram
          </h1>

          <p className="hero-subtitle">
            Generate, commit & deploy full-stack React projects via natural language — directly from Telegram. Powered by Claude Sonnet & Gemini 2.5 Flash.
          </p>

          {/* Status Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'GitHub Auto-Commit', color: '#34D399', bg: 'rgba(16,185,129,0.08)' },
              { label: 'Vercel Auto-Deploy', color: '#60A5FA', bg: 'rgba(59,130,246,0.08)' },
              { label: modelName, color: '#C4B5FD', bg: 'rgba(139,92,246,0.08)' },
              { label: 'Self-Healing Builds', color: '#F9A8D4', bg: 'rgba(236,72,153,0.08)' },
            ].map(p => (
              <div key={p.label} style={{ padding: '4px 12px', borderRadius: '100px', border: `1px solid ${p.color}30`, background: p.bg, color: p.color, fontSize: '0.7rem', fontWeight: 600 }}>
                ✦ {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <main style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: '1.25rem', padding: '0 1.25rem 1.25rem', minHeight: 0 }}>

        {/* ── LEFT: CHAT MIRROR ── */}
        <section className="glass" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', maxHeight: '65vh' }}>
          {/* Header */}
          <div style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div className="icon-box" style={{ background: 'rgba(59,130,246,0.1)' }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#3B82F6" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                Telegram Chat Mirror
              </div>
              <div style={{ fontSize: '0.62rem', color: 'var(--blue)', fontWeight: 600, marginTop: '1px' }}>
                Real-time live updates
              </div>
            </div>
            {session.chats && session.chats.length > 0 && (
              <div style={{ marginLeft: 'auto', fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {session.chats.length} messages
              </div>
            )}
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {session.chats && session.chats.length > 0 ? (
              session.chats.map((c, i) => {
                const isUser = c.sender === 'user';
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start', gap: '3px' }}>
                      <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>{c.text}</div>
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {isUser ? 'You' : '🤖 Bot'} · {fmt(c.timestamp)}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', gap: '10px', padding: '2rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226A8.001 8.001 0 012.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '4px' }}>No messages yet</div>
                  <div style={{ fontSize: '0.7rem' }}>Send a message to your bot on Telegram to start mirroring.</div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </section>

        {/* ── RIGHT COLUMN ── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', maxHeight: '65vh' }}>

          {/* Profile Card */}
          <div className="glass" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <img
              src={session.picture || `https://api.dicebear.com/7.x/bottts/svg?seed=neet-bot`}
              alt="avatar"
              style={{ width: '42px', height: '42px', borderRadius: '10px', border: '2px solid rgba(139,92,246,0.3)', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {session.name || 'Anonymous User'}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {session.email || 'Not logged in'}
              </div>
            </div>
            {session.loggedIn ? (
              <button onClick={handleLogout} style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)', color: 'var(--red)', borderRadius: '7px', cursor: 'pointer', padding: '5px 10px', fontSize: '0.7rem', fontWeight: 600, flexShrink: 0, transition: 'all var(--transition)' }}>
                Log out
              </button>
            ) : (
              <button onClick={handleLogin} className="glow-btn" style={{ padding: '5px 12px', fontSize: '0.7rem', flexShrink: 0 }}>
                Sign In
              </button>
            )}
          </div>

          {/* ── BOA API KEY CARD ── */}
          <div className="glass" style={{ padding: '1.1rem 1.25rem', flexShrink: 0, border: '1px solid rgba(139,92,246,0.2)', background: 'rgba(139,92,246,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <div className="icon-box" style={{ background: 'rgba(139,92,246,0.12)' }}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#A78BFA" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Bay of Assets API Key</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '1px' }}>
                  Current: <span style={{ fontFamily: 'var(--font-mono)', color: '#A78BFA' }}>{session.maskedApiKey || 'Not configured'}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
              <input
                id="boa-key-input"
                type="password"
                className="field-input"
                placeholder="boa-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                value={boaKey}
                onChange={e => setBoaKey(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSaveKey()}
                style={{ flex: 1 }}
              />
              <button
                id="boa-key-confirm"
                className="confirm-btn"
                onClick={handleSaveKey}
                disabled={isSavingKey || !boaKey.trim()}
              >
                {isSavingKey ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ animation: 'spin 0.7s linear infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.213 15" />
                  </svg>
                ) : (
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {isSavingKey ? 'Saving…' : 'Confirm'}
              </button>
            </div>

            <div style={{ marginTop: '8px', fontSize: '0.62rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Paste your key and press Confirm or hit Enter to apply. No page reload needed.
            </div>
          </div>

          {/* Token Metrics */}
          <div className="glass" style={{ padding: '1rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>Token Usage</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {usage.total_tokens.toLocaleString()}
              </div>
            </div>

            {/* Progress bar */}
            <div className="token-bar" style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', height: '100%' }}>
                <div className="token-bar-fill" style={{ width: `${promptPct}%`, background: 'var(--blue)' }} />
                <div className="token-bar-fill" style={{ width: `${completionPct}%`, background: 'var(--purple)' }} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--blue)' }}>● In: {usage.prompt_tokens.toLocaleString()} ({promptPct}%)</span>
              <span style={{ color: 'var(--purple)' }}>● Out: {usage.completion_tokens.toLocaleString()} ({completionPct}%)</span>
            </div>

            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Model</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '6px', padding: '2px 8px' }}>
                {modelName}
              </div>
            </div>
          </div>

          {/* Live Log Feed */}
          <div className="glass terminal-scanline" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <div style={{ padding: '0.7rem 1rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Live Activity Feed</div>
              <div style={{ marginLeft: 'auto', fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                {logs.length} entries
              </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {logs.length > 0 ? [...logs].reverse().map((log, i) => {
                const isErr = log.includes('⚠️') || log.toLowerCase().includes('error') || log.toLowerCase().includes('fail');
                const isOk  = log.includes('✅') || log.toLowerCase().includes('success') || log.toLowerCase().includes('deployed');
                return (
                  <div key={i} className="log-entry" style={{
                    color: isErr ? '#F87171' : isOk ? '#34D399' : '#64748B',
                    borderLeft: `2px solid ${i === 0 ? '#8B5CF6' : isErr ? '#EF4444' : isOk ? '#10B981' : 'transparent'}`,
                    background: i === 0 ? 'rgba(139,92,246,0.05)' : 'transparent',
                  }}>{log}</div>
                );
              }) : (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', padding: '1rem', textAlign: 'center' }}>
                  Waiting for bot activity…
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Toast */}
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </div>
  );
}
