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
          <source src='https://a0.muscache.com/airbnb/static/SanFrancisco-P1-1.mp4' type='video/mp4' />
        </video>

      </div>
    );
  }
}

export default BannerVideo;
