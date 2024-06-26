// src/components/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">&copy; {currentYear} Arav Luthra's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
