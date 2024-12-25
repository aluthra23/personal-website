// src/components/experience/my_work/SourceIQ.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const SourceIQ = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Software Engineering Internship</h3>
      </div>
      <img 
        src="https://media.licdn.com/dms/image/v2/D560BAQEPdDQ2lrnB6g/company-logo_200_200/company-logo_200_200/0/1699568319774/talkdei_logo?e=1743033600&v=beta&t=eaRb3RzUVSTWDk-w8sV_5nQARHqRE8WVYnt4E-2dNr0" 
        alt="SourceIQ" 
        className="education-second-logo"
      />
      <p className="education-subtitle">Source IQ (Formerly TalkDEI)</p>
      <p className="education-second-subtitle">December 2024 - Present (Ends March 2025)</p>
      <p className="education-second-subtitle">Remote (DMV Area)</p>

      {/* <p className="project-description">Over the next 7 weeks (until September 9), I will develop 5 AI Projects, participate in 5 weekend hackathons, and complete a final project to get 1000+ users. Furthermore, I will receive interview prep, resume reviews, and feedback from real software engineers.</p> */}
      <LinkCard
        text="Source IQ (Formerly TalkDEI)"
        url="https://www.talkdei.io/"
        icon="https://media.licdn.com/dms/image/v2/D560BAQEPdDQ2lrnB6g/company-logo_200_200/company-logo_200_200/0/1699568319774/talkdei_logo?e=1743033600&v=beta&t=eaRb3RzUVSTWDk-w8sV_5nQARHqRE8WVYnt4E-2dNr0"
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default SourceIQ;
