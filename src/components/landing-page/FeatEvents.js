/**
 *    Component for featured events in the landing page
 *
 */

import React from 'react';

import Card from './EventCard';

class FeatEvents extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.events.sort((a, b) => (
          (b.num_of_people_joined-a.num_of_people_joined)))
          .map( (event, index) => (
            <Card key={index} event={event}/>
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
