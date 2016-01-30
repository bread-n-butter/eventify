/**
 *    Modal for creating events
 *
 */

import React from 'react';

//Import Redux-form Node Module
import {reduxForm} from 'redux-form';

class CreateEventModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fields: {
        eventName: null, 
        description: null, 
        numOfPeopleJoined: null, 
        totalPeople: null, 
        pricePerPerson: null
      },
      data: {eventName: null}
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }
  
  render() {
    
    const {fields: {
        eventName,
        description, 
        numOfPeopleJoined, 
        totalPeople, 
        pricePerPerson
      }, handleSubmit} = this.props;
      
    return (
      <form onSubmit={handleSubmit}>
      
        <div>
          <label>Event Name</label>
          <input type="text" placeholder="Event Name" {...eventName}/>
        </div>
        
        <div>
          <label>Description</label>
          <input type="text" placeholder="Last Name" {...description}/>
        </div>
        
        <div>
          <label>Number of People Joined So Far</label>
          <input type="email" placeholder="Email" {...numOfPeopleJoined}/>
        </div>
        
        <div>
          <label>Total Number of People Needed</label>
          <input type="email" placeholder="Email" {...totalPeople}/>
        </div>
        
        <div>
          <label>Price Per Person</label>
          <input type="email" placeholder="Email" {...pricePerPerson}/>
        </div>
        
        <button type="submit">Submit</button>
        
      </form>
    );
  }
  
}

CreateEventModal = reduxForm({
  form: 'createEvent',
  fields: ['eventName', 'description', 'numOfPeopleJoined', 'totalPeople', 'pricePerPerson']
})(CreateEventModal);

export default CreateEventModal;