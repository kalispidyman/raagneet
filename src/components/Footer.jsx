import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size="sm" />
          <p>
            Building the world's most powerful AI systems, autonomous bots, and next-generation intelligence platforms. We engineer the future of human-AI collaboration.
          </p>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <Link to="/products">Services</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">Careers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Blog</Link>
          <Link to="/about">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} NEET AI Studio. All rights reserved.</span>
        <span>Crafted with precision • Powered by neural innovation</span>
      </div>
    </footer>
  );
}