import React from 'react';
import SkillCard from '../SkillCard';
import '../skills.css';
import { getImageUrl } from '../../../utils';

const SoftwareEngineeringSkills = () => {
  return (
    <div className="computer-science-skills">
      <h3 className='skills-subtitle'>Software Engineering Skills</h3>
      <div className="skill-card-group">
        <SkillCard
          title="Flutter"
          description="Proficient in developing cross-platform mobile applications using Flutter framework."
          level="Intermediate"
          logo="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
        />
        <SkillCard
          title="API Integration"
          description="Experienced in integrating APIs for web and mobile applications, including RESTful APIs (GitHub) and third-party services."
          level="Learning"
          logo="https://cdn-icons-png.flaticon.com/256/2164/2164832.png"
        />
        <SkillCard
          title="Dart"
          description="Proficient in Dart programming language for developing mobile and web applications."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
        />
        <SkillCard
          title="HTML"
          description="Proficient in HTML for building web pages and web applications."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        />
        <SkillCard
          title="CSS"
          description="Proficient in CSS for styling web pages and web applications."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        />
        <SkillCard
          title="JavaScript"
          description="Proficient in JavaScript programming language for web development."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
        <SkillCard
          title="SwiftUI"
          description="Proficient in building user interfaces for iOS applications using SwiftUI framework."
          level="Intermediate"
          logo="https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png"
        />
        <SkillCard
          title="React JS"
          description="Proficient in building user interfaces for web applications using React.js library."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <SkillCard
          title="Node.js"
          description="Proficient in building server-side applications using Node.js runtime environment."
          level="Intermediate"
          logo="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
        />
        <SkillCard
          title="Flask"
          description="Proficient in Flask for web development and deployment. Developed the backend for the wAIste App (an app I built), managing API endpoints and integrating AI/ML models. Experienced in server configuration and optimizing application performance."
          level="Intermediate"
          logo={getImageUrl('Flask_Logo.png')}
        />
        <SkillCard
          title="FastAPI"
          description="Experienced in FastAPI for building fast and scalable web APIs with Python. Currently developing an API that scrapes and returns UMD course data"
          level="Intermediate"
          logo="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
        />

        <SkillCard
          title='MongoDB'
          description='Experienced in MongoDB for storing and managing data in web applications. Currently developing a full-stack web application that uses MongoDB for data storage.'
          level='Learning'
          logo="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3521676-2945120.png?f=webp"
        />
      </div>
    </div>
)
}

export default SoftwareEngineeringSkills
