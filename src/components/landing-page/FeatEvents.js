/**
 *    Component for featured events in the landing page
 *    
 */

import React from 'react'

import Card from './EventCard'

const FeatEvents = ({events}) => {
  return (
    <div className="row">
      {events.map( (event, index) => (
          <Card key={index} event={event}/>
      ))}
    </div>
  )
}

export default FeatEvents