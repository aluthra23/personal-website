// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './components/pages/home/Home';
import Education from './components/pages/education/Education';
import Skills from './components/pages/skills/Skills';
import Experience from './components/pages/experience/Experience';
import Projects from './components/pages/projects/Projects';
import NotFound from './components/pages/NotFound'; // Import the NotFound component
import './css/app.css';

const App = () => {
  return (
    <div className="app">
      <Router> {/* Wrap Routes in Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for invalid paths */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
