/**
 *    Component for featured events in the landing page
 *    
 */

import React from 'react'

import Card from './EventCard'

class FeatEvents extends React.Component {
  
  render() {
    return (
      <div className="row">
        {this.props.events.map( (event, index) => (
            <Card key={index} event={event}/>
        ))}
      </div>
    )
  }

}

//make sure this.props.events is an array
FeatEvents.propTypes = {
  events : React.PropTypes.array.isRequired
}

export default FeatEvents