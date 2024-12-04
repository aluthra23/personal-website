// src/components/experience/my_work/research/OpenSource.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const OpenSource = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Open Source Software Abandonment Research</h3>
      </div>
      <img 
        src={'https://battle-data-lab.cs.umd.edu/images/logopic/logo_umd.png'}
        alt="UMD Logo"
        className="education-second-logo"
      />
      <p className="education-subtitle">University of Maryland, College Park</p>
      <p className="education-second-subtitle">December 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">I am working with <a href='https://enme.umd.edu/clark/faculty/523/Michel-Cukier' target="_blank" rel="noopener noreferrer">Dr. Michel Cukier</a> and <a href='https://www.researchgate.net/profile/John-Mcgahagan' target="_blank" rel="noopener noreferrer">Dr. John McGahagan</a> to research and predict open-source software abandonment, focusing on identifying the most relevant features that contribute to project inactivity.</p>

      {/* <p className='project-description'>Process:</p>

      <ol className="project-list">
        <li>We used OpenAI's Whisper API to transcribe lectures in real-time and used the spaCy library to preprocess the transcription.</li>
        <li>We store the transcribed lectures as vector embeddings in a Qdrant vector database</li>
        <li>We have a separate user interface where students can type in queries at any point in the lecture and the Qdrant vector database is traversed to find relevant context before generating a response from the Llama 3.0 model which is locally hosted</li>
      </ol>

      <p className='project-description'>We are also applying topic modeling to identify areas of student confusion, enabling targeted support in high-need topics. Engauge is also deployed and currently being used in several UMD math courses.</p>
 */}



      {/* <LinkCard
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
      /> */}
    </div>
  );
};

export default OpenSource;
