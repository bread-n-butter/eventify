/**
 *    Modal for creating events
 *
 */

import React, {Component, PropTypes} from 'react';

import { createEvent } from '../../actions/';

//Import Redux-form Node Module
import {reduxForm} from 'redux-form';

console.log('hello');

class CreateEventForm extends React.Component {
  
  render() {
    
    const {fields: {
        eventName,
        description, 
        numOfPeopleJoined, 
        totalPeople, 
        pricePerPerson
      }, handleSubmit} = this.props;
      
    return (
      
      <div row='row' onSubmit={handleSubmit}>
      
        <form>
          
          <div>
            <label>Event Name</label>
            <input type="text" placeholder="Event Name" {...eventName}/>
          </div>
          
          <div>
            <label>Description</label>
            <input type="text" placeholder="Description" {...description}/>
          </div>
          
          <div>
            <label>Number of People Joined So Far</label>
            <input type="text" placeholder="# of ppl so far" {...numOfPeopleJoined}/>
          </div>
          
          <div>
            <label>Total Number of People Needed</label>
            <input type="text" placeholder="total needed" {...totalPeople}/>
          </div>
          
          <div>
            <label>Price Per Person</label>
            <input type="text" placeholder="Price per person" {...pricePerPerson}/>
          </div>
          
          <button type="submit" className='btn waves-effect waves-light'>Submit</button>
          
        </form>
      
      </div>
      
    );
  }
  
}

CreateEventForm = reduxForm({
  form: 'createEvent',
  fields: ['eventName', 'description', 'numOfPeopleJoined', 'totalPeople', 'pricePerPerson']
})(CreateEventForm);

export default CreateEventForm;