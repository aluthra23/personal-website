import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css'; // Correctly import navbar CSS
import { getImageUrl } from '../../utils';
// import DeviceInfo from 'react-native-device-info';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
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
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
