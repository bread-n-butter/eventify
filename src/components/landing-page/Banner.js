/**
 *    
 *    Front Landing Page Banner
 *
 */
import React from 'react';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

// Search box now deprecated. Will keep just in case though.
// <input type="text" placeholder='Search for events' id='search-box' onChange={this.props.filterList} />

class Banner extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: '#fff', paddingBottom: '50px'}}>
        <h1 className="hero-header">YOUR EVENTS, CROWDFUNDED</h1>
        <h4 className="hero-header">Browse upcoming events near you</h4>
        <GoogleMapsSearchBar />
      </div>
    );
  }
}

export default Banner;
