// src/components/socials/Socials.jsx
import React from 'react';
import './socials.css'; // Import Socials-specific CSS
import SocialCard from './SocialCard'; // Import the SocialCard component
import { getImageUrl } from '../../utils'; // Import the getImageUrl function

const Socials = () => {
  return (
    <div className="socials-container">
      <h2>Connect with Me!</h2>
      <div className="social-card-group">
        <SocialCard
          icon={getImageUrl("linkedin.png")}
          link="https://www.linkedin.com/in/arav-luthra/"
          name="LinkedIn"
        />
        <SocialCard
          icon={getImageUrl("github.webp")}
          link="https://github.com/aluthra23/"
          name="GitHub"
        />
        <SocialCard
          icon={getImageUrl("gmail.webp")}
          link="mailto:aravluthra@gmail.com"
          name="Email"
        />
        <SocialCard
          icon={getImageUrl("devpost.png")}
          link="https://devpost.com/aravluthra"
          name="Devpost"
        />
        <SocialCard
          icon={getImageUrl("resume.png")}
          link="https://drive.google.com/file/d/1CHFqSpB4PXUMnKEtQTJ7OtlemT_SA6vP/view?usp=sharing"
          name="Resume"
        />
        {/* Add other social media platforms */}
      </div>
    </div>
  );
};

export default Socials;
