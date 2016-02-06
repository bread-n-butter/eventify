import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { joinEvent, deleteEvent, payForEvent } from '../../actions/';

import Pic from './pic';
import Title from './title';
import Author from './author';
import Details from './details';
import Buttons from './buttons';

import GMap from '../../helpers/eventMap';

class Event extends Component {

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col s12">
            <Title data={ this.props.selectedEvent } />
          </div>
        </div>

        <div className='row'>
          <div className="col s7">
            <Pic data={ this.props.selectedEvent } />
            <Author data={ this.props.selectedEvent } />
          </div>
          <div className='col s5'>
          </div>
        </div>
        
        <div className='row'>
          <div className="col s12">
            <Details data={ this.props.selectedEvent } />
          </div>
        </div>

        <div className="row">
          <div className="col s4 push-s7 right-align">

            { this.props.user.isLoggedIn ?
            <Buttons
              joinEvent={ this.props.joinEvent }
              data={ this.props.selectedEvent }
              user={ this.props.user }
              joined={ this.props.joined }
              delete={ this.props.deleteEvent }
              pay={ this.props.payForEvent }
            /> : <div>Please Sign In above to Join this event!</div>}
          </div>
        </div>
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
