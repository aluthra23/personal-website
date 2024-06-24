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
        <li>CMSC132 (Object-Oriented Programming II): Developed data structure knowledge and refined Object-Oriented Programming skills</li>
        <li>STAT400 (Applied Probability and Statistics I): Enhanced analytical capabilities</li>
        <li>HACS100 (Foundations in Cybersecurity I): Provided insights into critical aspects of information security</li>
        <li>CMSC216 (Introduction to Computer Systems): Deeper understanding of computer systems</li>
        <li>CMSC250 (Discrete Structures): Advanced knowledge in discrete structures</li>
        <li>MATH461 (Linear Algebra for Scientists and Engineers): Refined mathematical foundations and enhanced technical skills using MATLAB</li>
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
