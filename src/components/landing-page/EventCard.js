/**
 *    Component for individual event cards for landing page and also the Dashboard. 
 *    
 *    Uses Material UI's components
 *    
 */
import React from 'react'

//Material UI imports
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


const EventCard = ({event}) => (
  <div className="col s4 feat-cards">
    <Card>
      <CardMedia>
        <img src={event.img} />
      </CardMedia>
      <CardTitle title={event.title} subtitle={event.desc}/>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
    </Card>
  </div>
)

export default EventCard