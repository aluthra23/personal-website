// src/components/skills/Skills.jsx 
import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import './skills.css';
import { motion } from 'framer-motion';
import General_CS_Skills from './skill_groups/General_CS_Skills';
import CybersecuritySkills from './skill_groups/CybersecuritySkills';
import DataScienceSkills from './skill_groups/DataScienceSkills';
import SoftwareEngineeringSkills from './skill_groups/SoftwareEngineeringSkills';
import EngineeringSkills from './skill_groups/EngineeringSkills';
import SkillsMenu from './SkillsMenu'; // Import the SkillsMenu component
import { Link } from 'react-router-dom';

const Skills = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div 
      className='whole-home'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >      
      <div className="skills-container">
        <div className="skills-content">
          <h2 className='skills-title'>Skills</h2>
          <div className="skills-menu-title">
            <u><p>Jump to</p></u>
          </div>
          <SkillsMenu scrollToSection={scrollToSection} />
          {showScrollToTop && (
            <Link to="#">
              <button className="scroll-to-top-button" onClick={scrollToTop}>
                <span className="arrow-up">↑</span> Scroll to Top
              </button>
            </Link>
          )}
          <div className='skill-group' id="general-cs-skills">
            <General_CS_Skills />
          </div>
          <div className='skill-group' id="software-engineering-skills">
            <SoftwareEngineeringSkills />
          </div>
          <div className='skill-group' id="data-science-skills">
            <DataScienceSkills />
          </div>
          <div className='skill-group' id="cybersecurity-skills">
            <CybersecuritySkills />
          </div>
          <div className='skill-group' id="engineering-skills">
            <EngineeringSkills />
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Skills;
