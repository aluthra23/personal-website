// src/components/experience/Experience.jsx
import React from 'react';
import Footer from '../footer/Footer';
import TKDesign from './my_work/TKDesign';
import {motion} from 'framer-motion';
import HeadstarterAI from './my_work/HeadstarterAI';
import TruVoice from './my_work/TruVoice';

const Experience = () => {
  return (
    <motion.div 
      className="whole-home"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="projects-container">
        <div className="projects-content">
        <h2 className="projects-title">Experience</h2>
          <TruVoice/>
          {/* <HeadstarterAI/> */}
          <TKDesign/>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Experience;
