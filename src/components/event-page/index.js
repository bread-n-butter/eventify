import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { joinEvent, deleteEvent, payForEvent } from '../../actions/';

import Pic from './pic';
import Title from './title';
import Author from './author';
import Details from './details';
import Buttons from './buttons';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import GMap from '../../helpers/eventMap';

class Event extends Component {

  render() {
    
    const event = this.props.selectedEvent;
    
    console.log('event is ', event);
    
    return ( 
      <div className="container">
      
        <Card>
          <CardMedia
            overlay={<CardTitle title={event.event_name} subtitle={'@ ' + event.event_address_label} />}
          >
            <img src={event.image_url} />
          </CardMedia>
          <CardText>
            <Details data={ this.props.selectedEvent } />
          </CardText>
          <CardActions>

            { this.props.user.isLoggedIn ? 
            <Buttons
              joinEvent={ this.props.joinEvent }
              data={ this.props.selectedEvent }
              user={ this.props.user }
              joined={ this.props.joined }
              delete={ this.props.deleteEvent }
              pay={ this.props.payForEvent }
            /> : <div>Please Sign in above to Join this event!</div>}
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ joinEvent, deleteEvent, payForEvent }, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    selectedEvent: state.events.selectedEvent,
    joined: state.events.joinedEvents,
    user: state.user,
    pay: payForEvent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
