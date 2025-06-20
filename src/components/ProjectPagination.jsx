import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectPagination = ({ projects, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  }, [totalPages]);

  const handleNextPage = () => handlePageChange(currentPage + 1);
  const handlePrevPage = () => handlePageChange(currentPage - 1);

  return (
    <div className="projects-section">
      <div className="project-grid">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            {...project}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="pagination-button"
            aria-label="Previous page"
          >
            Previous
          </button>
          
          <span className="page-indicator">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

ProjectPagination.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      skills_list: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  itemsPerPage: PropTypes.number,
};

export default React.memo(ProjectPagination);