// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NotFound from './components/NotFound'; // Import the NotFound component
import ButtonGradient from './assets/svg/ButtonGradient'

const App = () => {
  return (
    <div className="App">
      <Router> {/* Wrap Routes in Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for invalid paths */}
        </Routes>
        <ButtonGradient/>
      </Router>
    </div>
  );
}

export default App;
