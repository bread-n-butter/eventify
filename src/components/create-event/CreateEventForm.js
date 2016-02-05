/**
 *    Form  that goes inside of Create Event Page (index.js)
 *
 */

import React, { Component, PropTypes } from 'react';
import { createEvent, setEventDate } from '../../actions/';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import UploadFile from './UploadFile';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

const validate = values => {
  const errors = {};
  
  if (!values.eventName) {
    errors.eventName = 'Required';
  } 
  
  if (!values.description) {
    errors.description = 'Required';
  } 
  
  if (!values.totalPeople) {
    errors.totalPeople = 'Required';
  } else if (isNaN(Number(values.totalPeople))) {
    errors.totalPeople = 'Must be a number';
  } else if (Number(values.totalPeople) < 0) {
    errors.totalPeople = 'Cannot be a negative number';
  }
  
  if (!values.pricePerPerson) {
    errors.pricePerPerson = 'Required';
  } else if (isNaN(Number(values.pricePerPerson))) {
    errors.pricePerPerson = 'Must be a number';
  } else if (Number(values.pricePerPerson) < 0) {
    errors.pricePerPerson = 'Time machine error';
  }
  
  return errors;
};


class CreateEventForm extends Component {

  componentWillMount() {
    // Need to call injectTapEventPlugin for datepicker to appear

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

  updateLocation(suggest) {
    this.props.updateEventLocation({
      lat: suggest.location.lat,
      long: suggest.location.lng,
      address: suggest.label
    });
  }
  
  validationStyles(isValid) {
    if(isValid) {
      return {
        'border-bottom': '1px solid #42a5f5',
        'box-shadow': '0 1px 0 0 #42a5f5'
      };
    } else {
      return {
        'border-bottom': '1px solid red',
        'box-shadow': '0 1px 0 0 red',
        'margin-bottom': '0px'
      };
    }
  }
  
  redFontStyles() {
    return {
      'color' : 'red'
    };
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
              <label>Image</label>
              <UploadFile />
            </div>
            
            <br/>

            <div>
              <label>Event Name</label>
              <input style={this.validationStyles(!(eventName.touched && eventName.error))} type="text" placeholder="Event name - choose something catchy!" {...eventName}/>
              {eventName.touched && eventName.error && <div styles={this.redFontStyles()}>{eventName.error}</div>}
            </div>
            
            <br/>

            <div>
              <label>Description</label>
              <input style={this.validationStyles(!(description.touched && description.error))} type="text" placeholder="Describe your super fun event" {...description}/>
              {description.touched && description.error && <div styles={this.redFontStyles()}>{description.error}</div>}
            </div>
            
            <br/>
            
            <div>
              <label>Total Number of People Needed</label>
              <input style={this.validationStyles(!(totalPeople.touched && totalPeople.error))} type="text" placeholder="Minimum number of people needed to kickstart this event" {...totalPeople}/>
              {totalPeople.touched && totalPeople.error && <div styles={this.redFontStyles()}>{totalPeople.error}</div>}
            </div>
            
            <br/>

            <div>
              <label>Price Per Person</label>
              <input style={this.validationStyles(!(totalPeople.touched && eventName.error))} type="text" placeholder="Price per person for minimum number of people" {...pricePerPerson}/>
              {pricePerPerson.touched && pricePerPerson.error && <div styles={this.redFontStyles()}>{pricePerPerson.error}</div>}
            </div>
            
            <br/>

            <div>
              <label>Date</label>
              <DatePicker
                hintText="Click to pick date"
                container="inline"
                onChange={this.onDateChange.bind(this)} 
                autoOk={true}
              />
            </div>
            
            <br/>
            
            <div>
              <label>Address</label>
              <GoogleMapsSearchBar updateLocation={(s) => this.updateLocation(s)} />
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

CreateEventForm = reduxForm({
  form: 'createEvent',
  fields: ['eventName', 'description', 'totalPeople', 'pricePerPerson'],
  validate
})(CreateEventForm);

export default connect(null, mapDispatchToProps)(CreateEventForm);
