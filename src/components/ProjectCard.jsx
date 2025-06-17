import React from 'react';
import Skills from './Skills'; // Import your existing Skills component

const ProjectCard = ({ title, description, imageUrl, skills_list }) => {
 return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="card-footer">
          <div className="project-tags">
                <div className="project-skills">
                    <Skills skills={skills_list} compact />
                </div>
          </div>
        </div>
      </div>

      {imageUrl && (
        <div className="floating-image">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;