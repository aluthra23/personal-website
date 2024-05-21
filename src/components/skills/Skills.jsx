// src/components/Skills.jsx
import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer'

const Skills = () => {
  return (
    <div className="projects-container">
      <Navbar/>
      <div className="projects-content">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Skills;
