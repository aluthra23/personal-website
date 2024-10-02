import React from 'react';
import TruVoice from './work/TruVoice';
import TKDesign from './work/TKDesign';
import AIMLClub from './clubs/AIMLClub';
import AppDev from './clubs/AppDev';

const Clubs = () => {
  return (
    <div className="computer-science-skills">
        <h3 className='experience-subtitle' style={{'textAlign': 'center'}}>Clubs</h3>
        <AIMLClub />
        <AppDev />
    </div>
  )
}

export default Clubs
