// src/components/skills/SkillsMenu.jsx
import React from 'react';
import './skills-menu.css';
import { Link } from 'react-router-dom';

const SkillsMenu = ({ scrollToSection }) => {
  return (
    <div className='skills-menu'>
      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('general-cs-skills')} className="skills-menu-item">
          <Link to="#GeneralCS">General CS</Link>
        </button>
      </div>

      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('software-engineering-skills')} className="skills-menu-item">
          <Link to="#SoftwareEngineering">Software Engineering</Link>
        </button>
      </div>


      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('data-science-skills')} className="skills-menu-item">
          <Link to="#DataScience">Data Science</Link>
        </button>
      </div>

      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('cybersecurity-skills')} className="skills-menu-item">
          <Link to="#Cybersecurity">Cybersecurity</Link>
        </button>
      </div>
      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('engineering-skills')} className="skills-menu-item">
          <Link to="#Engineering">Engineering</Link>
        </button>
      </div>
    </div>
  );
};

export default SkillsMenu;
