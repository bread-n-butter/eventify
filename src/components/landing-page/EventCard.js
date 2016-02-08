/**
 *    Component for individual event cards for landing page and also the Dashboard.
 *
 *    Uses Material UI's components
 *
 */
import React from 'react';
import Moment from 'moment';

//Material UI imports
// import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
// import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ProgressBar from '../../helpers/progressBar';



class EventCard extends React.Component {

  render() {
    const event = this.props.event;
    return (
      <div className="col s12 m6 l4 feat-cards">
        <Card style={{height: '620px'}}>
          <CardMedia>
            <img src={event.image_url} onClick={(e) => {e.preventDefault(); this.props.onClick();}}/>
          </CardMedia>
          <CardTitle 
            className='truncate'
            title={event.event_name}
            subtitle={event.event_address_label || 'San Francisco, CA'} />
          <CardText>
            { event.event_date ? <p>{ Moment(event.event_date).format('dddd, MMM Do YYYY, hh:mm a') }</p> : <p>No date specified, please ask organizer</p> }
            <p>Attendees: {event.num_of_people_joined || 0} / {event.total_number_of_people_req}</p>
            <ProgressBar data={event} />
          </CardText>
          <CardActions>
            <FlatButton label='More info' onClick={() => (this.props.onClick())} />
          </CardActions>

        </Card>
      </div>
    );

  }

}

export default EventCard;
