import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';

import Spinner from '../../helpers/spinner';

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
          src={this.props.data.image_url}
          preloader={this.preloader}>
          Image Load Failed!
        </ImageLoader>
      </div>
    );
  }
}
