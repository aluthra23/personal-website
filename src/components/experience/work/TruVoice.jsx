// src/components/experience/my_work/TruVoice.jsx
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
        src={getImageUrl("TruvoiceLogo.png")}
        alt="TruVoice.ai Logo"
        className="education-second-logo"
      />
      <p className="education-subtitle">TruVoice.ai (End Client: TMP Direct)</p>
      <p className="education-second-subtitle">Jul 2024 - Present</p>
      <p className="education-second-subtitle">Remote</p>
      
      <p className="project-description">I am working under the mentorship of <a href="https://www.linkedin.com/in/vamsikrishna-kv/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Vamsi Krishna KV</a>. I created an interactive analytics dashboard for a customer support company, TMP Direct, to monitor and report on product usage and billing data. I utilized React JS to create dynamic, component-based UI elements for displaying key metrics such as Usage, Billing, and Credit Balances. I set up and configured MongoDB as the backend database, importing and structuring data from CSV files, and defining schemas for various data types (e.g., strings, integers, dates). I developed and integrated a RESTful API using Express.js to set up the login backend and dynamically ingest live data into the dashboard, ensuring that information is up-to-date.</p>



      <LinkCard
        text="TruVoice.ai"
        url="https://truvoice.ai/"
        icon={getImageUrl("TruvoiceLogo.png")}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default TruVoice;
