// src/components/experience/my_work/clubs/AIMLClub.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const AIMLClub = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Software Engineer</h3>
      </div>
      <img 
        src={getImageUrl('AIML.jpeg')}
        alt="AI/ML Club"
        className="education-second-logo"
      />
      <p className="education-subtitle">AI/ML Club × Engauge</p>
      <p className="education-second-subtitle">October 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">I was selected by UMD's AI/ML Club for this project as 1 of 4 people from a pool of 125 applicants. We are developing a Retrieval-Augmented Generation (RAG) system for university lectures using LLMs to answer student queries in real-time.</p>

      <p className='project-description'>Process:</p>

      <ol className="project-list">
        <li>We used OpenAI's Whisper API to transcribe lectures in real-time and used the spaCy library to preprocess the transcription.</li>
        <li>We store the transcribed lectures as vector embeddings in a Qdrant vector database</li>
        <li>We have a separate user interface where students can type in queries at any point in the lecture and the Qdrant vector database is traversed to find relevant context before generating a response from the Llama 3.0 model which is locally hosted</li>
      </ol>

      <p className='project-description'>We are also applying topic modeling to identify areas of student confusion, enabling targeted support in high-need topics. Engauge is also deployed and currently being used in several UMD math courses.</p>




      <LinkCard
        text="AI/ML Club"
        url="https://www.linkedin.com/company/ai-ml-club/"
        icon={getImageUrl('AIML.jpeg')}
        hoverColor="#53B4B4"
      />

      <LinkCard
        text="Engauge"
        url="https://www.linkedin.com/company/engaugelive/"
        icon={getImageUrl('engaugelive_logo.jpeg')}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default AIMLClub;
