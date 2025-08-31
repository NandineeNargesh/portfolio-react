import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-logo">Portfolio</div>
      <nav className="header-nav">
        <a href='/' className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</a>
        <a href='/about' className={currentPage === 'about' ? 'active' : ''} onClick={() => setCurrentPage('about')}>About</a>
        <a  href='/projects' className={currentPage === 'projects' ? 'active' : ''} onClick={() => setCurrentPage('projects')}>Works</a>
        <a href='/contact' className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</a>
      </nav>
    <a href="/contact"> <button className="header-button">Let's talk</button> </a> 
    </header>
  );
};

export default Header;