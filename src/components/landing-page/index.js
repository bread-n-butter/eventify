/**
 *
 *    LANDING PAGE
 *
 *    Contains Navigation Bar, Banner, Search Box, and Featured Events
 *
 */
import React from 'react';

//Import Components
import Banner from './Banner';
import EventList from './FeatEvents';

//Redux Connectors
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserLocation, fetchCreatedEvents, fetchJoinedEvents, fetchEvents, auth, selectEvent, fetchOneEvent } from '../../actions/';


//Helpers for HTTP requests
import Helpers from '../../helpers/helpers';

class Landing extends React.Component {

  //Set initial State for this Component
  constructor(props) {
    super(props);
    this.state = {
      //filteredEvents is used for Search box filtering
      filteredEvents: [],
      //when user is logged in
      isLoggedIn: false
    };
  }

  /**
   *
   *    When all the Components mount
   *
   *    1) Check to see if user is Authorized, if so set State to true
   *    2) Call init()
   *
   */
  componentDidMount() {
    this.init();
  }

  /**
   *    Get data from backend about events
   */
  init() {
    const that = this;
    Helpers.getEvents()
      .then( (data) => {
        that.setState({
          events: data.data,
          filteredEvents: data.data
        });
      });
  }

  /**
   *
   *    Sets the 'filteredEvents' state of this Component,
   *    based on search box input and then re-renders the this page.
   *
   *    Currently only searches the title only. Can be easily updated though.
   *
   */
  filterList(e) {
    let updatedList = this.state.events;
    updatedList = updatedList.filter(function(event){
      return event.event_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredEvents: updatedList});
    this.render();
  }

  /**
   *    Renders this Component with children of this Component
   *
   */
  render() {
    return (
      <div>
        <div className="row">
          <Banner filterList={(e) => this.filterList(e)} />
        </div>
          {this.props.children}
        <div className="container" style={{marginTop: '7%'}}>
          <EventList events={this.state.filteredEvents} />
        </div>
        <div className="center-align">
          <p>HOW IT WORKS</p>
          <p>Post an event for others to join, setting a per-person price.</p>
        </div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCreatedEvents, fetchJoinedEvents, fetchEvents, auth, selectEvent, fetchOneEvent, updateUserLocation }, dispatch);
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
