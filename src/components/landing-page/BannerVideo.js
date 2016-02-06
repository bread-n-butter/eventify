/**
 *    HTML 5 Banner Video
 *
 */
import React from 'react';



class BannerVideo extends React.Component {
  
  videoStyle() {
    return {
      bottom: '0',
      position: 'absolute',
      height: '1000px',
      width: 'auto',
      display: 'inline-block',
      boxSizing: 'border-box',
      '-o-object-fit': 'fill'
    };
  }

  render() {
    return (
      <video autoPlay loop style={this.videoStyle()}>
        <source src="https://a0.muscache.com/airbnb/static/SanFrancisco-P1-1.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default BannerVideo;
