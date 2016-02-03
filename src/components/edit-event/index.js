import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { auth, editEvent } from '../../actions/';
import { bindActionCreators } from 'redux';
import Moment from 'moment';
import EditEventForm from './EditEventForm';



class EditEventPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log(this.props);
  }



  /*componentWillMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
    });
  }*/

  handleSubmit(data) {
    data.image_url = this.props.imageUrl;
    const formattedDate = Moment(this.props.eventDate).format('YYYY-MM-DD HH:mm:ss');
    data.date = formattedDate;
    this.props.editEvent(data)
      .then(() => { this.context.router.push('/dashboard'); });

  }

  render() {
    const myInitialValues = {
      initialValues: {
        eventName: 'Fun Event',
        description: 'Going to have fun, dammit!',
        totalPeople: 10,
        pricePerPerson: 10
      }
    };

    return (
      <div>
        <h1 className="center-align">Edit Your Event</h1>
        <EditEventForm {...myInitialValues} onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

//Create a dispatcher out of 'createEvent' action item and then save it to this.props.createEvent
function mapDispatchToProps(dispatch) {
  return bindActionCreators({editEvent}, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.events.isLoggedIn,
    imageUrl: state.events.imageUrl,
    eventDate: state.events.eventDate,
    selectedEvent: state.events.selectedEvent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);
