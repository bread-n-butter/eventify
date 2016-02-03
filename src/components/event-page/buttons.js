import React, { Component } from 'react';
import Modal from './modal';


export default class Buttons extends Component {

  render() {
    if(this.props.user.id === this.props.data.creator){
      return (
        <div> Creator of event actions</div>
      );

    } else if(!this.props.user) {
      return (
       <div> Already joined </div>
      );
    }

    return (
      <div className="">
        <Modal data={this.props} />
      </div>
    );
  }
}
