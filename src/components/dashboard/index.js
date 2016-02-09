import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { take } from 'lodash';

import { updateUserLocation, fetchCreatedEvents, fetchJoinedEvents, fetchEvents, fetchOneEvent, auth, selectEvent } from '../../actions/';

import Spinner from '../../helpers/spinner.js';


import FeaturedEventsList from './FeaturedEventsList';
import JoinedEventsList from './JoinedEventsList';
import CreatedEventsList from './CreatedEventsList';

import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

//experimental
import GoogleMapsWithSearchBox from './GoogleMapsWithSearchBox';
//endof experimental

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
      this.props.fetchEvents();
      this.props.fetchCreatedEvents(this.props.user.id);
      this.props.fetchJoinedEvents(this.props.user.id);
      // this.props.getProfilePic()
    });
  }

  //Ask for User's Lat / Long and save that to the Redux State
  componentDidMount() {
    let startPos;
    let that = this;
    const geoSuccess = function(position) {
      startPos = position;
      that.props.updateUserLocation({
        lat : startPos.coords.latitude,
        long : startPos.coords.longitude,
        address: undefined
      });
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  }

  handleLocationSubmit(suggest) {
    this.props.updateUserLocation({
      lat: suggest.location.lat,
      long: suggest.location.lng,
      address: suggest.label
    });
  }


  render() {
    const events = this.props.events;
    const joinedEvents = this.props.joinedEvents;
    const createdEvents = this.props.createdEvents;
    if (events.length === 0) {
      return (
        <Spinner />
      );
    }
    return (
      
      <div className="dashboard">
        
        <div className='row' style={{height: '500px'}}>
          <GoogleMapsWithSearchBox select={this.props.fetchOneEvent} events={events}/>
        </div>
        
        <div className="row">
          <GoogleMapsSearchBar
            updateLocation={(d) => this.handleLocationSubmit(d)} />
        </div>
        <div className="row">
          <div className="col s8">
            <h3 style={{fontWeight: 600, paddingLeft: '0.60rem'}}>Featured events</h3>
            <FeaturedEventsList select={this.props.fetchOneEvent} radius={10000} data={ take(events, 15) } user={this.props.user} />
          </div>
          <div className="col s4">
            <div>
              <h5 style={{paddingTop: '1.2rem'}}>Events You've Joined</h5>
              <JoinedEventsList select={this.props.fetchOneEvent} data={ take(joinedEvents, 10) } />
            </div>
            <div className="">
              <h5>Events You've Created</h5>
              <CreatedEventsList select={this.props.fetchOneEvent} data={ take(createdEvents, 10) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCreatedEvents, fetchOneEvent, fetchJoinedEvents, fetchEvents, auth, selectEvent, updateUserLocation }, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.user.isLoggedIn,
    event: state.events.event,
    createdEvents: state.events.createdEvents,
    joinedEvents: state.events.joinedEvents,
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
