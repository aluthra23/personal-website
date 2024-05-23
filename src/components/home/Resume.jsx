// src/components/home/Resume.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <embed src="/personal-website/src/assets/Resume.pdf" type="application/pdf" width="100%" height="600px" />
      <Link to="/personal-website/">Go Back</Link>
    </div>
  );
};

export default Resume;
