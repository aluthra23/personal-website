// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './components/home/Home';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import NotFound from './components/NotFound'; // Import the NotFound component
import './css/app.css';

const App = () => {
  return (
    <div className="app">
      <Router> {/* Wrap Routes in Router */}
        <Routes>
          <Route path="/personal-website/" element={<Home />} />
          <Route path="/personal-website/education" element={<Education />} />
          <Route path="/personal-website/skills" element={<Skills />} />
          <Route path="/personal-website/experience" element={<Experience />} />
          <Route path="/personal-website/projects" element={<Projects />} />
          <Route path="/personal-website/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
