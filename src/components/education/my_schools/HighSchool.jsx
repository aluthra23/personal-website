// src/components/education/HighSchool.jsx
import React from 'react';
import { getImageUrl } from '../../../utils'

const HighSchool = () => {
  return (
    <div className="project-card">
      <div className='project-header'>
        <h3 className="education-second-title">Academy for Mathematics, Science, and Engineering</h3>
      </div>
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/6/6b/Academy_for_Mathematics%2C_Science%2C_and_Engineering_Logo.png" 
        alt="Academy for Mathematics, Science, and Engineering Logo" 
        className="education-second-logo"
      />

      <p className="education-subtitle">High School Diploma, 2019-2023</p>

      <p className="education-second-subtitle">Attended: September 2019 - June 2023</p>
      <p className="education-second-subtitle">GPA: 101.854</p>

      
      <p className="project-description">Located at MORRIS HILLS HIGH SCHOOL, in Rockaway, the Academy for Mathematics, Science, and Engineering is a rigorous, highly focused four-year program for students with career interests in engineering.</p>
      <u><h4 className="features-title">Courses and Scores:</h4></u>
      <ul className="project-features">
        <li>AP Physics 1: 4</li>
        <li>AP Physics C: Mechanics: 4</li>
        <li>AP Physics C: Electricity and Magnetism: 5</li>
        <li>AP Computer Science A: 5</li>
        <li>AP Chemistry: 5</li>
        <li>AP Biology: 3</li>
        <li>AP Language and Composition: 3</li>
        <li>AP US History: 3</li>
        <li>AP Calculus BC: 5</li>
        <li>AP Microeconomics: 5</li>
        <li>AP Macroeconomics: 5</li>
        <li>AP Statistics: 5</li>
      </ul>
      <u><h4 className="features-title">Specialized Engineering and Math Courses:</h4></u>
      <ul className="project-features">
        <li>Calculus 3 H</li>
        <li>Academy Computer-Aided Design H</li>
        <li>Academy Fundamentals of Engineering H</li>
        <li>Academy Engineering & Product Development & Technology 1 H</li>
        <li>Academy Business Strategies H</li>
        <li>Academy Engineering & Product Development & Technology 2 H</li>
        <li>Academy Biotechnology H</li>
        <li>Academy Engineering & Product Development & Technology 3 H</li>
        <li>Academy Technical Writing H (semester)</li>
      </ul>
    </div>
  );
};

export default HighSchool;
