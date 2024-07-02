// src/components/projects/UMDCoursesAPI.jsx
import React from 'react';
import LinkCard from '../LinkCard';
import '../projects.css';
import ReadMore from '../ReadMore';

const UMDCoursesAPI = () => {
  return (
    <div className="project-card">
      <ReadMore title="UMD Courses API (1.0.0)">
        <p className="project-description">
          The UMD Courses API is an open-source API developed using the FastAPI web framework. This API provides direct access to data related to University of Maryland (UMD) coursework. The API and its documentation can be accessed <a href="https://umd-courses-api-aluthra-705eb647.koyeb.app/" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <h4 className="features-title">Features:</h4>
        <ul className="project-features">
          <li>Retrieve course details</li>
          <li>Access section details for courses for specified semesters</li>
          <li>Get a list of all course prefixes and general education requirements</li>
        </ul>
        <h4 className="features-title">Data Sources:</h4>
        <p className="project-description">
          The API retrieves data by web scraping two critical UMD websites in real-time:
        </p>
        <ul className="project-features">
          <li><a href="https://app.testudo.umd.edu/soc/" target="_blank" rel="noopener noreferrer">UMD Schedule of Classes</a></li>
          <li><a href="https://academiccatalog.umd.edu/" target="_blank" rel="noopener noreferrer">UMD Course Catalog</a></li>
        </ul>
        <h4 className="features-title">Technologies Used</h4>
        <ul className="project-features">
          <li><strong>FastAPI:</strong> Web framework used for building the API</li>
          <li><strong>BeautifulSoup:</strong> Python library for web scraping</li>
          <li><strong>Requests:</strong> Python library for making HTTP requests</li>
          <li><strong>Koyeb:</strong> Platform for deploying the API with CI/CD support</li>
        </ul>
        <h4 className="features-title">Example Endpoints:</h4>
        <ul className="project-features">
          <li>Retrieve course details: <code>/v1/classes/{'{course_number}'}</code></li>
          <li>Access section details: <code>/v1/class_sections/{'{course_number}'}?term_id={'{term_id}'}</code></li>
          <li>List general education requirements: <code>/v1/geneds</code></li>
          <li>List course prefixes: <code>/v1/course_prefixes</code></li>
        </ul>
        <p className="project-description">
          This API is deployed on <a href="https://www.koyeb.com//" target="_blank" rel="noopener noreferrer">Koyeb</a>, a platform that supports continuous integration and continuous deployment (CI/CD). This allows for routine updates to the project, ensuring that the API remains up-to-date with the latest data and features. The deployment on Koyeb also makes the API accessible at any time.
        </p>
        <p className="project-description">
          All endpoints are prefixed with <code>/v1</code> to standardize access. This prefix will be updated with future versions to reflect ongoing improvements and updates. The current version is 1.0.0, marking the initial release. Subsequent updates to the API and the README will be documented with each new version.
        </p>
        <p className="project-description">
          This API does not require any authentication. However, please be respectful of the UMD websites and avoid overloading the API with too many requests.
        </p>
        <p className="project-description">
          You can access the Swagger documentation to see this API in action at <a href="https://umd-courses-api-aluthra-705eb647.koyeb.app/docs" target="_blank" rel="noopener noreferrer">/docs</a>.
        </p>
        <div className="project-links">
          <LinkCard 
            text="Access the API" 
            url="https://umd-courses-api-aluthra-705eb647.koyeb.app/" 
            icon="https://cdn-icons-png.flaticon.com/512/8681/8681370.png"
            hoverColor="#FFD700" 
          />
          <LinkCard 
            text="GitHub Repository" 
            url="https://github.com/aluthra23/UMD-Courses-API" 
            icon="https://www.svgrepo.com/show/475654/github-color.svg"
            hoverColor="#444"
          />
        </div>
      </ReadMore>
    </div>
  );
};

export default UMDCoursesAPI;
