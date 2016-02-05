/**
 *    Component for featured events in the landing page
 *
 */

import React, { PropTypes } from 'react';

import Card from './EventCard';

import LargeEventCards from '../dashboard/LargeEventCards';

class FeatEvents extends React.Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  handleClkMoreInfo(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  render() {
    return (
      <div className="row">
        {this.props.events.sort((a, b) => (
          (b.num_of_people_joined-a.num_of_people_joined)))
          .map( (event, index) => (
            <LargeEventCards key={index} event={event} onClick={this.handleClkMoreInfo.bind(this, event)}/>
        ))}
      </div>
    );
  }
}


//make sure this.props.events is an array
// FeatEvents.propTypes = {
//   events : React.PropTypes.array.isRequired
// }

export default FeatEvents;
