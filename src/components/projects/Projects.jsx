// src/components/projects/Projects.jsx
import React from 'react';
import Waiste from './my_projects/Waiste';
import StockMarketPrediction from './my_projects/StockMarketPrediction';
import MyWebsite from './my_projects/MyWebsite';
import UpcomingProjects from './my_projects/UpcomingProjects';
import UMDScheduleWebScraper from './my_projects/UMDScheduleWebScraper';
import './projects.css'; // Import Projects-specific CSS
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';
import UMD_ChatBot from './my_projects/UMD_ChatBot';
import UMD_API from './my_projects/UMD_API';
import LinkCard from './LinkCard';
import UpcomingHoneyPot from './my_projects/UpcomingHoneyPot';
import InventoryTracker from './my_projects/InventoryTracker';

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
            {/* <a href="https://github.com/aluthra23" className='project-link' target="_blank">Visit my GitHub Profile</a> */}
            <LinkCard
              text='Visit my GitHub Profile'
              url="https://github.com/aluthra23"
              icon="https://www.svgrepo.com/show/475654/github-color.svg"
              hoverColor="#444"
            />
          </div>

          <UpcomingProjects />
          <InventoryTracker />
          <UMD_API />
          <UMD_ChatBot />
          <UMDScheduleWebScraper />
          <Waiste />
          <MyWebsite/>
          <StockMarketPrediction />
          <UpcomingHoneyPot />
        </div>
        <Footer/>
      </div>
    </motion.div>
  );
};

export default Projects;
