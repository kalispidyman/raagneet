import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p className="copyright">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <p className="designer-credit">
          Designer <span className="handle">@Neet</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;