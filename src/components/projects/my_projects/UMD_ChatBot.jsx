import React from 'react';
import { FaPython, FaGithub } from '../../../../node_modules/react-icons/fa';
import { SiFlutter, SiDart, SiFlask, SiSwift, SiRuby, SiGit } from '../../../../node_modules/react-icons/si';
import '../projects.css'


const UMD_ChatBot = () => {
  return (
    <div className="project-card">
    <div className="project-header">
      <h3 className="project-title">UMD Scheduling Chatbot</h3>
    </div>
    <p className="project-description">The <strong>UMD Scheduling Chatbot</strong> is an AI-powered assistant designed to help students at the University of Maryland find detailed information about courses and schedules. This project leverages OpenAI's GPT-4o model and a custom vector store built with FAISS to provide accurate and timely responses to user queries about UMD classes.</p>
    <div className="project-video">
      <a href="https://youtu.be/KEKWtafWjeQ" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/KEKWtafWjeQ/0.jpg" alt="wAIste Demo" />
      </a>
      <p><a href="https://youtu.be/KEKWtafWjeQ" target="_blank" rel="noopener noreferrer">Check out the Chat Bot Demo to see this in action!</a></p>
    </div>
    <h4 className="features-title">Key Features:</h4>
    <ul className="project-features">
      <li><strong>Course Recommendations:</strong> Get recommendations for courses and instructors based on your preferences.</li>
      <li><strong>Dynamic Data Updates:</strong> The vector store updates automatically with the latest scheduling information to ensure the chatbot provides accurate answers.</li>
      <li><strong>Efficient Information Retrieval:</strong>Utilizes a vector store for fast and efficient similarity searches.</li>
    </ul>

    <h4 className="features-title">Technologies Used:</h4>
    <ul className="project-features">
      <li><strong>Python:</strong> The core programming language used for developing the project.</li>
      <li><strong>Streamlit:</strong> A web application framework used to create the chatbot interface.</li>
      <li><strong>OpenAI API:</strong>Provides the AI capabilities for understanding and responding to user queries.</li>
      <li><strong>LangChain:</strong>A library for building language model applications.</li>
      <li><strong>FAISS (Facebook AI Similarity Search):</strong>Used to build and manage the vector store for efficient information retrieval.</li>
    </ul>
    
    <div className="project-link">
      <a href="https://github.com/aluthra23/UMD-Scheduling-Chat-Bot" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  </div>
  )
}

export default UMD_ChatBot
