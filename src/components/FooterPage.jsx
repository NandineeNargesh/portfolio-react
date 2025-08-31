import React from 'react';
import './Footer.css';

const FooterPage = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
<h3 className="footer-logo">Portfolio</h3>

                <p>&copy; 2025 Nandinee Nargesh. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;