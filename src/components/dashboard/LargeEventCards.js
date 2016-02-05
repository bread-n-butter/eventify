/**
 *    Large Event Cards for the Dashboard
 *
 */

import React, { Component } from 'react';

export default class LargeEventCards extends Component {

  render() {
    const event = this.props.event;
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img onClick={(e) => {e.preventDefault(); this.props.onClick();}} href='#!' src={event.image_url || 'https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg' } />
            <span className="card-title">{event.event_name}</span>
          </div>
          <div className="card-content">
            <p>{event.description || 'No description available'}</p>
          </div>
          <div className="card-action">
            <a onClick={(e) => {e.preventDefault(); this.props.onClick();}} href='#!'>More info</a>
          </div>
        </div>
      </div>

    );
  }

}

