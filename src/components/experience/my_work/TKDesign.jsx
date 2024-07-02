// src/components/experience/my_work/TKDesign.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import '../experience.css'

const TKDesign = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Wireless Communications Development Intern</h3>
      </div>
      <img 
        src={getImageUrl("TK_Design_Logo.png")} 
        alt="TK Design Associates Logo" 
        className="education-second-logo"
      />
      <p className="education-subtitle">TK Design Associates</p>
      <p className="education-second-subtitle">Jul 2022 - May 2023</p>
      <p className="education-second-subtitle">Morristown, New Jersey, United States</p>

      <p className="project-description">We were introduced to Wireless Telecommunications Site Development. Our mentor was Marc Harris, who is very experienced in this sector. In our internship, we learned about and how to apply the following technical subject areas:</p>
      <ul className="project-features">
        <li>Communications theory fundamentals – frequency management, FDMA, TDMA, CDMA, line of site technologies, microwave, modulation.</li>
        <li>Search rings – Radio frequency engineer (electrical engineering) develops the search ring. What is the objective? How do we assess opportunities for solving the search ring? What advantages are available with each site type? Basic screening, landlord outreach, and land restrictions (civil engineering/planning).</li>
        <li>Land assessment – Land use restrictions, identification of zoning variances, historical, regulatory issues that could devalue the opportunity due to time, money, and inability to obtain approvals.</li>
        <li>Site Design – Including collocation opportunities, building a plan and working with an engineering firm (civil, electrical) to establish lease exhibits, zoning drawings, and construction drawings via AutoCAD.</li>
        <li>Working with environmental consultants to identify Phase I, Phase II, NEPA issues related to the site. Assess AM interference, FAA obstruction evaluation, Emissions (FCC mandates, Maximum Permissible Exposure, etc.)</li>
        <li>Reviewing, understanding, and marking up lease exhibits, zoning drawings, construction drawings, radio frequency data sheets, equipment specification sheets, and related technical data.</li>
      </ul>

      <p className="project-description">At the end, we developed a Capstone Project, applying all of the skills we learned throughout the year. We assumed as if we were assigned an actual location to develop a cell site. In a group of four, we developed a Lease Exhibit, a Building Permit Application including subcodes, and a list of 10 items that need to be inspected after completion for the cell site development at this particular location.</p>
    </div>
  );
};

export default TKDesign;
