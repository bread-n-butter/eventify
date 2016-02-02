import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Picture from './pic';
import Title from './title';
import Author from './author';
import Details from './details';
import Buttons from './buttons';

class Event extends Component {

  render() {
console.log(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Title data={this.props.selectedEvent} />
          </div>
          <div className="col s6">
            <Picture data={this.props.selectedEvent} />
          </div>
          <div className="col s6">
            <Details data={this.props.selectedEvent} />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <Author data={this.props.selectedEvent} />
          </div>
          <div className="col s6">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    selectedEvent: state.events.selectedEvent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
