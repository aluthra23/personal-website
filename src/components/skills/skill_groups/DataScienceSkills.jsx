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
