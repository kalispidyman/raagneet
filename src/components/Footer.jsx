import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook" className="social-icon">
            <img src="/icons.svg#facebook" alt="Facebook" />
          </a>
          <a href="#twitter" className="social-icon">
            <img src="/icons.svg#twitter" alt="Twitter" />
          </a>
          <a href="#linkedin" className="social-icon">
            <img src="/icons.svg#linkedin" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;