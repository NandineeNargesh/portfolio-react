import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="contact-grid">
        {/* Left Column: Contact Info */}
        <div className="contact-info-container">
          <div className="info-card">
            <h3 className="info-card-title">CONTACT INFO</h3>
            <div className="info-item">
              <i className="fa-solid fa-envelope info-icon"></i>
              <div className="info-text">
                <p>MAIL US</p>
                <a href="mailto:nandineenargesh14@gmail.com">nandineenargesh14@gmail.com</a>
                 </div>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone info-icon"></i>
              <div className="info-text">
                <p>CONTACT US</p>
                <p>+91 96*******3</p>

              </div>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-location-dot info-icon"></i>
              <div className="info-text">
                <p>LOCATION</p>
                <p>Indore, M.P</p>
               
              </div>
            </div>
          </div>
          <div className="social-info-card">
            <h3 className="info-card-title">SOCIAL INFO</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nandinee-nargesh-13731221a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/NandineeNargesh" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/nargeshnandinee/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container glowing-card">
          <div className="form-header">
            <h3>Let's work together.</h3>
          </div>
          <form className="contact-form" action="https://formspree.io/f/xjkerpak" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;