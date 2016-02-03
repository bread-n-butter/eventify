import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { take } from 'lodash';

import { fetchEvents, auth, selectEvent, fetchOneEvent } from '../../actions/';

import Spinner from '../../helpers/spinner.js';


import FeaturedEventsList from './FeaturedEventsList';
import JoinedEventsList from './JoinedEventsList';
import CreatedEventsList from './CreatedEventsList';

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
    });
    this.props.fetchEvents();
  }


  render() {
    const events = this.props.events;
    // console.log(_.take(events, 4));
    if (events.length === 0) {
      return (
        <Spinner />
      );
    }
    return (
      <div className='dashboard'>
        <div className='row'>
          <div className="col s7">FEATURED
            <FeaturedEventsList select={this.props.selectEvent} data={ take(events, 9) } />
          </div>
          <div className="col s5">
            <div className="">JOINED
              <JoinedEventsList select={this.props.selectEvent} data={ take(events, 4) } />
            </div>
            <div className="">CREATED
              <CreatedEventsList fetchOneEvent={this.props.fetchOneEvent} data={ take(events, 4) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, auth, selectEvent, fetchOneEvent }, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.user.isLoggedIn,
    event: state.events.event
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
