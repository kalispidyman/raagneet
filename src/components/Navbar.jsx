import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <div className="navbar-links">
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;