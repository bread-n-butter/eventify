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
      'OObjectFit': 'fill'
    };
  }

  render() {
    return (
      <img src='../../assets/lights-party-dancing-music.jpg' style={this.videoStyle()}/>
    );
  }
}

export default BannerVideo;
