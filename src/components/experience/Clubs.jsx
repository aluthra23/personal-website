import React from 'react';
import AppDev from './clubs/AppDev';
import AmazonKuiper from './clubs/AmazonKuiper';

const Clubs = () => {
  return (
    <div className="computer-science-skills">
        <h3 className='experience-subtitle' style={{'textAlign': 'center'}}>Clubs</h3>
        <AmazonKuiper/>
        <AppDev />
    </div>
  )
}

export default Clubs
