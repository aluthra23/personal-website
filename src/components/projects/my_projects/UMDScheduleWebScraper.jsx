import React from 'react';
import '../projects.css';
import LinkCard from '../LinkCard';
import ReadMore from '../ReadMore';

const UMDScheduleWebScraper = () => {
  return (
    <div className="project-card">
      <ReadMore title="UMD Courses Web Scraper">
      <p className="project-description">
        I developed this project to extract course information from the University of Maryland's <a href="https://academiccatalog.umd.edu/undergraduate/approved-courses/" target="_blank" rel="noopener noreferrer">Course Catalog</a> and <a href="https://app.testudo.umd.edu/soc/" target="_blank" rel="noopener noreferrer">Schedule of Classes</a> websites, and construct datasets with the data scraped about each UMD course.
      </p>
      <p className="project-description">
        My inspiration for this came from a project idea related to UMD coursework and data analysis. However, I realized that I couldn't find any datasets related to UMD coursework particularly, so I decided to construct the datasets myself by developing web scrapers.
      </p>
      <h4 className="features-title">Datasets</h4>
      <p className="project-description">You can find the actual datasets on my <a href="https://github.com/aluthra23/UMD_Schedule_Web_Scraper/" target="_blank" rel="noopener noreferrer">GitHub Repository!</a></p>
      <ul className="project-features">
        <li><strong>UMD Course Catalog Dataset:</strong> A comprehensive collection of undergraduate and graduate course offerings available at the University of Maryland, College Park. It includes detailed information about each course, such as course title, course number, credits, description, prerequisites, restrictions, and any recommended or formerly named courses. This dataset serves as a valuable resource for students, faculty, and researchers interested in exploring the diverse array of academic offerings at the university.</li>
        <li><strong>UMD Schedule of Classes Dataset:</strong> Provides information about course schedules, instructors, and available seats for each class offered at the University of Maryland, College Park for the Fall 2024 Semester, but can be easily tweaked to collect data for other semesters. It includes details such as section ID, instructor name, total seats, open seats, waitlist count, lecture, discussion, and lab times. This dataset is essential for students during the course registration process, allowing them to plan their academic schedules effectively and make informed decisions about course selection.</li>
        <li><strong>UMD Course Prefixes Dataset:</strong> Contains a comprehensive list of course prefixes and their corresponding full forms at the University of Maryland, College Park. It provides essential metadata about the structure of course codes used in the course catalog and schedule of classes. This dataset serves as a reference guide for understanding the organizational hierarchy of courses offered by various departments and programs within the university, facilitating efficient navigation and search functionalities for users accessing course-related information.</li>
      </ul>
      <h4 className="features-title">Technologies Used</h4>
      <ul className="project-features">
        <li>Python: Programming language used for scripting</li>
        <li>Beautiful Soup (bs4): Python library for web scraping</li>
        <li>Requests: Python library for making HTTP requests</li>
        <li>CSV: Python library for reading and writing CSV files</li>
        <li>Pandas: Python library for data manipulation and analysis</li>
      </ul>
      <h4 className="features-title">Citation Requirement</h4>
      <p className="project-description">
        If you use any of the datasets or scripts from this project, you must cite the project repository in your work. Here is the recommended citation format:
      </p>
      <p className="project-description">
        "Arav Luthra. UMD Schedule Web Scraper. https://github.com/aluthra23/UMD_Schedule_Web_Scraper/"
      </p>
      <div className="project-links">
        <LinkCard 
          text="GitHub Repository" 
          url="https://github.com/aluthra23/UMD_Schedule_Web_Scraper/" 
          icon="https://www.svgrepo.com/show/475654/github-color.svg"
          hoverColor="#444" 
        />
      </div>
      </ReadMore>
    </div>
  );
};

export default UMDScheduleWebScraper;
