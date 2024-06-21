import React from 'react';
import SkillCard from '../SkillCard';
import '../skills.css';

const CybersecuritySkills = () => {
  return (
    <div className="computer-science-skills">
      <h3 className='skills-subtitle'>Cybersecurity Skills</h3>
      <div className="skill-card-group">
        <SkillCard
          title="Bash Scripting"
          description="Experienced in writing Bash scripts for automating tasks and managing system operations."
          level="Advanced"
          logo="https://cdn3.brettterpstra.com/uploads/2015/02/terminal-longshadow.png"
        />
        <SkillCard
          title="LXC Networking"
          description="Proficient in networking concepts and configuring containers and virtual machines, with hands-on experience building containers for Honeypot projects. Designed a Honeypot Research Project to explore cybersecurity threats and vulnerabilities, investigating how attackers’ behaviors and interactions vary when encountering a high-interaction honeypot with rotating US bank names.
          https://shorturl.at/aXC5M"
          level="Advanced"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Containers_logo.svg/1200px-Linux_Containers_logo.svg.png" 
        />
        <SkillCard
          title="VM Networking"
          description="Experienced in networking concepts and configuration for containers and virtual machines. Enriched by coursework in ACES LLP, where I gained familiarity with iptable rules, 1:1 NAT Mapping, Linux Services, Port Scanning, Packet Capture, Firewall configurations, Task Scheduling, Keyloggers, Man-in-the-middle attacks, and Crontab management."
          level="Advanced"
          logo="https://static-00.iconduck.com/assets.00/virtual-machines-icon-2048x1856-qvhgz3ou.png"
        />
      </div>
    </div>
)
}

export default CybersecuritySkills
