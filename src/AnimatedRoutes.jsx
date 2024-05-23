import React from 'react'
import Home from './components/home/Home';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import NotFound from './components/NotFound'; // Import the NotFound component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <div className="whole-home">
            <AnimatePresence>
                <Navbar />
                <Routes location={location} key={location.pathname}>
                    <Route path="/personal-website/" element={<Home />} />
                    <Route path="/personal-website/education" element={<Education />} />
                    <Route path="/personal-website/skills" element={<Skills />} />
                    <Route path="/personal-website/experience" element={<Experience />} />
                    <Route path="/personal-website/projects" element={<Projects />} />
                    <Route path="/personal-website/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
