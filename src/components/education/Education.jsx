// src/components/Education.jsx
import React from 'react';
import Footer from '../footer/Footer';
import Umd from './my_schools/Umd';
import HighSchool from './my_schools/HighSchool';
import {motion} from 'framer-motion';
import '../projects/projects.css'; 

const Education = () => {
  return (
    <motion.div 
      className="whole-home"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar /> */}
      <div className="projects-container"> {/* Add a container class */}
        <div className="projects-content"> {/* Add a content class */}
          <h2 className="projects-title">Education</h2>
          <Umd />
          <HighSchool />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Education;
