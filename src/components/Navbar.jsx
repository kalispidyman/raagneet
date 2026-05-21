import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Layers, Menu, X } from 'lucide-react';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <>
      <nav ref={navRef} className="navbar" style={{ opacity: 0 }}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <div style={{ width:34, height:34, borderRadius:10, background:'linear-gradient(135deg,#6366f1,#8b5cf6)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 16px rgba(99,102,241,0.4)' }}>
              <Layers size={18} color="white" />
            </div>
            <span>
              <span style={{ color:'#a5b4fc' }}>NEET</span>
              {' '}AI Studio
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ display:'flex' }}>Get Started</Link>
            <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              {open ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop:8, justifyContent:'center' }} onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </div>
    </>
  );
}
