import React from 'react';
import '../projects.css';

const UMD_ChatBot = () => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">UMD Scheduling Chatbot</h3>
      </div>
      <p className="project-description">
        The <a href="https://umd-chat-bot.streamlit.app/" target="_blank" rel="noopener noreferrer"><strong>UMD Scheduling Chatbot</strong></a> is an AI-powered assistant designed to help students at the University of Maryland find detailed information about courses and schedules. This project leverages OpenAI's GPT-4o model and a custom vector store built with FAISS to provide accurate and timely responses to user queries about UMD classes.
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
        <li><strong>OpenAI API:</strong> Utilized for the chatbot's natural language understanding and response generation. The GPT-4o model processes user queries and generates relevant, context-aware responses, leveraging OpenAI's advanced capabilities.</li>
        <li><strong>LangChain:</strong> A framework that enhances the chatbot's natural language processing capabilities, facilitating the creation of text embeddings for understanding user queries and course information. LangChain helps in embedding course data into vectors stored in the FAISS index for efficient similarity searches.</li>
        <li><strong>FAISS (Facebook AI Similarity Search):</strong> A library developed by Facebook AI Research for efficient similarity search and clustering of dense vectors. FAISS is used to build and manage the vector store, enabling fast and accurate information retrieval from the chatbot.</li>
      </ul>
      <h4 className="features-title">Technical Details:</h4>
      <p className="project-description">
        I leveraged threading to handle background updates, ensuring the vector store is always up-to-date with the latest course information. This approach allows the chatbot to remain responsive while maintaining current data. Additionally, the integration of Streamlit, LangChain, FAISS, and OpenAI API is crucial to the chatbot's functionality:
      </p>
      <ul className="project-features">
        <li><strong>Data Preparation:</strong> Data is preprocessed and converted into Document objects using LangChain, which are then embedded into vectors.</li>
        <li><strong>Vector Store Management:</strong> FAISS manages the creation, loading, and updating of the vector store, allowing for efficient similarity searches on user queries.</li>
        <li><strong>Response Generation:</strong> The relevant documents from the vector store are used to provide context to the OpenAI API, which generates detailed, contextually relevant responses using the GPT-4o model.</li>
        <li><strong>User Interface:</strong> Streamlit is used to create a simple and intuitive chat interface, enabling users to interact seamlessly with the AI-powered chatbot.</li>
      </ul>
      <div className="project-link">
        <a href="https://umd-chat-bot.streamlit.app/" target="_blank" rel="noopener noreferrer">Visit my Chat Bot here</a>
      </div>
      <div className="project-link">
        <a href="https://github.com/aluthra23/UMD-Scheduling-Chat-Bot" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default UMD_ChatBot;
