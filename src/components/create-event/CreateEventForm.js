/**
 *    Form  that goes inside of Create Event Page (index.js)
 *
 */

import React, { Component, PropTypes } from 'react';
import { createEvent, setEventDate } from '../../actions/';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UploadFile from './UploadFile';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import injectTapEventPlugin from 'react-tap-event-plugin';


class CreateEventForm extends React.Component {

  componentWillMount() {
    // Need to call injectTapEventPlugin for datepicker to appear
    injectTapEventPlugin();

    this.props.initializeForm({
      eventName: '',
      description: '',
      totalPeople: null,
      pricePerPerson: null
    });
  }

  onDateChange(nothing, date) {
    this.props.setEventDate(date);
  }

  render() {

    const {fields: {
        eventName,
        description,
        totalPeople,
        pricePerPerson
      }, handleSubmit} = this.props;

    return (

      <div row='row'>

      <div className='col s6'>

        <form onSubmit={handleSubmit}>

            <div>
              <label>Event Name</label>
              <input type="text" placeholder="Event name - choose something catchy!" {...eventName}/>
            </div>

            <div>
              <label>Description</label>
              <input type="text" placeholder="Describe your super fun event" {...description}/>
            </div>

            <div>
              <label>Total Number of People Needed</label>
              <input type="text" placeholder="Minimum number of people needed to kickstart this event" {...totalPeople}/>
            </div>

            <div>
              <label>Price Per Person</label>
              <input type="text" placeholder="Price per person for minimum number of people" {...pricePerPerson}/>
            </div>

            <div>
              <label>Date</label>
              <DatePicker
                hintText="Click to pick date"
                container="inline"
                onChange={this.onDateChange.bind(this)} />
            </div>

          <div>
            <label>Price Per Person</label>
            <input type="text" placeholder="Price per person" {...pricePerPerson}/>
          </div>

          <button type="submit" className='btn waves-effect waves-light'>Submit</button>

        </form>

        </div>
      </div>

    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setEventDate}, dispatch);
}

CreateEventForm = reduxForm({
  form: 'createEvent',
  fields: ['eventName', 'description', 'totalPeople', 'pricePerPerson']
})(CreateEventForm);

export default connect(null, mapDispatchToProps)(CreateEventForm);
