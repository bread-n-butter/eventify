/**
 *    Form  that goes inside of Edit Event Page (index.js)
 *
 */

import React, { Component, PropTypes } from 'react';
import { editEvent, setEventDate } from '../../actions/';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import EditImage from './EditImage';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

class EditEventForm extends Component {

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
            <EditImage imageUrl={this.props.imageUrl} />

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
              <label>Price Per Person in $</label>
              <input type="text" placeholder="Price per person for minimum number of people" {...pricePerPerson}/>
            </div>

            <div>
              <label>Date</label>
              <DatePicker
                defaultDate={new Date(this.props.eventDate)}
                hintText="Click to pick date"
                container="inline"
                onChange={this.onDateChange.bind(this)} />
            </div>

            <button
              type="submit"
              className='btn waves-effect waves-light'
              style={{marginRight: '10px'}}>
                Submit
            </button>
            <Link to="/dashboard">Cancel</Link>

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
