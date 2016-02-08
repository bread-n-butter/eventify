/**
 *    Large Event Cards for the Dashboard
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import ProgressBar from '../../helpers/progressBar';

export default class LargeEventCards extends Component {

  progressStyle() {
    const event = this.props.event;
    const percentageJoined = Math.floor(event.num_of_people_joined/event.total_number_of_people_req);
    return  {
      width : percentageJoined + '%'
    };
  }

  render() {
    const event = this.props.event;
    return (
      <div className="col m6 s12 l4">
        <div className="card large">

            <div className="card-image">
              <img onClick={(e) => {e.preventDefault(); this.props.onClick();}} href='#!' src={event.image_url || 'https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg' } />
              <span
                className="card-title"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  padding: '10px',
                  width: '100%',
                  minHeight: '40%'
                }}>
                {event.event_name}
              </span>
            </div>

          <div className="card-content">
            <p>{event.description || 'No description available'}</p>
          </div>
          <div className="card-action">
            <ProgressBar data={event} />
            <div className='progress'>
              <div className='determinate' style={this.progressStyle()}></div>
            </div>
            <a onClick={(e) => {e.preventDefault(); this.props.onClick();}} href='#!'>More info</a>
          </div>
        </div>
      </div>

    );
  }

}

