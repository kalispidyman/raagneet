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
            <p className="footer-tagline">We build AI-powered systems and premium digital experiences that drive real business growth.</p>
            <div className="footer-contact-info">
              <a href="mailto:hello@neetai.studio" className="footer-contact-item">
                <Mail size={15} />
                <span>hello@neetai.studio</span>
              </a>
              <a href="tel:+919876543210" className="footer-contact-item">
                <Phone size={15} />
                <span>+91 98765 43210</span>
              </a>
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
            <h4>Get Started</h4>
            <Link to="/contact">Free Consultation</Link>
            <Link to="/contact">Get a Quote</Link>
            <Link to="/products">View Pricing</Link>
            <Link to="/about">Our Process</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NEET AI Studio. All rights reserved.</p>
          <p className="footer-made">Crafted with precision in India</p>
        </div>
      </div>
    </footer>
  );
}