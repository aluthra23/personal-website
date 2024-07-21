// src/components/home/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import './home.css'; // Import Home-specific CSS
import AravImage from '../../assets/Arav_Image.jpg'; // Import the image
import Socials from './Socials';
import { motion } from 'framer-motion';

function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page
  };
  
  const [loopNum, setLoopNum] = useState(Math.floor(Math.random() * 3));
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Data Scientist", "Cybersecurity Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <motion.div 
      className="whole-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home-container">
        <div className="home-card">
          <div className="intro-container">
            <h2>{`Hi! I'm Arav Luthra, a `} <b><u>{text}</u></b></h2>
            <img src={AravImage} alt="Arav Luthra" className="profile-image" />
          </div>
          <div className="home-content">
            <div className='bio-text'>
              <p>Rising Sophomore at <a href="https://umd.edu/" target="_blank">University of Maryland, College Park</a> and a member of the <a href="https://aces.umd.edu/" target="_blank">Advanced Cybersecurity Experience for Students (ACES)</a> Honors College, pursuing a double major in <a href="https://www.cs.umd.edu/" target="_blank">Computer Science</a> and <a href="https://www-math.umd.edu/" target="_blank">Mathematics</a></p>
            </div>
            <div className='contact-text'>
              <Link to='/personal-website/contact' className="contact-button" onClick={scrollToTop}>
                Contact Me
              </Link> {/* Add this line */}
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <h2>About Me</h2>
          <div className="about-me-content">
            <p>
              I am a highly motivated rising sophomore at <a href="https://umd.edu/" target="_blank">University of Maryland, College Park</a>, pursuing a double major in <a href="https://www.cs.umd.edu/" target="_blank">Computer Science</a> and <a href="https://www-math.umd.edu/" target="_blank">Mathematics</a>, while being an active member of the <a href="https://aces.umd.edu/" target="_blank">Advanced Cybersecurity Experience for Students (ACES)</a> Honors College. 
              With a strong academic record and a passion for technology, I consistently demonstrate a robust work ethic, creative problem-solving skills, and a positive attitude. 
              I am eager to apply my knowledge and skills in a challenging Software Engineering internship, where I can contribute to innovative projects and further develop my expertise.
            </p>
          </div>
        </div>

        <div className="about-me-card">
          <Socials />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Home;
