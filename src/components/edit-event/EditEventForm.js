/**
 *    Form  that goes inside of Edit Event Page (index.js)
 *
 */

import React, { Component, PropTypes } from 'react';
import { editEvent, setEventDate } from '../../actions/';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UploadFile from '../create-event/UploadFile';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import injectTapEventPlugin from 'react-tap-event-plugin';

class EditEventForm extends Component {

  componentWillMount() {
    // Need to call injectTapEventPlugin for datepicker to appear
    injectTapEventPlugin();

    /*this.props.initializeForm({
      eventName: '',
      description: '',
      totalPeople: null,
      pricePerPerson: null
    });*/
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

      <div className="row">

        <div className="col s6" style={{float: 'none', margin: '20px auto'}}>

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
                defaultDate={new Date()}
                hintText="Click to pick date"
                container="inline"
                onChange={this.onDateChange.bind(this)} />
            </div>

            <UploadFile />

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

EditEventForm = reduxForm({
  form: 'editEvent',
  fields: ['eventName', 'description', 'totalPeople', 'pricePerPerson']
})(EditEventForm);

export default connect(null, mapDispatchToProps)(EditEventForm);