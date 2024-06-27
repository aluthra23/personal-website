// src/components/education/Umd.jsx
import React from 'react';

const Umd = () => {
  return (
    <div className="education-card">
      <h3 className="education-title">University of Maryland, College Park</h3>
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/640px-University_of_Maryland_seal.svg.png" 
        alt="University of Maryland Logo" 
        className="education-logo"
      />
      <p className="education-details">Bachelor of Science in <a href="https://www.cs.umd.edu/" target="_blank">Computer Science</a> and <a href="https://www-math.umd.edu/" target="_blank">Mathematics</a> (Double Major)</p>
      <p className="education-details">2023-2027</p>
      <p className="education-details">Grade: Sophomore</p>
      <p className="education-details">Member of the <a href="https://aces.umd.edu/" target="_blank">Advanced Cybersecurity Experience for Students (ACES)</a> program, which is part of the UMD Honors College system</p>
      <p className="education-details">GPA: 4.0/4.0</p>
      
      <h4 className="education-subtitle">Courses:</h4>
      <ul className="education-courses">
        <li>CMSC132 (Object-Oriented Programming II)</li>
        <li>STAT400 (Applied Probability and Statistics I)</li>
        <li>HACS100 (Foundations in Cybersecurity I)</li>
        <li>HACS101 (Applied Cybersecurity Foundations)</li>
        <li>CMSC216 (Introduction to Computer Systems)</li>
        <li>CMSC250 (Discrete Structures)</li>
        <li>MATH461 (Linear Algebra for Scientists and Engineers)</li>
        <li>ENES210 (Entrepreneurial Opportunity Analysis and Decision-Making in 21st Century Technology Ventures)</li>
      </ul>
      <h4 className="education-subtitle">My Fall 2024 Courses:</h4>
      <ul className="education-courses">
        <li>CMSC330 (Organization of Programming Languages)</li>
        <li>CMSC351 (Algorithms)</li>
        <li>MATH246 (Differential Equations for Scientists and Engineers)</li>
        <li>CMSC388J (Special Topics in Computer Science; Building Secure Web Applications)</li>
        <li>HACS200 (Applied Cybersecurity Foundations II)</li>
      </ul>
      <h4 className="education-subtitle">Extracurricular Activities:</h4>
      <ul className="education-courses">
        <li>CP Student Investment Group</li>
        <li>ACES CyberConnect Program</li>
        <li>Competitive Programming</li>
        <li>Bilingual: Fluent in Hindi and English</li>
      </ul>
    </div>
  );
};

export default Umd;
