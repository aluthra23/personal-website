// src/components/experience/my_work/SourceIQ.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const Noblis = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Large Language Models Intern</h3>
      </div>
      <img 
        src="https://media.licdn.com/dms/image/v2/D4E0BAQHfZBbBnzIC2g/company-logo_200_200/company-logo_200_200/0/1719257491531/noblis_logo?e=2147483647&v=beta&t=aer-u7UjL1qWh2LVmcGBPNYOSgzO6CfUkOJtOT7Y2gQ" 
        alt="SourceIQ" 
        className="education-second-logo"
      />
      <p className="education-subtitle">Noblis</p>
      <p className="education-second-subtitle">January 2024 - Present</p>
      <p className="education-second-subtitle">Remote (Virginia)</p>

      {/* <p className="project-description">Over the next 7 weeks (until September 9), I will develop 5 AI Projects, participate in 5 weekend hackathons, and complete a final project to get 1000+ users. Furthermore, I will receive interview prep, resume reviews, and feedback from real software engineers.</p> */}
      <LinkCard
        text="Noblis"
        url="https://noblis.org/"
        icon="https://media.licdn.com/dms/image/v2/D4E0BAQHfZBbBnzIC2g/company-logo_200_200/company-logo_200_200/0/1719257491531/noblis_logo?e=2147483647&v=beta&t=aer-u7UjL1qWh2LVmcGBPNYOSgzO6CfUkOJtOT7Y2gQ"
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default Noblis;
