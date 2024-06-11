// src/components/socials/Socials.jsx
import React from 'react';
import './socials.css'; // Import Socials-specific CSS
import SocialCard from './SocialCard'; // Import the SocialCard component
import { Link } from 'react-router-dom';
import Resume from '../../assets/Resume.pdf'; // Import the image

const Socials = () => {
  return (
    <div className="socials-container">
      <h2>Connect with Me!</h2>
      <div className="social-card-group">
        <SocialCard
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png?20210220164014"
          link="https://www.linkedin.com/in/arav-luthra/"
        />
        <SocialCard
          icon="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          link="https://github.com/aluthra23/"
        />
        <SocialCard
          icon="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
          link="mailto:aravluthra@gmail.com"
        />
        <SocialCard
          icon="https://cdn.icon-icons.com/icons2/2699/PNG/512/devpost_logo_icon_169279.png"
          link="https://devpost.com/aravluthra"
        />
        <SocialCard
          icon="https://pngimg.com/d/cv_PNG30.png"
          link="https://drive.google.com/file/d/1HrFPWldejEX2Hpy7Ju9RmUOWW946n3i4/view?usp=sharing"
        />
        {/* Add other social media platforms */}
      </div>
    </div>
  );
};

export default Socials;
