import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import ProjectCard from './ProjectCard';
import { contentfulClient } from '../contentful';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'projectsPage',
      order: 'fields.order'
    })
    .then(response => {
      if (response.items) {
        setProjects(response.items);
      }
    })
    .catch(error => console.error(error));
  }, []);

  if (projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <main className="projects-page">
      <section className="projects-section">
        <h2 className="sub-title">
          <span className="sparkle">✶</span> ALL PROJECTS <span className="sparkle">✶</span>
        </h2>
        <div className="projects-grid">
          {projects.map(({ fields }, index) => {
            const cardLayoutClass = fields.layout || 'normal';

            return (
              <ProjectCard
                key={index}
                category={fields.category}
                title={fields.title}
                image={`https:${fields.image.fields.file.url}`}
                githubLink={fields.githubLink}
                liveLink={fields.liveLink}
                layout={cardLayoutClass} // This is the prop for the layout
                bio={fields.bio}
                />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;