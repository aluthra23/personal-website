// src/components/projects/ReadMore.jsx
import React, { useState } from 'react';


const ReadMore = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-container">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <button className="read-more-button" onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      {isExpanded && <div className="read-more-content">{children}</div>}
    </div>
  );
};

export default ReadMore;
