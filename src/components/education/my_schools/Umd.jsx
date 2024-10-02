import React from 'react';
import { getImageUrl } from '../../../utils';
import '../../projects/projects.css'

const Umd = () => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="education-second-title">University of Maryland, College Park</h3>
      </div>

      <img 
        src="https://www.mfri.org/static/img/2018-UM-GLOBE-LOGO.39cd36f3e321.gif"
        alt="University of Maryland Logo" 
        className="education-second-logo"
      />
      
      <p className="education-subtitle">Bachelor of Science in Computer Science and Mathematics (Double Major)</p>
      <p className="education-second-subtitle">Started: August 2023</p>
      <p className="education-second-subtitle">Expected Graduation: May 2027</p>
      <p className="education-second-subtitle">GPA: 4.0</p>



      <p className="project-description">I attend the University of Maryland, College Park, where I am currently pursuing a double major in Computer Science and Mathematics. I'm pursuing the Data Science track in the Computer Science Major, where I have maintained a perfect (4.0) GPA after my first two semesters. Furthermore, I'm part of the UMD Honors College system and specificy a ember of the <a href="https://aces.umd.edu/" target="_blank" rel="noopener noreferrer">Advanced Cybersecurity Experience for Students (ACES)</a> program. The ACES program is the most selective honors college at UMD, where I am exposed to various networking and technical opportunities to help build my career.</p>
      
      
      <u><h4 className="features-title">Courses:</h4></u>
      <ul className="project-features">
        <li>CMSC132 (Object-Oriented Programming II)</li>
        <li>STAT400 (Applied Probability and Statistics I)</li>
        <li>HACS100 (Foundations in Cybersecurity I)</li>
        <li>HACS101 (Applied Cybersecurity Foundations)</li>
        <li>CMSC216 (Introduction to Computer Systems)</li>
        <li>CMSC250 (Discrete Structures)</li>
        <li>MATH461 (Linear Algebra for Scientists and Engineers)</li>
        <li>ENES210 (Entrepreneurial Opportunity Analysis and Decision-Making in 21st Century Technology Ventures)</li>
      </ul>
      <u><h4 className="features-title">My Fall 2024 Courses:</h4></u>
      <ul className="project-features">
        <li>CMSC330 (Organization of Programming Languages)</li>
        <li>CMSC351 (Algorithms)</li>
        <li>CMSC320 (Introduction to Data Science)</li>
        <li>MATH246 (Differential Equations for Scientists and Engineers)</li>
        <li>HACS208N (Digital Forensics)</li>
        <li>HACS200 (Applied Cybersecurity Foundations II)</li>
      </ul>
      <u><h4 className="features-title">Extracurricular Activities:</h4></u>
      <ul className="project-features">
        <li>CP Student Investment Group</li>
        <li>ACES CyberConnect Program</li>
        <li>Competitive Programming</li>
        <li>Bilingual: Fluent in Hindi and English</li>
      </ul>
    </div>
  );
};

export default Umd;
