import React from 'react';
import PropTypes from 'prop-types';

const BadgeCarousel = ({ badges }) => {
  // Duplicate badges for infinite scroll effect
  const extendedBadges = [...badges, ...badges];

  return (
    <div className="badge-carousel-container">
      <div className="badges-wrapper">
        <div className="badges-slide">
          {extendedBadges.map((badge, index) => (
            <div key={`${badge.name}-${index}`} className="badge-item">
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
      </div>
    </div>
  );
};

BadgeCarousel.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(BadgeCarousel);
