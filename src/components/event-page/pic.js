import React, { Component } from 'react';

import Spinner from '../../helpers/spinner';

import ImageLoader from 'react-imageloader';

export default class Picture extends Component {

  preloader() {
    return (
      <Spinner />
    );
  }

  render(){
    return (
      <div className="">
        <ImageLoader
          src='http://lorempixel.com/500/500/nightlife'
          preloader={this.preloader}>
          Image Load Failed!
        </ImageLoader>
      </div>
    );
  }
}
