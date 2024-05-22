// src/components/projects/my_projects/Waiste.jsx

import React from 'react';
import { FaPython, FaGithub } from '../../../../node_modules/react-icons/fa';
import { SiFlutter, SiDart, SiFlask, SiSwift, SiRuby, SiGit } from '../../../../node_modules/react-icons/si';

const Waiste = () => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">wAIste</h3>
        <div className="project-icons">
          <SiFlutter title="Flutter" />
          <SiDart title="Dart" />
          <FaPython title="Python" />
          <SiFlask title="Flask" />
          <SiSwift title="Swift" />
          <SiRuby title="Ruby" />
          <FaGithub title="GitHub" />
          <SiGit title="Git" />
        </div>
      </div>
      <p className="project-description">I collaborated with <a href="https://www.linkedin.com/in/narainsriram/" target="_blank" rel="noopener noreferrer">Narain Sriram</a> on this project.</p>
      <p className="project-description"><strong>wAIste</strong> is an innovative waste management application powered by artificial intelligence (AI). Our app revolutionizes waste disposal processes by employing state-of-the-art machine learning algorithms to analyze images of waste items captured by users. By harnessing the power of AI, wAIste provides personalized recommendations for proper waste disposal methods, including recycling, composting, or landfill. What sets wAIste apart is its utilization of two distinct AI models: one for general waste categorization and another for advanced garbage detection. With its intuitive interface and real-time insights, wAIste empowers users to make informed decisions about waste management, contributing to a cleaner and more sustainable environment.</p>
      <h4 className="features-title">Key Features:</h4>
      <ul className="project-features">
        <li><strong>AI-Powered Analysis:</strong> Utilizes two different machine learning models to accurately identify and categorize waste.</li>
        <li><strong>Real-time Recommendations:</strong> Provides real-time recommendations for proper waste disposal methods based on AI analysis.</li>
        <li><strong>User-Friendly Interface:</strong> Features an intuitive and user-friendly interface designed for seamless navigation and ease of use.</li>
      </ul>
      <div className="project-video">
        <a href="https://youtu.be/ZyRgfsvGNfk" target="_blank" rel="noopener noreferrer">
          <img src="https://img.youtube.com/vi/ZyRgfsvGNfk/0.jpg" alt="wAIste Demo" />
        </a>
        <p><a href="https://youtu.be/ZyRgfsvGNfk" target="_blank" rel="noopener noreferrer">Check out the wAIste Demo to see the app in action!</a></p>
      </div>
      <h4 className="server-title">Flask Server:</h4>
      <p className="project-description">For the backend infrastructure, wAIste employs a Flask server to handle image processing and AI model inference. The Flask server, hosted at <a href="https://github.com/aluthra23/wAIste_flask_server" target="_blank" rel="noopener noreferrer">wAIste Flask Server</a>, acts as the backend API for the mobile application. It utilizes the Roboflow platform's inference SDK to integrate with machine learning models for waste categorization and garbage detection. The Flask server enables seamless communication between the frontend mobile app and the AI models, ensuring efficient waste management recommendations for users.</p>
      <div className="project-link">
        <a href="https://github.com/narainsriram2020/wAIste" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
};

export default Waiste;
