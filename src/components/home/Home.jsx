// src/components/home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './home.css'; // Import Home-specific CSS
import AravImage from '../../assets/Arav_Image.jpg'; // Import the image
import Socials from './Socials';

function Home() {
  return (
    <div className="whole-home">
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <h2>Hi, I'm Arav!</h2>
          <div className="home-content">
            <div className='bio-text'>
              <img src={AravImage} alt="Arav Luthra" className="profile-image" />
              <p>Freshman at <a href="https://umd.edu/">University of Maryland, College Park</a> and <a href="https://aces.umd.edu/">Advanced Cybersecurity Experience for Students (ACES)</a> Honors College pursuing a double major in <a href="https://www.cs.umd.edu/">Computer Science</a> and <a href="https://www-math.umd.edu/">Mathematics</a></p>
            </div>
            <div className='contact-text'>
              <a href='/personal-website/contact' className="contact-button">Contact Me</a> {/* Add this line */}
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <h2>About Me</h2>
          <div className="about-me-content">
            <p>Highly motivated Rising College Freshman with a brilliant academic record who demonstrates a strong work ethic, creative ability, a positive attitude, and excellent problem-solving skills. Currently pursuing a Bachelor’s degree in Computer Science at the University of Maryland and its ACES (Advanced Cybersecurity Experience for Students) Honors College. Seeking a Software Engineering internship.</p>
          </div>
        </div>

        <div className="about-me-card">
          <Socials/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
