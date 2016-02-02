/**
 *    Component for individual event cards for landing page and also the Dashboard.
 *
 *    Uses Material UI's components
 *
 */
import React from 'react';
import Moment from 'moment';

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
        <img src={event.image_url} />
        {/*<img src='http://lorempixel.com/640/480/nightlife' />*/}
      </CardMedia>
      <CardTitle title={event.event_name} subtitle={event.num_of_people_joined}/>
      { event.event_date ? <CardText> Moment(event.event_date).format('dddd, MMM Do YYYY')</CardText>  : null }
      <CardText>${event.price_per_person}</CardText>
    </Card>
  </div>
);

export default EventCard;
