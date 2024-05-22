// src/components/skills/SkillCard.jsx
import React from 'react';

const SkillCard = ({ title, description, level, logo }) => {
  return (
    <div className="skill-card">
      <div className="skill-logo">
        <img src={logo} className="skill-logo" />
      </div>
      <h3>{title}</h3>
      <p className='skill-level'><strong>Skill Level:</strong> {level}</p>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
