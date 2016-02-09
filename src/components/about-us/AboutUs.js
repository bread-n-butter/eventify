import React from 'react';

//Components
import MissionBanner from './MissionBanner';
import MeetTheTeam from './MeetTheTeam';
import TechStack from './TechStack';
import HowItWorks from './HowItWorks';

class AboutUs extends React.Component {
  
  render() {
    return (
      
      <div>
      
        <MissionBanner />
        
        <MeetTheTeam />
        
        <TechStack />
        
        <HowItWorks />
        
      </div>
    
    );
  }
}

export default AboutUs;