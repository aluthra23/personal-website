// src/components/Education.jsx
import React from 'react';
import Navbar from '../navbar/Navbar'; // Import Navbar
import Footer from '../footer/Footer';
import Umd from './my_schools/Umd'; // Import Umd component
import HighSchool from './my_schools/HighSchool';
import './education.css'; // Import Education-specific CSS

const Education = () => {
  return (
    <div className="whole-home">
      <Navbar />
      <div className="education-container"> {/* Add a container class */}
        <div className="education-content"> {/* Add a content class */}
          <h2 className="education-title">Education</h2>
          <Umd />
          <HighSchool />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Education;
