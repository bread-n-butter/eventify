/**
 *    Front landing page with Picture Banner,
 *    SearchBar,
 *    and Featured list of Events
 *
 *    TODO: Vincent
 */
import React from 'react';
import BannerVideo from './BannerVideo';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

// First image banner we had
// <img className="responsive-img" id='banner-img' src="http://assets3.thrillist.com/v1/image/1439210/size/tmg-article_main_wide_2x" />

// Search box now deprecated. Will keep just in case though.
// <input type="text" placeholder='Search for events' id='search-box' onChange={this.props.filterList} />

class Banner extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: '#fff', paddingBottom: '50px'}}>
        <BannerVideo />
        <h1 className="hero-header" >YOUR EVENTS, CROWDFUNDED</h1>
        <h4 className="hero-header">Browse upcoming events near you</h4>
        <GoogleMapsSearchBar />
        <div>
        </div>
      </div>
    );
  }
}

export default Banner;
