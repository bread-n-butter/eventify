/**
 *
 *    Banner Image
 *
 */
import React from 'react';

class BannerImage extends React.Component {

  bannerStyle() {
    return {
      bottom: '0',
      position: 'absolute',
      height: 'auto',
      display: 'inline-block',
      boxSizing: 'border-box',
      'OObjectFit': 'fill'
    };
  }

  render() {
    return (
      <img src='../../assets/lights-party-dancing-music-resized.jpg' style={this.bannerStyle()}/>
    );
  }
}

export default BannerImage;
