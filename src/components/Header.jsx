import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Portfolio</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="header-button">Let's talk</button>
    </header>
  );
};

export default Header;