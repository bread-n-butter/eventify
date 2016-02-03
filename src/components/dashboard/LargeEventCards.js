/**
 *    Large Event Cards for the Dashboard
 *    
 */

import React, { Component } from 'react';

export default class LargeEventCards extends Component {
  
  handleSubmit() {
    console.log('TODO: Edit event functionality!!!');
  }

  render() {
    const event = this.props.event;
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img src={event.image_url} />
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

