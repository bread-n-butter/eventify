/*
*  Top-level component for editing an event
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { auth, editEvent, updateEventLocation, fetchOneEvent } from '../../redux/actions/';
import { bindActionCreators } from 'redux';
import Moment from 'moment';
import EditEventForm from './EditEventForm';



class EditEventPage extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.props.auth()
      .then(()=> {
        if (!this.props.isLoggedIn) {
          this.context.router.push('/');
        }
      });
  }

  componentWillMount() {
    this.props.fetchOneEvent(this.props.params.id)
      .then(() => {
        this.props.updateEventLocation({
          lat: this.props.event.event_lat,
          long: this.props.event.event_long,
          addressLabel: this.props.event.event_address_label
        });});
  }

  handleSubmit(data) {
    // Submitting data not handled by redux-form
    data.lat = this.props.createEventLocation.lat;
    data.long = this.props.createEventLocation.long;
    data.addressLabel = this.props.createEventLocation.address;
    data.image_url = this.props.imageUrl;

    const formattedDate = Moment(data.date).format('YYYY-MM-DD HH:mm:ss');
    data.date = formattedDate;
    this.props.editEvent(this.props.event.id, data)
      .then(() => { this.context.router.push('/dashboard'); })
      .catch((err) => { console.log(err); });
  }

  handleLocationSubmit(suggest) {
    this.props.updateEventLocation({
      lat: suggest.location.lat,
      long: suggest.location.lng,
      address: suggest.label
    });
  }


  render() {
    const event = this.props.event;

    if (!event) {
      return <div>Loading...</div>;
    } else {
      let eventDetails = {
        initialValues: {
          eventName: event.event_name,
          description: event.description,
          totalPeople: event.total_number_of_people_req,
          pricePerPerson: event.price_per_person,
          lat: event.event_lat,
          long: event.event_long,
          addressLabel: event.event_address_label
        }
      };
      return (
        <div className="container center-div">
          <h1 className="center-align">Edit Your Event</h1>
          <EditEventForm
            eventDate={ event.event_date || new Date() } {...eventDetails}
            imageUrl={ event.image_url }
            onSubmit={this.handleSubmit.bind(this)}
            handleLocationSubmit={(s) => this.handleLocationSubmit(s)}
            placeholderSearchBar={event.event_address_label}
          />
        </div>
      );
    }


  }
}

//Create a dispatcher out of 'createEvent' action item and then save it to this.props.createEvent
function mapDispatchToProps(dispatch) {
  return bindActionCreators({editEvent, updateEventLocation, fetchOneEvent, auth}, dispatch);
}

function mapStateToProps(state) {
  return {
    event: state.events.event,
    isLoggedIn: state.user.isLoggedIn,
    imageUrl: state.events.imageUrl,
    eventDate: state.events.eventDate,
    createEventLocation: state.events.createEventLocation
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);
