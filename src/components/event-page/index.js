import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { joinEvent } from '../../actions/';

import Pic from './pic';
import Title from './title';
import Author from './author';
import Details from './details';
import Buttons from './buttons';

class Event extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Title data={this.props.selectedEvent} />
          </div>
          <div className="col s5 offset-s1">
            <Pic data={this.props.selectedEvent} />
          </div>
          <div className="col s5">
            <Details data={this.props.selectedEvent} />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <Author data={this.props.selectedEvent} />
          </div>
          <div className="col s6">
            <Buttons joinEvent={ this.props.joinEvent } data={this.props.selectedEvent} user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({joinEvent}, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    selectedEvent: state.events.selectedEvent,
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
