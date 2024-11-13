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
      <p className="education-second-subtitle">October 2024 - November 2024</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">I was selected by UMD's App Dev Club for this project to work with the NOAA's Space Weather Prediction Center.</p>

      <p className='project-description'>We developed a software package for accessing atmospheric data from NOAA's Whole Atmosphere Model-Ionosphere Plasmasphere Electrodynamics (WAM-IPE) model. Our package allows users to predict the neutral density near satellites, which is critical for space weather research.</p>

      <p className='project-description'>More specifics about the package: </p>

      <ul className="project-features">
        <li><b><u>Data Retrieval System Design</u></b>: Built a reliable interface to NOAA’s AWS S3 storage. Developed functions for efficient data fetching based on date, time, and satellite coordinates.</li>
        <li><b><u>Custom Interpolation Algorithm</u></b>: Created an advanced interpolation algorithm to fill data gaps. This algorithm combines temporal and spatial interpolation methods to estimate missing neutral density values at specified satellite locations, ensuring continuity and accuracy even when direct measurements are absent</li>
      </ul>



      <LinkCard
        text="Python Package"
        url="https://pypi.org/project/swpc-wamipe/"
        icon={'https://developer.fedoraproject.org/static/logo/python.png'}
        hoverColor="#53B4B4"
      />

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
