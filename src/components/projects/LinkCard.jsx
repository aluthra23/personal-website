// src/components/LinkCard.jsx
import React from 'react';
import './LinkCard.css';

const LinkCard = ({ text, url, icon, hoverColor }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card" style={{ '--hover-color': hoverColor }}>
      <div className="link-card-content">
        <img src={icon} alt={text} className="link-card-icon" />
        <span className="link-card-text">{text}</span>
      </div>
    </a>
  );
};

export default LinkCard;
