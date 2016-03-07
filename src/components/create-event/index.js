/**
 *
 *    Main Page for Create Event
 *
 *    This is a Top-Level Element. It contains another component that has fields.
 *
 */

//React Component and PropTypes(for routing)
import React, {Component, PropTypes} from 'react';
import Moment from 'moment';

//Initializes state for the form that was populated and submitted
import { initialize } from 'redux-form';

//To bind this component to Redux's state
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Form that contains the actual fields
import CreateEventForm from './CreateEventForm';

//Get Action Factories to use in this Component to manipulate the Redux State
import { auth, createEvent, updateEventLocation } from '../../actions/';


class CreateEventPage extends Component {

  //For routing
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    //If user isn't logged in, reroute to landing
    this.props.auth()
      .then(()=> {
        if (!this.props.isLoggedIn) {
          this.context.router.push('/');
        }
      });
  }

  //Handles data that comes with form submission of 'CreateEventForm' Component below. Data is a Object with keys mapped to each input field.
  handleSubmit(data) {

    //Grab location info from Redux State
    data.lat = this.props.createEventLocation.lat;
    data.long = this.props.createEventLocation.long;
    data.addressLabel = this.props.createEventLocation.address;
    data.userId = this.props.userId;

    data.image_url = this.props.imageUrl === '' ? 'https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg' : this.props.imageUrl;

    const finalDate = Moment(data.date).format('YYYY-MM-DD HH:mm:ss');
    data.date = finalDate;

    this.props.createEvent(data)
      .then(() => { this.context.router.push('/dashboard'); });
  }

  render() {
    return (

      <div className="container center-div">

        <h1
          className="center-align"
          style={{paddingTop: '50px', marginTop: '0px'}}>
          Create An Event
        </h1>

        <CreateEventForm
          onSubmit={this.handleSubmit.bind(this)}
          updateEventLocation={this.props.updateEventLocation}/>

      </div>

    );
  }
}

//Create a dispatcher out of 'createEvent' action item and then save it to this.props.createEvent
function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateEventLocation, createEvent, auth}, dispatch);
}

function mapStateToProps(state) {
  return {
    createEventLocation: state.events.createEventLocation,
    imageUrl: state.events.imageUrl,
    eventDate: state.events.eventDate,
    userId: state.user.id,
    isLoggedIn: state.user.isLoggedIn
  };
}

//Export this Component with all the ties mentioned above.
export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);
