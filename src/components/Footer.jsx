import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size="md" />
            <p className="footer-tagline">Building intelligent systems that transform businesses and redefine what's possible with AI.</p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Mail size={15} />
                <span>hello@neetai.studio</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>Indore, India</span>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/products">Services</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <Link to="/products">AI Development</Link>
            <Link to="/products">Web Applications</Link>
            <Link to="/products">Automation Systems</Link>
            <Link to="/products">3D Experiences</Link>
          </div>

          <div className="footer-links-group">
            <h4>Resources</h4>
            <Link to="/technology">Our Stack</Link>
            <Link to="/about">Case Studies</Link>
            <Link to="/contact">Free Consultation</Link>
            <Link to="/contact">Get a Quote</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NEET AI Studio. All rights reserved.</p>
          <p className="footer-made">Crafted with precision in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}