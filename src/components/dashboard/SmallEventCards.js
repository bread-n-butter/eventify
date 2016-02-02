/**
 *    Small Event Cards for the Dashboard
 *    
 */

import React, { Component } from 'react';

export default class SmallEventCards extends Component {

  render() {
    const event = this.props.event;
    return (
        <li className="collection-item avatar">
          <img src="https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg" alt="" className="circle" />
          <span className="title"><b>{event.eventName}</b></span>
          <p>{event.description}<br/>
          </p>
          <a href="#/dashboard" className="secondary-content"><i className='material-icons'>settings</i></a>
        </li>
    );
  }
  
}

