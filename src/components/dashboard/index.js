/**
 *    
 *    Top - Level Component for Dashboard
 *    
 */
import React, { Component, PropTypes } from 'react';

//Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserLocation, fetchCreatedEvents, fetchJoinedEvents, fetchEvents, fetchOneEvent, auth, selectEvent, updateRadius } from '../../redux/actions/';

//Lo-dash
import { take } from 'lodash';

//Components
import Spinner from '../../helpers/spinner.js';
import FeaturedEventsList from './FeaturedEventsList';
import JoinedEventsList from './JoinedEventsList';
import CreatedEventsList from './CreatedEventsList';
import GoogleAPISearchBar from '../searchbar/GoogleMapsSearchBar';
import GoogleMaps from './GoogleMapsWithSearchBox';

//Helper functions
import getUserLocation from '../../helpers/get-current-location';

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Check for authorization & grab events
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
    // getUserLocation(this.props.updateUserLocation);
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
          <GoogleAPISearchBar
            updateLocation={(d) => this.handleLocationSubmit(d)} initialValue={'Please Enter a Location'} />
        </div>
        
        <div className="row">
        
          <div className="col s8">
            <h3 style={{fontWeight: 600, paddingLeft: '0.60rem'}}>Featured events</h3>
            <FeaturedEventsList select={this.props.fetchOneEvent} radius={10000} data={events} user={this.props.user} updateRadius={this.props.updateRadius} />
          </div>
          
          <div className="col s4">
          
            <div className='row' style={{height: '400px'}}>
              <GoogleMaps select={this.props.fetchOneEvent} events={events} loc={this.props.user.loc} radius={this.props.user.radius}/>
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
