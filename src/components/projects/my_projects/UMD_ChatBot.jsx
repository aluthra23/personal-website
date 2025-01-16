import React from 'react';
import '../projects.css';
import LinkCard from '../LinkCard';
import ReadMore from '../ReadMore';

const UMD_ChatBot = () => {
  return (
    <div className="project-card">
      <ReadMore title="UMD Scheduling Chatbot">
        <p className="education-second-subtitle">June 2024 - July 2024</p>

        <p className="project-description">
          The <a href="https://umd-chat-bot.streamlit.app/" target="_blank" rel="noopener noreferrer"><strong>UMD Scheduling Chatbot</strong></a> is an AI-powered assistant designed to help students at the University of Maryland find detailed information about courses and schedules. This project leverages Gemini for response generation and embeddings, and Qdrant Cloud for the vector database to provide accurate and timely responses to user queries about UMD classes.
        </p>
        <div className="project-video">
          <a href="https://youtu.be/KEKWtafWjeQ" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/KEKWtafWjeQ/0.jpg" alt="UMD Chatbot Demo" />
          </a>
          <p>
            <a href="https://youtu.be/KEKWtafWjeQ" target="_blank" rel="noopener noreferrer">Check out the Chat Bot Demo to see this in action!</a>
          </p>
        </div>
        <h4 className="features-title">Key Features:</h4>
        <ul className="project-features">
          <li><strong>Course Recommendations:</strong> Get recommendations for courses and instructors based on your preferences.</li>
          <li><strong>Dynamic Data Updates:</strong> The vector store updates automatically with the latest scheduling information to ensure the chatbot provides accurate answers.</li>
          <li><strong>Efficient Information Retrieval:</strong> Utilizes a vector store for fast and efficient similarity searches.</li>
        </ul>
        <h4 className="features-title">Technologies Used:</h4>
        <ul className="project-features">
          <li><strong>Python:</strong> The core programming language used for developing the project.</li>
          <li><strong>Streamlit:</strong> A web application framework used to create the chatbot interface. Streamlit enables rapid development and deployment of interactive web applications, providing a user-friendly chat interface and real-time updates. Our application is hosted on Streamlit's cloud platform, ensuring accessibility and scalability.</li>
          <li><strong>Gemini:</strong> Used for both response generation and embeddings, Gemini processes user queries and generates contextually relevant responses. It also creates embeddings for course data that are used for similarity searches.</li>
          <li><strong>Qdrant Cloud:</strong> A vector database used to store and manage embeddings. It enables efficient similarity searches, ensuring the chatbot can quickly find relevant course information.</li>
        </ul>
        <h4 className="features-title">Technical Details:</h4>
        <p className="project-description">
          The integration of Streamlit, Gemini, and Qdrant Cloud is crucial to the chatbot's functionality:
        </p>
        <ul className="project-features">
          <li><strong>Data Preparation:</strong> Course data is processed and converted into embeddings using Gemini, which are then stored in the Qdrant Cloud vector database.</li>
          <li><strong>Vector Store Management:</strong> Qdrant Cloud manages the creation, loading, and updating of the vector store, allowing for efficient similarity searches on user queries.</li>
          <li><strong>Response Generation:</strong> The relevant embeddings from the vector store are used to provide context to Gemini, which generates detailed, contextually relevant responses.</li>
          <li><strong>User Interface:</strong> Streamlit is used to create a simple and intuitive chat interface, enabling users to interact seamlessly with the AI-powered chatbot.</li>
        </ul>
        <div className="project-links">
          <LinkCard
            text="View Project Demo" 
            url="https://youtu.be/KEKWtafWjeQ" 
            icon="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"
            hoverColor="#ff6666"
          />
          <LinkCard 
            text="Visit my Chat Bot here" 
            url="https://umd-chat-bot.streamlit.app/" 
            icon="https://cdn-icons-png.freepik.com/512/5292/5292555.png"
            hoverColor="#FFD700" 
          />
          <LinkCard 
            text="GitHub Repository" 
            url="https://github.com/aluthra23/UMD-Scheduling-Chat-Bot" 
            icon="https://www.svgrepo.com/show/475654/github-color.svg"
            hoverColor="#444" 
          />
        </div>
      </ReadMore>
    </div>
  );
};

export default UMD_ChatBot;
