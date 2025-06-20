import React from 'react';
import PropTypes from 'prop-types';
import Skills from './Skills';

const ProjectCard = ({ title, description, imageUrl, skills_list }) => {
  return (
    <article className="project-card" aria-labelledby={`project-${title.replace(/\s+/g, '-').toLowerCase()}-title`}>
      <div className="project-content">
        <h3 id={`project-${title.replace(/\s+/g, '-').toLowerCase()}-title`} className="project-title">
          {title}
        </h3>
        <p className="project-description">{description}</p>
        <div className="card-footer">
          <Skills skills={skills_list} compact />
        </div>
      </div>

      {imageUrl && (
        <div className="floating-image" aria-hidden="true">
          <img 
            src={imageUrl} 
            alt="" 
            className="project-image" 
            loading="lazy"
            width="60"
            height="60"
          />
        </div>
      )}
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  skills_list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(ProjectCard);