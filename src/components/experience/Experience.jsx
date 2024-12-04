// src/components/experience/Experience.jsx
import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import {motion} from 'framer-motion';
import ExperienceMenu from './ExpMenu';
import Work from './Work';
import Clubs from './Clubs';
import Research from './Research';

const Experience = () => {
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
      className="whole-home"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">Experience</h2>

          <div className="skills-menu-title" style={{'textAlign': 'center'}}>
            <u><p>Jump to</p></u>
          </div>

          <ExperienceMenu scrollToSection={scrollToSection} />
          

          <div className='skill-group' id="internship-experience">
            <Work />
          </div>

          <div className='experience-group' id="research-experience">
            <Research/>
          </div>

          <div className='skill-group' id="clubs-experience">
            <Clubs />
          </div>



        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Experience;
