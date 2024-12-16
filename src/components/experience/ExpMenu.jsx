// src/components/experience/ExperienceMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../skills/skills-menu.css'

const ExperienceMenu = ({ scrollToSection }) => {
  return (
    <div className='skills-menu'>
      {/* <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('internship-experience')} className="skills-menu-item">
          <Link to="#Internship">Internships</Link>
        </button>
      </div> */}

      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('research-experience')} className="skills-menu-item">
          <Link to="#Research">Research</Link>
        </button>
      </div>


      <div className="individual-skills-menu">
        <button onClick={() => scrollToSection('clubs-experience')} className="skills-menu-item">
          <Link to="#Clubs">Clubs</Link>
        </button>
      </div>

    </div>
  );
};

export default ExperienceMenu;
