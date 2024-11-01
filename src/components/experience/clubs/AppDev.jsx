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
      <p className="education-subtitle">App Dev Club × NOAA</p>
      <p className="education-second-subtitle">October 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">I was selected by UMD’s App Dev Club for a project with the NOAA. We built a package that fetches requested data from the NOAA database, which is in a AWS S3 Bucket. We developed an algorithm to take care of time and spatial interpolations in the absence of requested data.</p>

      <p className='project-description'>The package was published and can be found at <a href='https://pypi.org/project/swpc-wamipe' target='_blank' rel="noopener noreferrer">pypi.org/project/swpc-wamipe/</a></p>



      <LinkCard
        text="App Dev Club"
        url="https://appdevclub.com/"
        icon={'https://appdevclub.com/logo256.png'}
        hoverColor="#53B4B4"
      />

      <LinkCard
        text="NOAA"
        url="https://www.noaa.gov/"
        icon={'https://cdn.prod.website-files.com/65f0707e2fbf5da3a409a6d3/66611660e6f39820077f99b2_NOAA.webp'}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default AppDev;
