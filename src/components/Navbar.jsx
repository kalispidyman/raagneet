import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, Zap } from 'lucide-react';
import Logo from './Logo';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Services' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Detect if current route is the Packages page
  const isPackages = location.pathname === '/packages';

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar-premium ${scrolled ? 'scrolled' : ''} ${isPackages ? 'navbar-packagedark' : ''}`}
        style={{ opacity: 0 }}
      >
        <div className="nav-inner-premium">
          <Link to="/" className="nav-logo-link" onClick={() => setOpen(false)}>
            <Logo size="sm" />
          </Link>

          <ul className="nav-links-premium">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav-link-p${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link to="/contact" className="nav-cta-btn">
              <Zap size={14} />
              <span>Get Started</span>
            </Link>
            <button className="hamburger-premium" onClick={() => setOpen(o => !o)} aria-label="Menu">
              {open ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-premium${open ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `mobile-link-p${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mobile-cta" onClick={() => setOpen(false)}>
            Start Your Project →
          </Link>
        </div>
      </div>
    </>
  );
}