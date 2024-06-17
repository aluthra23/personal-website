// src/components/Education.jsx
import React from 'react';
import Footer from '../footer/Footer';
import Umd from './my_schools/Umd'; // Import Umd component
import HighSchool from './my_schools/HighSchool';
import './education.css'; // Import Education-specific CSS
import {motion} from 'framer-motion';

const Education = () => {
  return (
    <motion.div 
      className="whole-home"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar /> */}
      <div className="education-container"> {/* Add a container class */}
        <div className="education-content"> {/* Add a content class */}
          <h2 className="education-title">Education</h2>
          <Umd />
          <HighSchool />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Education;
