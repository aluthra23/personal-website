import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css'; // Correctly import navbar CSS
import AravImage from '../../assets/Arav_Image.jpg'; // Import your image
import {getImageUrl} from '../../utils'




function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        Arav Luthra
      </Link>


      <div className="menu">
        <img className="menu-button" src={getImageUrl("nav/menuIcon.png")} alt="menu-button"/> 

        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
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
      </div>
    </nav>
  );
}

export default Navbar;

