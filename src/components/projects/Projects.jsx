// src/components/projects/Projects.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import Waiste from './my_projects/Waiste'
import StockMarketPrediction from './my_projects/StockMarketPrediction';
import MyWebsite from './my_projects/MyWebsite'
// import Project3 from './my_projects/Project3';
import './projects.css'; // Import Projects-specific CSS
import Footer from '../footer/Footer'

const Projects = () => {
  return (
    <div className='whole-home'>
      <Navbar />
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">Projects</h2>
          <div className="github-link">
            <a href="https://github.com/aluthra23" className='project-link'>Visit my GitHub Profile</a>
          </div>
          <Waiste />
          <MyWebsite/>
          <StockMarketPrediction />
          {/* <Project3 /> */}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Projects;
