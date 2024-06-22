import React from 'react';
import SkillCard from '../SkillCard';
import '../skills.css';

const DataScienceSkills = () => {
  return (
    <div className="computer-science-skills">
      <h3 className='skills-subtitle'>Data Science Skills</h3>
      <div className="skill-card-group">
        <SkillCard
          title="Python"
          description="Experienced in Python programming language with libraries such as NumPy, Pandas, Matplotlib, Seaborn, Beautiful Soup, and csv."
          level="Advanced"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
        />
        <SkillCard
          title="NumPy"
          description="Experienced in NumPy for numerical computing in Python."
          level="Intermediate"
          logo='https://cdn.worldvectorlogo.com/logos/numpy-1.svg'
        />
        <SkillCard
          title="Pandas"
          description='Experienced in Pandas for data manipulation and analysis in Python.'
          level='Intermediate'
          logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s'
        />
        <SkillCard
          title='Web Scraping'
          description='Experienced in web scraping using libraries like Beautiful Soup and Scrapy.'
          level='Intermediate'
          logo='https://avatars.githubusercontent.com/u/28140896?s=280&v=4'
        />
        <SkillCard
          title="R"
          description="Experienced in R for statistical computing and data visualization using libraries like ggplot2 and dplyr."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png"
        />
        <SkillCard
          title="SQL"
          description="Proficient in SQL for database management and querying."
          level="Intermediate"
          logo="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
        />
        <SkillCard
          title="Tableau"
          description="Experienced in Tableau for data visualization and dashboard creation."
          level="Learning"
          logo='https://billigence.com/wp-content/uploads/2022/08/2-1024x1024.png'
        />
        <SkillCard
          title="MATLAB"
          description="Experienced in MATLAB for numerical computing and data analysis."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
        />
      </div>
    </div>
)
}

export default DataScienceSkills
