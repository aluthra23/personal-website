// src/components/skills/Skills.jsx 
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import SkillCard from './SkillCard';
import './skills.css';
import { getImageUrl } from '../../utils';
import {motion} from 'framer-motion';

const Skills = () => {
  return (
    <motion.div 
      className='whole-home'
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <Navbar/> */}
      <div className="skills-container">
        <div className="skills-content">
          <h2 className='skills-title'>Skills</h2>
          <div className="computer-science-skills">
            <h3 className='skills-subtitle'>Computer Science Skills</h3>
            <div className="skill-card-group">
              <SkillCard
                title="Python"
                description="Experienced in Python programming language with libraries such as NumPy, Pandas, Matplotlib, Seaborn, Beautiful Soup, and csv."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" // Replace with actual logo link
              />
              <SkillCard
                title="Java"
                description="Proficient in Java programming language and Object-Oriented Programming."
                level="Intermediate"
                logo="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" // Replace with actual logo link
              />
              <SkillCard
                title="R"
                description="Experienced in R for statistical computing and data visualization using libraries like ggplot2 and dplyr."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png" // Replace with actual logo link
              />
              <SkillCard
                title="Flutter"
                description="Proficient in developing cross-platform mobile applications using Flutter framework."
                level="Intermediate"
                logo="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
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
                level="Intermediate"
                logo="https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"
              />
              <SkillCard
                title="Bash Scripting"
                description="Experienced in writing Bash scripts for automating tasks and managing system operations."
                level="Intermediate"
                logo="https://cdn3.brettterpstra.com/uploads/2015/02/terminal-longshadow.png"
              />
              <SkillCard
                title="SwiftUI"
                description="Proficient in building user interfaces for iOS applications using SwiftUI framework."
                level="Intermediate"
                logo="https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png"
              />
              <SkillCard
                title="JavaScript"
                description="Proficient in JavaScript programming language for web development."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" // Replace with actual logo link
              />
              <SkillCard
                title="SQL"
                description="Proficient in SQL for database management and querying."
                level="Intermediate"
                logo="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
              />
              <SkillCard
                title="React JS"
                description="Proficient in building user interfaces for web applications using React.js library."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Replace with actual logo link
              />
              <SkillCard
                title="Node.js"
                description="Proficient in building server-side applications using Node.js runtime environment."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" // Replace with actual logo link
              />
              <SkillCard
                title="MATLAB"
                description="Experienced in MATLAB for numerical computing and data analysis."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" // Replace with actual logo link
              />
              <SkillCard
                title="Git"
                description="Proficient in version control using Git."
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" // Replace with actual logo link
              />
              <SkillCard
                title="x86-64 Assembly"
                description="Skilled in x86-64 Assembly language programming, with a strong understanding of low-level hardware manipulation, instruction set architecture, and performance optimization techniques"
                level="Intermediate"
                logo="https://whiteout2.gallerycdn.vsassets.io/extensions/whiteout2/x86/0.4.2/1639429284758/Microsoft.VisualStudio.Services.Icons.Default" // Replace with actual logo link
              />
              <SkillCard
                title="Flask"
                description="Proficient in Flask for web development and deployment. Developed the backend for the wAIste App (an app I built), managing API endpoints and integrating AI/ML models. Experienced in server configuration and optimizing application performance."
                level="Intermediate"
                logo={getImageUrl('Flask_Logo.png')}// Replace with actual logo link
              />
              <SkillCard
                title="LXC Networking"
                description="Proficient in networking concepts and configuring containers and virtual machines, with hands-on experience building containers for Honeypot projects. Designed a Honeypot Research Project to explore cybersecurity threats and vulnerabilities, investigating how attackers’ behaviors and interactions vary when encountering a high-interaction honeypot with rotating US bank names.
                
                https://shorturl.at/aXC5M"
                level="Intermediate"
                logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Containers_logo.svg/1200px-Linux_Containers_logo.svg.png" 
              />
              <SkillCard
                title="VM Networking"
                description="Experienced in networking concepts and configuration for containers and virtual machines. Enriched by coursework in ACES LLP, where I gained familiarity with iptable rules, 1:1 NAT Mapping, Linux Services, Port Scanning, Packet Capture, Firewall configurations, Task Scheduling, Keyloggers, Man-in-the-middle attacks, and Crontab management."
                level="Intermediate"
                logo="https://static-00.iconduck.com/assets.00/virtual-machines-icon-2048x1856-qvhgz3ou.png"
              />
              {/* Add other computer science skills */}
            </div>
          </div>
          
          <div className="engineering-skills">
            <h3 className='skills-subtitle'>Engineering Skills</h3>
            <div className="skill-card-group">
              <SkillCard
                title="AutoCAD"
                description="Proficient in AutoCAD for creating precise and detailed 2D technical drawings and blueprints, with extensive experience in drafting and design for engineering projects."
                level="Advanced"
                logo="https://seeklogo.com/images/A/autocad-logo-69326D7728-seeklogo.com.png"
              />
              <SkillCard
                title="Solidworks"
                description="Experienced in SolidWorks for advanced 3D modeling and design, including the creation of complex assemblies and detailed simulations for engineering and manufacturing projects."
                level="Advanced"
                logo="https://softwarelist.oregonstate.edu/sites/softwarelist.oregonstate.edu/files/styles/software_image/public/software/solidworks.png?itok=oIKh_5TA"
              />

              <SkillCard
                title="Onshape"
                description="Skilled in Onshape for collaborative 3D modeling and design, leveraging cloud-based tools to create and manage complex mechanical parts and assemblies efficiently."
                level="Advanced"
                logo="https://us.v-cdn.net/5022071/uploads/V3B85DTZQS8W/box-onshape-favicon-512-401x.png"
              />              
              {/* Add other engineering skills */}
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    </motion.div>
  );
};

export default Skills;
