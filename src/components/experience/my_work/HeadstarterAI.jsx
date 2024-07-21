// src/components/experience/my_work/HeadstarterAI.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const HeadstarterAI = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Software Engineering Fellow</h3>
      </div>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s" 
        alt="Headstarter AI Logo" 
        className="education-second-logo"
      />
      <p className="education-subtitle">Headstarter AI</p>
      <p className="education-second-subtitle">Jul 2024 - Present</p>
      <p className="education-second-subtitle">Long Island City, New York, United States</p>

      <p className="project-description">Over the next 7 weeks (until September 9), I will develop 5 AI Projects, participate in 5 weekend hackathons, and complete a final project to get 1000+ users. Furthermore, I will receive interview prep, resume reviews, and feedback from real software engineers.</p>
      <LinkCard
        text="Headstarter AI Fellowship"
        url="https://headstarter.co/info"
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s"
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default HeadstarterAI;
