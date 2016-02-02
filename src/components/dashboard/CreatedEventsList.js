/**
 *    Created Events by User Component
 *    
 */

import React, { Component } from 'react';

//Components
import SmallEventCards from './SmallEventCards';

export default class CreatedEventsList extends Component {

  render() {
    return (
      <ul className='collection'>
      
        {
          this.props.data.map((event, index) => {
            return <SmallEventCards key={index} event={event} />;
          })
        }
      
        <li className="collection-item avatar">
          <img src="https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg" alt="" className="circle" />
          <span className="title"><b>Title</b></span>
          <p>Your awesome event here <br/>
          </p>
          <a href="#/dashboard" className="secondary-content"><i className='material-icons'>settings</i></a>
        </li>
        
      </ul>
    );
  }
  
}

