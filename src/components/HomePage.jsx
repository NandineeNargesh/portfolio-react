import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import profileImage from '../assets/user.png';
import projImage from '../assets/proj.jpg';
import resume from '../assets/Nandinee_Nargesh_Resume.pdf';


const movingTextContent = " Full-Stack Developer | Passionate About DSA & Problem Solving | Full-Stack Developer | Passionate About DSA & Problem Solving   ";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <main className="home-page">
            <div className="home-grid">
                {/* Profile and About */}
                <div className="card profile-card glowing-card">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <div className="profile-text">
                        <h3 className="card-title">Nandinee Nargesh.</h3>
                        <p className='card-subtitle'> Full-Stack Developer with a strong foundation in Data Structures and Algorithms.I specialize in building end-to-end web applications using modern technologies while applying problem-solving skills to create efficient and optimized solutions.</p>
                    </div>
                    <div className="card-icon" onClick={() => navigate('/about')}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>

                {/* Moving Headline */}
                <div className="card moving-text-card glowing-card">
                    <div className="moving-text-container">
                        <div className="moving-text-content">
                            {movingTextContent}
                        </div>
                    </div>
                </div>

                {/* Projects Card */}
                <div className="card projects-card glowing-card">
                    <div className="card-content">
                        <p className="card-subtitle">SHOWCASE</p>
                        <h3 className="card-title">Projects</h3>
                        <img src={projImage} alt="Project" className="project-img" />
                        <div className="card-icon" onClick={() => navigate('/projects')}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

                {/* Skills Card */}
                <div className="card skills-card glowing-card">
                    <div className="card-content">
                        <p className="card-subtitle">My Expertise</p>
                        <h3 className="card-title">Skills</h3>
                        <div className="card-icon" onClick={() => navigate('/about')}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

                {/* Resume Card */}
                <div className="card resume-card glowing-card">
                    <div className="card-content">
                        <p className="card-subtitle">My Resume</p>
                        <h3 className="card-title">Download My Resume</h3>
                        <div className="card-icon">
                            <a href={resume} download>
                                <i className="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact and Socials */}
                <div className="card contact-info-card glowing-card">
                    <p className="card-subtitle">CONTACT INFO</p>
                    <div className="info-item">
                        <i className="fas fa-envelope info-icon"></i>
                        <div className="info-text">
                            <a href="mailto:nandineenargesh14@gmail.com">nandineenargesh14@gmail.com</a>
                        </div>
                    </div>
                    <div className='info-item'>
                        <i className="fas fa-phone info-icon"></i>
                        <div className="info-text">
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>
                <div className="card socials-card glowing-card">
                    <p className="card-subtitle">SOCIAL INFO</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/nandinee-nargesh" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/nandineenargesh" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://leetcode.com/nandineenargesh" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-code"></i>
                        </a>
                    </div>
                </div>

                {/* Work Together Card */}
                <div className="work-together-card glowing-card">
                    <div className="card-content">
                        <h3>Let's work together.</h3>
                        <button className="contact-button" onClick={() => navigate('/contact')}>Get in touch</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;