import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Technology', to: '/technology' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'AI Products',
    links: [
      { label: 'NeetChat', to: '/products' },
      { label: 'CodeForge', to: '/products' },
      { label: 'VisionCore', to: '/products' },
      { label: 'DataMind', to: '/products' },
      { label: 'AutoPilot', to: '/products' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" style={{ display:'inline-flex', alignItems:'center', gap:10, textDecoration:'none', color:'#f1f5f9' }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#6366f1,#8b5cf6)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 16px rgba(99,102,241,0.35)' }}>
                <Layers size={18} color="white" />
              </div>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.05rem' }}>
                <span style={{ color:'#a5b4fc' }}>NEET</span> AI Studio
              </span>
            </Link>
            <p>Building the world's most powerful AI systems, autonomous bots, and next-generation intelligence platforms.</p>
            <div className="social-links" style={{ marginTop:20 }}>
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Globe, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="social-link" aria-label="social">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map(l => (
                <Link key={l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NEET AI Studio. All rights reserved.</p>
          <p style={{ color:'#475569', fontSize:'.78rem' }}>
            Built with ❤️ using React + GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
