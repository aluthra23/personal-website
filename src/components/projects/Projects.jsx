// src/components/projects/Projects.jsx
import React from 'react';
import Waiste from './my_projects/Waiste';
import StockMarketPrediction from './my_projects/StockMarketPrediction';
import MyWebsite from './my_projects/MyWebsite';
import WebScraper from './my_projects/WebScraper';
import UMDScheduleWebScraper from './my_projects/UMDScheduleWebScraper';
import './projects.css'; // Import Projects-specific CSS
import Footer from '../footer/Footer';
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      className='whole-home'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar /> */}
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">Projects</h2>
          <div className="github-link">
            <a href="https://github.com/aluthra23" className='project-link' target="_blank">Visit my GitHub Profile</a>
          </div>
          <UMDScheduleWebScraper />
          <Waiste />
          <MyWebsite/>
          <StockMarketPrediction />
          {/* <WebScraper /> */}
        </div>
        <Footer/>
      </div>
    </motion.div>
  );
};

export default Projects;
