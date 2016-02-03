import React, { Component } from 'react';
import Modal from './modal';


export default class Buttons extends Component {

  render() {
    return (
      <div>
        <Modal data={this.props} />
      </div>
    );
  }
}
