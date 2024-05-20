import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Correctly import navbar CSS
import AravImage from '../assets/Arav_Image.jpg'; // Import your image




function Navbar() {
  return (
    <nav>
      <ul>
        <li className="nav-image">
          <Link to="/">
            <img src={AravImage} alt="Arav" className="nav-profile-image" />
          </Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

