// src/components/skills/SkillCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ title, description, level, logo }) => {
  return (
    <div className="skill-card">
      <div className="skill-logo">
        <img alt={title} src={logo} className="skill-logo" />
      </div>
      <h3>{title}</h3>
      <p className='skill-level'><strong>Skill Level:</strong> {level}</p>
      <p>{description}</p>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default SkillCard;
