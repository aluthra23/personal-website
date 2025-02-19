import React from 'react';
import Noblis from './work/Noblis';
import Engauge from './work/Engauge';
import AmazonKuiper from './clubs/AmazonKuiper';
import AppDev from './clubs/AppDev';

const Work = () => {
  return (
    <div className="computer-science-skills">
        <h3 className='experience-subtitle' style={{'textAlign': 'center'}}>Work</h3>
        <AmazonKuiper/>
        <Noblis/>
        <Engauge />
        <AppDev/>
        
        {/* <SourceIQ/> */}
        {/* <TruVoice /> */}
        {/* <TKDesign /> */}
    </div>
  )
}

export default Work
