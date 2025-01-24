// src/components/experience/my_work/clubs/AIMLClub.jsx
import React from 'react';
import { getImageUrl } from '../../../utils';
import LinkCard from '../../projects/LinkCard';

const Engauge = () => {
  return (
    <div className="project-card">
      <div className="project-header">  
        <h3 className="education-second-title">Lead Software Engineer</h3>
      </div>
      <img 
        src={getImageUrl('AIML.jpeg')}
        alt="AI/ML Club"
        className="education-second-logo"
      />
      <p className="education-subtitle">Engauge</p>
      <p className="education-second-subtitle">October 2024 - Present</p>
      <p className="education-second-subtitle">College Park, MD</p>
      
      <p className="project-description">Currently, I am taking the lead in remodeling the current website and services with React, Next.js, and Supabase. We are also developing a RAG system for university lectures using Qdrant and Google's LLMs to answer student queries in real-time. The professors' lectures are transcribed using AssemblyAI's Speech-to-Text model. Our product also includes additional features for instructors such as a drawing tool and live chat. Our product is set to be deployed in multiple UMD math classes and introductory CS classes in Spring 2025. We are also part of the Mokhtarzada Hatchery at the University of Maryland where we get access to a dedicated workplace, receive meaningful mentorship, and seed funding.</p>


      {/* <LinkCard
        text="AI/ML Club"
        url="https://www.linkedin.com/company/ai-ml-club/"
        icon={getImageUrl('AIML.jpeg')}
        hoverColor="#53B4B4"
      />
 */}
      <LinkCard
        text="Engauge"
        url="https://www.engauge.live/"
        icon={getImageUrl('engaugelive_logo.jpeg')}
        hoverColor="#53B4B4"
      />
    </div>
  );
};

export default Engauge;
