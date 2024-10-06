// src/components/experience/my_work/clubs/AIMLClub.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const AIMLClub = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Machine Learning Engineer</h3>
      </div>
      <img 
        src={'https://media.licdn.com/dms/image/v2/D4D0BAQHBHbibmPRPrw/company-logo_200_200/company-logo_200_200/0/1720999222468?e=1735776000&v=beta&t=p6yOtbrVaxTqUWnYQQ_l4FkaS17MvLQuVSXidKG72KU'}
        alt="AI/ML Club"
        className="education-second-logo"
      />
      <p className="education-subtitle">AI/ML Club × Engauge</p>
      <p className="education-second-subtitle">October 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">I was selected as 1 of 4 members for this project by UMD’s AI/ML Club. I am constructing a data pipeline to analyze and summarize engagement metrics and areas of student confusion throughout lecture.</p>



      <LinkCard
        text="AI/ML Club"
        url="https://www.linkedin.com/company/ai-ml-club/"
        icon={'https://media.licdn.com/dms/image/v2/D4D0BAQHBHbibmPRPrw/company-logo_200_200/company-logo_200_200/0/1720999222468?e=1735776000&v=beta&t=p6yOtbrVaxTqUWnYQQ_l4FkaS17MvLQuVSXidKG72KU'}
        hoverColor="#53B4B4"
      />

      <LinkCard
        text="Engauge"
        url="https://www.linkedin.com/company/engaugelive/"
        icon={'https://media.licdn.com/dms/image/v2/D4E0BAQEJKSF74Xupgg/company-logo_200_200/company-logo_200_200/0/1726251339116/engaugelive_logo?e=1735776000&v=beta&t=YNp69LMhAr4Cl8fylkGSHAOSUEtlZxGimBYuoqQUlZE'}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default AIMLClub;
