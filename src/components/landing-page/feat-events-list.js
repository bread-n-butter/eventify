/**
 *    Component for featured events in the landing page
 *    
 */

import React from 'react'

const featEventList = ({featEvents}) => {
  return (
    <ul className="list-group">
      {featEvents.map((event, index) => (
        <EventCard key={index} event={event}/>    
      ))}
    </ul>
  )
} 

export default featEventList