// src/components/Education.jsx
import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import Umd from './education/Umd'; // Import Umd component
import HighSchool from './education/HighSchool';
import '../css/education.css'; // Import Education-specific CSS

const Education = () => {
  return (
    <div className="education-container"> {/* Add a container class */}
      <Navbar /> {/* Include Navbar */}
      <div className="education-content"> {/* Add a content class */}
        <h2 className="education-title">Education</h2>
        <Umd />
        <HighSchool />
      </div>
    </div>
  );
};

export default Education;
