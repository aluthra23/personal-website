// src/components/skills/Skills.jsx 
import React from 'react';
import Footer from '../footer/Footer';
import SkillCard from './SkillCard';
import './skills.css';
import { getImageUrl } from '../../utils';
import {motion} from 'framer-motion';
import General_CS_Skills from './General_CS_Skills';
import CybersecuritySkills from './CybersecuritySkills';
import DataScienceSkills from './DataScienceSkills';
import SoftwareEngineeringSkills from './SoftwareEngineeringSkills';
import EngineeringSkills from './EngineeringSkills';

const Skills = () => {
  return (
    <motion.div 
      className='whole-home'
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar/> */}
      <div className="skills-container">
        <div className="skills-content">
          <h2 className='skills-title'>Skills</h2>

          <General_CS_Skills/>

          <CybersecuritySkills/>

          <DataScienceSkills/>

          <SoftwareEngineeringSkills/>

          <EngineeringSkills/>

        </div>
        <Footer/>
      </div>
    </motion.div>
  );
};

export default Skills;
