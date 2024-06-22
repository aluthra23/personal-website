import React from 'react';
import SkillCard from '../SkillCard';
import '../skills.css';

const General_CS_Skills = () => {
  return (
    <div className="computer-science-skills">
        <h3 className='skills-subtitle'>General Computer Science Skills</h3>
        <div className="skill-card-group">
            <SkillCard
                title="Python"
                description="Experienced in Python programming language with libraries such as NumPy, Pandas, Matplotlib, Seaborn, Beautiful Soup, and csv."
                level="Advanced"
                logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
            />
            <SkillCard
                title="Java"
                description="Proficient in Java programming language and Object-Oriented Programming."
                level="Advanced"
                logo="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png"
            />
            <SkillCard
                title="C/C++"
                description="Experienced in C and C++ programming languages for system-level programming and algorithm development."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
            />
            <SkillCard
                title="Unix/Linux"
                description="Proficient in Unix/Linux operating systems, including system administration and shell scripting."
                level="Advanced"
                logo="https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"
            />
            <SkillCard
                title="Git"
                description="Proficient in version control using Git."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
            />
            <SkillCard
                title="x86-64 Assembly"
                description="Skilled in x86-64 Assembly language programming, with a strong understanding of low-level hardware manipulation, instruction set architecture, and performance optimization techniques"
                level="Advanced"
                logo="https://whiteout2.gallerycdn.vsassets.io/extensions/whiteout2/x86/0.4.2/1639429284758/Microsoft.VisualStudio.Services.Icons.Default"
            />

            <SkillCard
                title="RESTful APIs"
                description="Experienced in building RESTful APIs for web and mobile applications, including authentication, data retrieval, and data manipulation."
                level="Intermediate"
                logo="https://cdn-icons-png.flaticon.com/256/2164/2164832.png"
            />
            <SkillCard
                title="Docker"
                description="Experienced in containerization using Docker for application deployment and running Microsoft SQL servers on my local machine."
                level="Learning"
                logo="https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png"
            />
        </div>
    </div>
  )
}

export default General_CS_Skills
