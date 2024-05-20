// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Company Name:</strong> Position - Duration
          <ul>
            <li>Job responsibility 1</li>
            <li>Job responsibility 2</li>
            {/* Add more job responsibilities if needed */}
          </ul>
        </li>
        {/* Add more work experiences as needed */}
      </ul>
    </div>
  );
};

export default Experience;
