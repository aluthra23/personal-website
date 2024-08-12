// src/components/projects/InventoryTracker.jsx
import React from 'react';
import LinkCard from '../LinkCard';
import '../projects.css';
import ReadMore from '../ReadMore';

const InventoryTracker = () => {
  return (
    <div className="project-card">
      <ReadMore title="Inventory Management Application">

        <p className="education-second-subtitle">August 2024</p>

        <p className="project-description">
          The Inventory Management App is a web application designed to streamline inventory tracking for businesses of all sizes. Built with Next.js, Material-UI, and Firebase Firestore, this app enables users to efficiently manage their inventory by adding, monitoring, and removing items in real-time.
        </p>
        
        <h4 className="features-title">Features:</h4>
        <ul className="project-features">
          <li>Add items to inventory</li>
          <li>Track item quantities and monitor stock levels</li>
          <li>Remove items from inventory when they are sold or used</li>
        </ul>

        <h4 className="features-title">Technologies Used:</h4>
        <ul className="project-features">
          <li><strong>Next.js:</strong> React framework for building the app</li>
          <li><strong>Material-UI:</strong> Library for a sleek and responsive user interface</li>
          <li><strong>Firebase Firestore:</strong> Backend database for real-time data management</li>
        </ul>

        <div className="project-links">
          <LinkCard 
            text="GitHub Repository" 
            url="https://github.com/aluthra23/inventory_tracker" 
            icon="https://www.svgrepo.com/show/475654/github-color.svg"
            hoverColor="#444"
          />

          <LinkCard
            text="Demo"
            url="https://youtu.be/Pw4PuXA72OU?si=2923GFCjjA2esjGI"
            icon="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"
            hoverColor="#ff6666"
          />
          
        </div>
      </ReadMore>
    </div>
  );
};

export default InventoryTracker;
