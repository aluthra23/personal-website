// src/components/projects/my_projects/MyWebsite.jsx

import React from 'react';
import LinkCard from '../LinkCard';
import '../projects.css';

const MyWebsite = () => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">Personal Portfolio Website</h3>
      </div>
      <p className="project-description">
        I developed a personal portfolio website to showcase my skills, projects, and experiences. The primary purpose of this website is to create a professional online presence, allowing potential employers, collaborators, and peers to easily view my work and get to know more about me. This project was my first foray into using React.js, and it has been an invaluable experience in modern web development practices.
      </p>
      <h4 className="features-title">Technologies Used:</h4>
      <ul className="project-features">
        <li><strong>React.js:</strong> Leveraged for building the user interface with component-based architecture. This framework allowed me to create reusable components, manage the application state efficiently, and render dynamic content.</li>
        <li><strong>HTML5 & CSS3:</strong> Used for structuring and styling the web pages. HTML5 provided the semantic structure, while CSS3 allowed for creative and responsive design.</li>
        <li><strong>JavaScript:</strong> Enabled dynamic interactions on the website. JavaScript was crucial for implementing interactive features and enhancing user experience.</li>
        <li><strong>React Router:</strong> Implemented for seamless navigation between different pages, providing a smooth single-page application (SPA) experience.</li>
        <li><strong>GitHub Pages:</strong> Used for deploying the website, making it accessible to a global audience.</li>
      </ul>
      <h4 className="features-title">Key Features:</h4>
      <ul className="project-features">
        <li><strong>Responsive Design:</strong> Ensures compatibility across various devices and screen sizes, providing an optimal viewing experience whether on a desktop, tablet, or mobile device.</li>
        <li><strong>Navigation Bar:</strong> Provides smooth navigation with automatic scrolling to the top of each page, enhancing the user experience.</li>
        <li><strong>Project Showcases:</strong> Highlights my major projects with detailed descriptions, links to repositories, and visual demonstrations.</li>
        <li><strong>Social Media Links:</strong> Connects visitors to my LinkedIn, GitHub, and other professional profiles, facilitating networking and collaboration opportunities.</li>
        <li><strong>Contact Form:</strong> Allows visitors to reach out to me directly through the website, fostering direct communication.</li>
      </ul>
      <h4 className="features-title">Experience Gained:</h4>
      <p className="project-description">
        Through this project, I deepened my understanding of React.js and state management, honed my skills in HTML and CSS, and learned the importance of responsive design and user experience. I also gained valuable insights into deploying web applications using GitHub Pages, understanding the deployment pipeline, and managing version control.
      </p>
      <p className="project-description">
        From a personal perspective, this project taught me the significance of attention to detail, particularly in ensuring cross-browser compatibility and performance optimization. I also developed a stronger sense of design aesthetics and usability, understanding how to create interfaces that are not only functional but also visually appealing. Moreover, working on this website allowed me to enhance my problem-solving skills, as I had to debug issues and implement solutions independently.
      </p>
      <div className="project-links">
        <LinkCard 
          text="Visit My Personal Website" 
          url="https://aluthra23.github.io/personal-website/" 
          icon="https://cdn-icons-png.flaticon.com/512/5339/5339184.png"
          hoverColor="#FFD700" 
        />
        <LinkCard 
          text="GitHub Repository" 
          url="https://github.com/aluthra23/personal-website" 
          icon="https://www.svgrepo.com/show/475654/github-color.svg"
          hoverColor="#444" 
        />
      </div>
    </div>
  );
};

export default MyWebsite;
