import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ category, title, image, githubLink, liveLink, layout, bio }) => {
  return (
    <div className={`project-card glowing-card ${layout}`}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <p className="project-category">{category}</p>
        <h4 className="project-title">{title}</h4>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-icon">
              <i className="fab fa-github"></i>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-icon">
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
      </div>
      <p className='project-bio'>{bio}</p>
    </div>
  );
};

export default ProjectCard;