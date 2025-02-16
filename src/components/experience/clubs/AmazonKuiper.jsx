// src/components/experience/my_work/SourceIQ.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const AmazonKuiper = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Machine Learning Engineer</h3>
      </div>
      <img 
        src="https://media.wired.com/photos/5a99ba72927dc94e67685b9b/1:1/w_700,h_700,c_limit/amazon-a-logo.jpg" 
        alt="SourceIQ" 
        className="education-second-logo"
      />
      <p className="education-subtitle">Amazon Project Kuiper</p>
      <p className="education-second-subtitle">February 2025 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>

      {/* <p className="project-description">Over the next 7 weeks (until September 9), I will develop 5 AI Projects, participate in 5 weekend hackathons, and complete a final project to get 1000+ users. Furthermore, I will receive interview prep, resume reviews, and feedback from real software engineers.</p> */}
      <LinkCard
        text="Amazon Project Kuiper"
        url="https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper"
        icon="https://media.wired.com/photos/5a99ba72927dc94e67685b9b/1:1/w_700,h_700,c_limit/amazon-a-logo.jpg"
        hoverColor="#53B4B4"
      />
      <LinkCard
        text="App Dev Club"
        url="https://appdevclub.com/"
        icon={'https://appdevclub.com/logo256.png'}
        hoverColor="#53B4B4"
      />

    </div>
  );
};

export default AmazonKuiper;
