// src/components/socials/SocialCard.jsx
import React from 'react';
import './social-card.css'; // Import SocialCard-specific CSS

const SocialCard = ({ icon, link }) => {
  return (
    <div className="social-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialCard;
