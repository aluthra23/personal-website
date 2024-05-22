import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Correctly import navbar CSS
import { getImageUrl } from '../../utils';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Smooth scroll to the top of the page
  };

  return (
    <nav>
      <Link to="/personal-website/" className="title" onClick={scrollToTop}>
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
          onClick={() => {
            setMenuOpen(false);
            scrollToTop(); // Scroll to top when a menu item is clicked
          }}
        >
          <li>
            <Link to="/personal-website/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/personal-website/education" onClick={scrollToTop}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/personal-website/skills" onClick={scrollToTop}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/personal-website/experience" onClick={scrollToTop}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/personal-website/projects" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/personal-website/contact" onClick={scrollToTop}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
