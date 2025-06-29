// src/components/Badges.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Badges = ({ badges }) => {
  return (
    <div className="badges-container" aria-label="Skills and technologies">
      {badges.map((badge) => (
        <div key={badge.name} className="badge-item">
          <img 
            src={badge.imageUrl} 
            alt={badge.name} 
            className="badge-image"
            loading="lazy"
            width="60"
            height="60"
          />
          <span className="badge-name">{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

Badges.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(Badges);