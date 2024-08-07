// src/components/experience/my_work/HeadstarterAI.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const TruVoice = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Software Engineering Internship</h3>
      </div>
      <img 
        src="https://truvoice.ai/wp-content/uploads/2022/06/favicon.png" 
        alt="TruVoice.ai Logo"
        className="education-second-logo"
      />
      <p className="education-subtitle">TruVoice.ai</p>
      <p className="education-second-subtitle">Jul 2024 - Present</p>
      <p className="education-second-subtitle">Remote</p>

      <p className="project-description">Creating an analytics dashboard for product usage and billing</p>
      <p className="project-description">Using React JS, MongoDB, and Express JS</p>

      <p className="project-description">Working under the mentorship of <a href="https://www.linkedin.com/in/vamsikrishna-kv/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Vamsi Krishna KV</a></p>
      <LinkCard
        text="TruVoice.ai"
        url="https://truvoice.ai/"
        icon="https://truvoice.ai/wp-content/uploads/2022/06/favicon.png"
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default TruVoice;
