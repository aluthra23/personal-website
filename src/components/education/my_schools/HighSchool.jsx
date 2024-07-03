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

      
      <p className="project-description">I attended the Academy for Mathematics, Science, and Engineering, a rigorous, highly focused four-year program with career interests in Engineering. With the Academy, I gained exposure to various engineering tools and concepts, like AutoCAD, Solidworks, Metalshop and Woodshop skills, the Engineering Design Process, etc. </p>

      <p className="project-description">To gain admission to this Academy, I underwent a rigorous and selective process. First, I took an entrance exam and was later selected from a pool of candidates for an interview in a group of six other people. In the end, I was invited to join this program as one of 48 kids.</p>



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
        <li>Academy Technical Writing H</li>
        <li>Robotics</li>
      </ul>
    </div>
  );
};

export default HighSchool;
