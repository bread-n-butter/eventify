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
  
  wholeCardStyle() {
    return {
      height: '550px'
    };
  }
  
  eventPicStyles() {
    return {
      height: '200px', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat', 
      backgroundImage: 'url("' + this.props.event.image_url + '")' 
    };
  }
  
  cardTitleStyles() {
    return {
      height: '100px'
    };
  }
  
  render() {
    const event = this.props.event;
    return (
      <div className="col s12 m6 l4 feat-cards">
      
        <Card style={this.wholeCardStyle()}>
        
          <CardMedia>
            <div style={this.eventPicStyles()} onClick={(e) => {e.preventDefault(); this.props.onClick();}}> 
            </div>
          </CardMedia>
          
          <CardTitle 
            style={this.cardTitleStyles()}
            title={event.event_name}
            subtitle={event.event_address_label || 'No address specified'} 
          />
            
          <CardText>
          
          
            { event.event_date ? <p>{ Moment(event.event_date).format('dddd, MMM Do YYYY, hh:mm a') }</p> : <p>No date specified, please ask organizer</p> }
            
            <p> Desc: {event.description.length > 50 ? event.description.slice(0, 50) + '...' : event.description } </p>
            
            <p>Attendees: {event.num_of_people_joined || 0} / {event.total_number_of_people_req}</p>

            <ProgressBar data={event} />
            
            <div>This event is {Moment(event.event_date).fromNow()}</div>
          
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
