import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Smooth scroll to the top of the page
  };

  return (
    <nav>
      <Link to="/personal-website/" className="title" onClick={scrollToTop}>
        Arav Luthra
      </Link>
      <div className="menu">
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${"menu-items"} ${menuOpen && "menu-open"}`}
          onClick={() => {
            setMenuOpen(false);
            scrollToTop(); // Scroll to top when a menu item is clicked
          }}
        >
          <li className={location.pathname === '/personal-website/' ? 'active' : ''}>
            <Link to="/personal-website/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className={location.pathname === '/personal-website/education' ? 'active' : ''}>
            <Link to="/personal-website/education" onClick={scrollToTop}>
              Education
            </Link>
          </li>
          <li className={location.pathname === '/personal-website/skills' ? 'active' : ''}>
            <Link to="/personal-website/skills" onClick={scrollToTop}>
              Skills
            </Link>
          </li>
          <li className={location.pathname === '/personal-website/experience' ? 'active' : ''}>
            <Link to="/personal-website/experience" onClick={scrollToTop}>
              Experience
            </Link>
          </li>
          <li className={location.pathname === '/personal-website/projects' ? 'active' : ''}>
            <Link to="/personal-website/projects" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li className={location.pathname === '/personal-website/contact' ? 'active' : ''}>
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
