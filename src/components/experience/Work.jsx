import React from 'react';
import Noblis from './work/Noblis';
import Engauge from './work/Engauge';

const Work = () => {
  return (
    <div className="computer-science-skills">
        <h3 className='experience-subtitle' style={{'textAlign': 'center'}}>Work</h3>
        <Noblis/>
        <Engauge />
        
        {/* <SourceIQ/> */}
        {/* <TruVoice /> */}
        {/* <TKDesign /> */}
    </div>
  )
}

export default Work
