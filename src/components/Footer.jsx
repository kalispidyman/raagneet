import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Globe, Send, Check } from 'lucide-react';
import Logo from './Logo';

const PLATFORM_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Technology', to: '/technology' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const AI_LINKS = [
  { label: 'NeetChat', to: '/products' },
  { label: 'CodeForge', to: '/products' },
  { label: 'VisionCore', to: '/products' },
  { label: 'DataMind', to: '/products' },
  { label: 'AutoPilot', to: '/products' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer">
      {/* Glow orb background accent */}
      <div className="orb" style={{ width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)', bottom: '-80px', left: '8%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          {/* Brand info */}
          <div className="footer-brand">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Logo size="md" />
            </Link>
            <p className="footer-brand-text">
              Building the world's most powerful autonomous AI models, state-of-the-art agent architectures, and responsive 3D platforms.
            </p>
            <div className="social-links" style={{ marginTop: 24 }}>
              {[
                { icon: Github, href: '#', label: 'Github', color: '#f1f5f9' },
                { icon: Twitter, href: '#', label: 'Twitter', color: '#38bdf8' },
                { icon: Linkedin, href: '#', label: 'Linkedin', color: '#0284c7' },
                { icon: Globe, href: '#', label: 'Web', color: '#14b8a6' },
              ].map(({ icon: Icon, href, label, color }, i) => (
                <a key={i} href={href} className="social-link" aria-label={label} style={{ '--hover-color': color }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links split - elegantly structured for grid wrapping */}
          <div className="footer-cols-wrap">
            <div className="footer-col">
              <h4>Platform</h4>
              {PLATFORM_LINKS.map(l => (
                <Link key={l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>

            <div className="footer-col">
              <h4>AI Suite</h4>
              {AI_LINKS.map(l => (
                <Link key={l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Premium Newsletter Box */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p className="newsletter-desc">Subscribe to get deep technical updates, agentic logs, and the latest releases from our studio.</p>
            
            {subscribed ? (
              <div className="newsletter-success" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: '#34d399',
                fontSize: '0.85rem',
                marginTop: '12px'
              }}>
                <Check size={16} />
                <span>You're on the list! Welcome to the future.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form" style={{ marginTop: '14px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your developer email"
                    className="footer-newsletter-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ 
                      padding: '0 18px', 
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="spin-loader" />
                    ) : (
                      <Send size={14} />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-meta">
            <p>© {new Date().getFullYear()} NEET AI Studio. All rights reserved.</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              Designed for extreme performance & absolute equanimity.
            </p>
          </div>
          <p className="footer-signature">
            Built with ❤️ for Neet's Universe
          </p>
        </div>
      </div>
    </footer>
  );
}