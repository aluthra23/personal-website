// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './css/app.css';
import AnimatedRoutes from './AnimatedRoutes.jsx';

const App = () => {
  return (
    <div className="app">
      <Router> 
        <AnimatedRoutes/>
      </Router>
    </div>
  );
}

export default App;
