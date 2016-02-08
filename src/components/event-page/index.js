import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

<<<<<<< HEAD
import { joinEvent, deleteEvent, payForEvent } from '../../actions/';
=======
import { joinEvent, deleteEvent, fetchOneEvent } from '../../actions/';
>>>>>>> Refactored event detail page to make API call for event information.

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

class Event extends Component {

  constructor(props) {
    super(props);
    this.props.fetchOneEvent(this.props.params.id).then(() => { console.log(this.props); });
  }

  render() {

    const event = this.props.event;

    if (!this.props.event) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">

        <div className='row'>

          <div className='col m6 s12'>

            <Card>
              <CardHeader
                title={event.event_name}
                subtitle={'@ ' + event.event_address_label}/>
              <CardMedia>
                <img src={event.image_url} />
              </CardMedia>
            </Card>

          </div>

          <div className='col m6 s12'>

            <Card>
              <CardText>
                <Details data={ this.props.event } />
              </CardText>
              <CardActions>

                { this.props.user.isLoggedIn ?
                <Buttons
                  joinEvent={ this.props.joinEvent }
                  data={ this.props.event }
                  user={ this.props.user }
                  joined={ this.props.joined }
                  delete={ this.props.deleteEvent }
                  pay={ this.props.payForEvent }
                /> : <div>Please Sign in above to Join this event!</div>}
              </CardActions>
            </Card>

          </div>

        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ joinEvent, deleteEvent, payForEvent, fetchOneEvent }, dispatch);
}

function mapStateToProps(state) {
  return {
    event: state.events.event,
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    // selectedEvent: state.events.selectedEvent,
    joined: state.events.joinedEvents,
    user: state.user,
    pay: payForEvent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
