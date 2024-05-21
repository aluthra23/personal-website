// src/components/Home.jsx
import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer'
import './home.css'; // Import Home-specific CSS'
import { getImageUrl } from '../../../utils';

// import AravImage from '../assets/Arav_Image-removebg-preview.png'; // Import the image
// import '../css/tailwind.css'

function Home() {
  return (
    <div className="whole-home">
      <Navbar />
    </div>
  );
}

export default Home;
