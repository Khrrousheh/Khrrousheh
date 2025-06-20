import React from 'react';
import PropTypes from 'prop-types';

const SkillTag = ({ skill }) => (
  <span className="skill-tag" key={skill}>
    {skill}
  </span>
);

SkillTag.propTypes = {
  skill: PropTypes.string.isRequired,
};

const Skills = ({ skills, compact = false }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className={`skills-container ${compact ? 'compact' : ''}`} aria-label="Skills">
      {skills.map((skill) => (
        <SkillTag skill={skill} key={skill} />
      ))}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  compact: PropTypes.bool,
};

export default React.memo(Skills);