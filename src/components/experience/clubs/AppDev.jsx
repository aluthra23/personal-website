// src/components/experience/my_work/clubs/AppDev.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const AppDev = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Software Engineer</h3>
      </div>
      <img 
        src={'https://appdevclub.com/logo256.png'}
        alt="App Dev Club"
        className="education-second-logo"
      />
      <p className="education-subtitle">App Dev Club</p>
      <p className="education-second-subtitle">October 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description"></p>



      <LinkCard
        text="App Dev Club"
        url="https://appdevclub.com/"
        icon={'https://appdevclub.com/logo256.png'}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default AppDev;
