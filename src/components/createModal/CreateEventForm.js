/**
 *    Form list that goes inside of Create Event Modal
 *    
 */

import React from 'react';

//Import Material-UI elements
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker'

class CreateEventForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      description: '',
      numOfPeopleJoined: '',
      totalPeople: '',
      pricePerPerson: ''
    };
  }
  
  //TODO: Add DATE To database
  //TODO: Add Date Handler here
  
  handleNameChange(e) {
    this.setState({eventName: e.target.value});
  }
  
  handleDescrChange(e) {
    this.setState({description: e.target.value});
  }
  
  handleNumPplChange(e) {
    this.setState({numOfPeopleJoined: e.target.value});
  }
  
  handleTotalPplChange(e) {
    this.setState({totalPeople: e.target.value});
  }
  
  handlePriceChange(e) {
    this.setState({pricePerPerson: e.target.value});
  }
  
  render() {
    return (
      <div>
        <TextField
          hintText="Name of Event"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} 
          onChange={this.handleNameChange} />
        <TextField
          hintText="Description"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} 
          onChange={this.handleDescrChange} />
        <TextField
          hintText="Date"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} />
        <TextField
          hintText="# of People"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} 
          onChange={this.handleNumPplChange} />
        <TextField
          hintText="Cost"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} 
          onChange={this.handlePriceChange} />
      </div>
    );
  }
}

export default CreateEventForm
