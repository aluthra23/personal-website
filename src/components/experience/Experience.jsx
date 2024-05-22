// src/components/experience/Experience.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import TKDesign from './my_work/TKDesign';
import './experience.css'; // Import Education-specific CSS

const Experience = () => {
  return (
    <div className="whole-home">
      <Navbar />
      <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
        <div className="experience-content">
          <TKDesign/>
          {/* Add more work experiences as needed */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Experience;
