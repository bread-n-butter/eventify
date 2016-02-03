/**
 *    Front landing page with Picture Banner,
 *    SearchBar,
 *    and Featured list of Events
 *
 *    TODO: Vincent
 */
import React from 'react';
import BannerVideo from './BannerVideo';

// <img className="responsive-img" id='banner-img' src="http://assets3.thrillist.com/v1/image/1439210/size/tmg-article_main_wide_2x" />

class Banner extends React.Component {

  render() {
    return (
      <div className="col s12">

        <BannerVideo />

        <input type="text" placeholder='Search for events' id='search-box' onChange={this.props.filterList} />

      </div>
    );
  }
}

export default Banner;
