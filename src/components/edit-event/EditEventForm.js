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

import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

//Material UI components
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';

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


class EditEventForm extends Component {

  onDateChange(nothing, date) {
    this.props.setEventDate(date);
  }
  
  validationStyles(isValid) {
    if(isValid) {
      return {
        'borderBottom': '1px solid #42a5f5',
        'boxShadow': '0 1px 0 0 #42a5f5'
      };
    } else {
      return {
        'borderBottom': '1px solid red',
        'boxShadow': '0 1px 0 0 red',
        'marginBottom': '0px'
      };
    }
  }
  
  redFontStyles() {
    return {
      'color' : 'red'
    };
  }
  
  /**
   *    
   *    Handles Date & Time submission. 
   *    
   *    Handles 2 cases where user picks Date first and Time second, and vice versa. 
   *    
   *    @param  {Object} date  Date Object from Redux - State. Contains methods and props.
   *    @param  {?} err  when the component errors
   *    @param  {Date} event comes from Material-UI Component when finished selecting from picker.
   *    
   */
  handleDateSubmit(date, event, dateOrTime) {
    
    console.log('date is ', date);
    
    //initializing value
    if (date.value === '' || date.value === undefined) {
      date.onChange(event);
      
    //control for different cases 
    } else {
      
      switch(dateOrTime) {
        
      case 'date': 
      
        let year = event.getUTCDay();
        let month = event.getMonth();
        let day = event.getUTCDate();
        
        date.value.setFullYear(year);
        date.value.setMonth(month);
        date.value.setDate(day);
        
        date.onChange(date.value);
        break;
        
      case 'time':   
        
        let hour = event.getHours();
        let minutes = event.getMinutes();
        
        date.value.setHours(hour);
        date.value.setMinutes(minutes);
        
        date.onChange(date.value);
        break;
        
      }
      
    }
  }

  render() {

    const {fields: {
        eventName,
        description,
        totalPeople,
        pricePerPerson,
        date,
        lat,
        long,
        addressLabel
      }, handleSubmit, handleLocationSubmit} = this.props;

    return (

      <div className="row">

        <div className="col s6" style={{float: 'none', margin: '20px auto'}}>

          <form onSubmit={handleSubmit}>
          
            <EditImage imageUrl={this.props.imageUrl} />

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
              <input style={this.validationStyles(!(pricePerPerson.touched && pricePerPerson.error))} type="text" placeholder="Price per person for minimum number of people" {...pricePerPerson}/>
              {pricePerPerson.touched && pricePerPerson.error && <div styles={this.redFontStyles()}>{pricePerPerson.error}</div>}
            </div>
            
            <div>
              <label>Date</label>
              <DatePicker
                defaultDate={new Date(this.props.eventDate)}
                hintText="Click to pick date"
                autoOk={true}  
                onChange={(err, event) => this.handleDateSubmit(date, event, 'date')}
              />
            </div>
            
            <div>
              <label>Time</label>
              <TimePicker 
                defaultTime={new Date(this.props.eventDate)}
                hintText='Select a Time'
                autoOk={true}
                onChange={(err, event) => this.handleDateSubmit(date, event, 'time')}
              />
            </div>
            
            <GoogleMapsSearchBar initialValue={this.props.placeholderSearchBar} updateLocation={(e) =>handleLocationSubmit(e)}/>
            

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
  fields: ['eventName', 'description', 'totalPeople', 'pricePerPerson', 'date', 'lat', 'long', 'address'],
  validate
})(EditEventForm);

export default connect(null, mapDispatchToProps)(EditEventForm);
