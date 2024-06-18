// src/components/socials/SocialCard.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './social-card.css'; // Import SocialCard-specific CSS

const SocialCard = ({ icon, link , name }) => {
  // Add 'icon' to props validation
  SocialCard.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
  return (
    <div className="social-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img alt={name} src={icon} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialCard;
