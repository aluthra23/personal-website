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
import Honeypot from './my_projects/HoneyPot';
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
            <LinkCard
              text='Visit my GitHub Profile'
              url="https://github.com/aluthra23"
              icon="https://www.svgrepo.com/show/475654/github-color.svg"
              hoverColor="#444"
            />

            <LinkCard
              text="Youtube Channel" 
              url="https://youtube.com/@aravluthra6548?si=I9BlsAjwuALsVpOd" 
              icon="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"
              hoverColor="#ff6666"
            />

          </div>

          {/* <UpcomingProjects /> */}
          <Honeypot />
          {/* <InventoryTracker /> */}
          <UMD_API />
          <UMD_ChatBot />
          <UMDScheduleWebScraper />
          <Waiste />
          {/* <MyWebsite/> */}
          <StockMarketPrediction />
          
        </div>
        <Footer/>
      </div>
    </motion.div>
  );
};

export default Projects;
