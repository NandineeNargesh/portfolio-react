import React from 'react';
import './AboutPage.css';
import profileImage from '../assets/user.png';
import resumePDF from '../assets/Nandinee_Nargesh_Resume.pdf';

const pageData = {
    name: "Nandinee Nargesh",
    bio: "Full-Stack Developer with a strong foundation in Data Structures and Algorithms. I specialize in building end-to-end web applications using modern technologies while applying problem-solving skills to create efficient and optimized solutions.",
    experience: [
        { "dates": "01/05/2025 – 30/06/2025", "title": "Full Stack Developer", "subtitle": "LaunchEd Global" }
    ],
    education: [
        { "title": "Bachelor of Technology", "subtitle": "Jabalpur Engineering College, JEC Jabalpur", "dates": "2022 - 2026" },
        { "title": "CLASS XII", "subtitle": "Eklavya Model Residential School kukshi Dhar M.P", "dates": "2020 - 2021" },
        { "title": "CLASS X", "subtitle": "Eklavya Model Residential School kukshi Dhar M.P", "dates": "2018 - 2019" },
    ],
};

const AboutPage = () => {
    return (
        <main className="about-page">
            <section className="summary-section">
                <h2 className="sub-title">
                    <span className="sparkle">✶</span> SELF-SUMMARY <span className="sparkle">✶</span>
                </h2>
                <div className="summary-content">
                    <div className="profile-image-card glowing-card">
                        <img src={profileImage} alt="Nandinee Nargesh" className="profile-image" />
                    </div>
                    <div className="bio-card glowing-card">
                        <h3>Nandinee Nargesh</h3>
                        <p className='card-subtitle'>{pageData.bio}</p>
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <h2 className="sub-title">EXPERIENCE</h2>
                <div className="experience-box glowing-card">
                    {pageData.experience.map((item, index) => (
                        <div key={index} className="experience-item">
                            <p className="card-dates">{item.dates}</p>
                            <h4>{item.title}</h4>
                            <p className="card-subtitle">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <h2 className="sub-title">SKILLS</h2>
                <div className="skills-box glowing-card">
                    <div className="skills-content">
                        <span>     <h4>       Frontend Development: </h4>  <p className='card-subtitle'>HTML,   CSS,   JavaScript,   React.js,   Next.js,   TypeScript,   Tailwind CSS </p>  </span>

                        <span>     <h4>       Backend & CMS: </h4>  <p className='card-subtitle'>Node.js (basic), Contentful CMS</p>  </span>

                        <span>     <h4>       Version Control & Collaboration: </h4>  <p className='card-subtitle'>Git, GitHub</p>  </span>

                        <span>     <h4>       Programming & DSA: </h4>  <p className='card-subtitle'>C++ (Primary Language), Data Structures & Algorithms</p>  </span>

                        <span>     <h4>       Design & Tools: </h4>  <p className='card-subtitle'>Adobe Illustrator, Canva</p>  </span>
                    </div>
                </div>
            </section>
            
            <section className="education-section">
                <h2 className="sub-title">EDUCATION</h2>
                <div className="education-box glowing-card">
                    {pageData.education.map((item, index) => (
                        <div key={index} className="education-item">
                            <p className="card-dates">{item.dates}</p>
                            <h4>{item.title}</h4>
                            <p className="card-subtitle">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="resume-socials-container">
                <section className="resume-section">
                    <h2 className="sub-title">RESUME</h2>
                    <div className="resume-box glowing-card">
                        <a href={resumePDF} download className="resume-button">Download CV</a>
                    </div>
                </section>

                <section className="socials-section">
                    <h2 className="sub-title">SOCIAL INFO</h2>
                    <div className="socials-box glowing-card">
                        <a href="https://www.linkedin.com/in/nandinee-nargesh-13731221a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/NandineeNargesh" className="social-icon"><i className="fab fa-github"></i></a>
                        <a href="https://leetcode.com/u/nargeshnandinee/" className="social-icon"><i className="fas fa-code"></i></a>
                    </div>
                </section>
               
            </div>
        </main>
    );
};

export default AboutPage;