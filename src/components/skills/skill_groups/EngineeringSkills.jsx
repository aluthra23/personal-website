import React from 'react';
import SkillCard from '../SkillCard';
import '../skills.css';
// import { getImageUrl } from '../../../utils';

const EngineeringSkills = () => {
  return (
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
)
}

export default EngineeringSkills
