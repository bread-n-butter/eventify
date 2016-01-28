import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';

import {fetchEvents} from '../../actions/';
import Helper from '../../helpers/helpers';

class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchEvents();
    // console.log(this.props.events.data);
  }
  renderEvents() {
    return this.props.events.data.data.map((event) => {
      console.log(event);
      return (
        <li key={event.id}>
          {event}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.fetchEvents());
    return (
      <ul>
        {/* {this.renderEvents()} */}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEvents}, dispatch);
}

function mapStateToProps(state) {
  return {events: state.events.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

