/**
 *    
 *    Top - Level Component for Dashboard
 *    
 */
import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserLocation, fetchCreatedEvents, fetchJoinedEvents, fetchEvents, fetchOneEvent, auth, selectEvent, updateRadius } from '../../actions/';

import { take } from 'lodash';

//Components
import Spinner from '../../helpers/spinner.js';

import FeaturedEventsList from './FeaturedEventsList';
import JoinedEventsList from './JoinedEventsList';
import CreatedEventsList from './CreatedEventsList';

import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';
import GoogleMapsWithSearchBox from './GoogleMapsWithSearchBox';

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Check for autorization when User visits the Dashboard
    //and Grabs all the events needed to populate Dashboard
    //redirect them to '/' when not authorized
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
      this.props.fetchEvents();
      this.props.fetchJoinedEvents(this.props.user.id);
      this.props.fetchCreatedEvents(this.props.user.id);
    });
  }
  
  componentDidMount() {
    //Get user's current location through Google Chrome's navigator API and update User's location
    //when the Component mounts
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
        
        <div className="row">
          <GoogleMapsSearchBar
            updateLocation={(d) => this.handleLocationSubmit(d)} />
        </div>
        
        <div className="row">
        
          <div className="col s8">
            <h3 style={{fontWeight: 600, paddingLeft: '0.60rem'}}>Featured events</h3>
            <FeaturedEventsList select={this.props.fetchOneEvent} radius={10000} data={events} user={this.props.user} updateRadius={this.props.updateRadius} />
          </div>
          
          <div className="col s4">
          
            <div className='row' style={{height: '400px'}}>
              <GoogleMapsWithSearchBox select={this.props.fetchOneEvent} events={events} loc={this.props.user.loc} radius={this.props.user.radius}/>
            </div>
            
            <div>
              <h5 style={{paddingTop: '1.2rem'}}>Events You've Joined</h5>
              <JoinedEventsList select={this.props.fetchOneEvent} data={ take(joinedEvents, 10) } />
            </div>
            
            <div>
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
  return bindActionCreators({ fetchCreatedEvents, fetchOneEvent, fetchJoinedEvents, fetchEvents, auth, selectEvent, updateUserLocation, updateRadius }, dispatch);
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
