import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css'; // Correctly import navbar CSS
import { getImageUrl } from '../../utils';
// import DeviceInfo from 'react-native-device-info';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/personal-website/" className="title">
        Arav Luthra
      </Link>
      <div className="menu">
        <img
          className="menu-button" /* Added menu-button class */
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${"menu-items"} ${menuOpen && "menu-open"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/personal-website/">Home</Link>
          </li>
          <li>
            <Link to="/personal-website/education">Education</Link>
          </li>
          <li>
            <Link to="/personal-website/skills">Skills</Link>
          </li>
          <li>
            <Link to="/personal-website/experience">Experience</Link>
          </li>
          <li>
            <Link to="/personal-website/projects">Projects</Link>
          </li>
          <li>
            <Link to="/personal-website/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
