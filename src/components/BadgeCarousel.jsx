import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const BadgeCarousel = ({ badges, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(badges.length / itemsPerPage);

  // Auto-slide functionality
  useEffect(() => {
    if (badges.length <= itemsPerPage) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalPages);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [badges.length, totalPages, autoSlideInterval]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  };

  // Get current visible badges
  const getVisibleBadges = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    
    if (end <= badges.length) {
      return badges.slice(start, end);
    } else {
      return [
        ...badges.slice(start),
        ...badges.slice(0, end - badges.length)
      ];
    }
  };

  return (
    <div className="badge-carousel-container">
      <button 
        onClick={prevSlide}
        className="carousel-button prev"
        aria-label="Previous badges"
      >
        &lt;
      </button>
      
      <div className="badges-wrapper">
        <div className="badges-slide">
          {getVisibleBadges().map((badge, index) => (
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

      <button 
        onClick={nextSlide}
        className="carousel-button next"
        aria-label="Next badges"
      >
        &gt;
      </button>

      <div className="carousel-indicators">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`indicator-dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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
  autoSlideInterval: PropTypes.number,
};

export default React.memo(BadgeCarousel);