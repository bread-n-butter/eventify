/**
 *
 *    Top - Level for Landing Page
 *
 *    Contains Navigation Bar, Banner, Search Box, and Featured Events, About the Team page
 *
 */
import React from 'react';

//Import Components
import EventList from './FeatEvents';
import BannerImage from './BannerImage';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';
import AboutUs from '../about-us/AboutUs';

//Redux Connectors
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserLocation, fetchCreatedEvents, fetchJoinedEvents, fetchEvents, auth } from '../../actions/';


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
      isLoggedIn: false,
      location: {
        lat: 30,
        long: -90,
        address: 'New Orleans, LA'
      }
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

  handleLocationSubmit(suggest) {
    this.setState({ location: {
      lat: suggest.location.lat,
      long: suggest.location.lng,
      address: suggest.label
    }});
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

  containerStyle() {
    return {
      height : '600px',
      position: 'relative',
      boxSizing: 'border-box',
      fontSize: '14px',
      lineHeight: '1.43',
      'WebkitFontSmoothing': 'antialiased'
    };
  }

  videoContStyle() {
    return {
      bottom : '0',
      left: '0',
      overflow: 'hidden',
      position: 'absolute',
      right: '0',
      top: '0',
      boxSizing: 'border-box',
      display: 'block'
    };
  }

  contentContStyle() {
    return {
      height : '550px',
      paddingBottom : '104px',
      top: '50px',
      position: 'relative',
      zIndex: '2',
      width: 'auto',
      paddingLeft: '25px',
      paddingRight: '25px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      boxSizing: 'border-box',
      display: 'block'
    };
  }

  welcomeContStyle() {
    return {
      width : '100%',
      height: '100%',
      display: 'table',
      position: 'relative',
      textAlign: 'center'
    };
  }

  welcomeSignStyle() {
    return {
      verticalAlign : 'middle',
      display: 'table-cell'
    };
  }

  heroFooterStyle() {
    return {
      bottom: '0',
      left: '0',
      paddingBottom: '30px',
      paddingTop: '30px',
      position: 'absolute',
      right : '0',
      textAlign: 'center'
    };
  }

  arrowStyle() {
    return {
      strokeWidth : '3'
    };
  }

  /**
   *    Renders this Component with children of this Component
   *
   */
  render() {

    return (
      <div>

        <div className="row">

          <div style={this.containerStyle()} className='hero' >


            <div className='hero__background' style={this.videoContStyle()}>

              <BannerImage />

            </div>


            <div style={this.contentContStyle()} className='hero__content page-container-full'>

              <div style={this.welcomeContStyle()} className='va-container' >

                <div style={this.welcomeSignStyle()} className='va-middle' >

                  <h1 className="hero-header" >YOUR EVENTS, CROWDFUNDED</h1>
                  <h4 className="hero-header-sub" >Browse upcoming events near you</h4>

                </div>

              </div>

              <div style={this.heroFooterStyle()} className='hero__content-footer' >

                <svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                  <path style={this.arrowStyle()} strokeWidth='6' d="M0,0 l35,50 l35,-50" fill="none" stroke="white" strokeLinecap="round" />
                </svg>

              </div>

            </div>

          </div>

        </div>

        <GoogleMapsSearchBar updateLocation={(d) => this.handleLocationSubmit(d)}/>
        <div className="container" style={{marginTop: '7%'}}>
          <EventList events={this.state.filteredEvents} user={this.props.user}  location={this.state.location}/>
        </div>

        <AboutUs />

      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCreatedEvents, fetchJoinedEvents, fetchEvents, auth, updateUserLocation }, dispatch);
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
