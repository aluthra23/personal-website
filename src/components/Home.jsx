// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import '../css/home.css'; // Import Home-specific CSS
import AravImage from '../assets/Arav_Image.jpg'; // Import the image
// import '../css/tailwind.css'

function Home() {
  return (
    <div className="home-container">
      <Navbar /> {/* Include Navbar */}
      <div className="home-card">
        <h2>Welcome to Arav Luthra's Portfolio Website</h2>
        <div className="home-content">
          <img src={AravImage} alt="Arav Luthra" className="profile-image" />
          <p>Freshman at <a href="https://umd.edu/">University of Maryland, College Park</a> and <a href="https://aces.umd.edu/">Advanced Cybersecurity Experience for Students (ACES)</a> Honors College pursuing a double major in <a href="https://www.cs.umd.edu/">Computer Science</a> and <a href="https://www-math.umd.edu/">Mathematics</a></p>
        </div>
      </div>
      <div className="about-me-card">
        <h2>About Me</h2>
        <div className="about-me-content">
          <p>Highly motivated Rising College Freshman with a brilliant academic record who demonstrates a strong work ethic, creative ability, a positive attitude, and excellent problem-solving skills. Currently pursuing a Bachelor’s degree in Computer Science at the University of Maryland and its ACES (Advanced Cybersecurity Experience for Students) Honors College. Seeking a Software Engineering internship.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
