// src/components/Projects.jsx
import React from 'react';
import Navbar from './Navbar';
import Waiste from './projects/Waiste'
import StockMarketPrediction from './projects/StockMarketPrediction';
import Project3 from './projects/Project3';
import '../css/projects.css'; // Import Projects-specific CSS

const Projects = () => {
  return (
    <div className="projects-container">
      <Navbar /> {/* Include Navbar */}
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="github-link">
          <a href="https://github.com/aluthra23">Visit my GitHub Profile</a>
        </div>
        <Waiste />
        <StockMarketPrediction />
        <Project3 />
      </div>
    </div>
  );
};

export default Projects;
