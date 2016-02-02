/**
 *    HTML 5 Banner Video
 *    
 */
import React from 'react';

class BannerVideo extends React.Component {

  render() {
    return (
      <div className=''>
      
        <video autoPlay loop>
          <source src='https://a0.muscache.com/airbnb/static/Seoul-P1-4.mp4' type='video/mp4' />
        </video>
        
      </div>
    );
  }
}

export default BannerVideo;
