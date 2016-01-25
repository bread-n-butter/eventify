/**
 *    Modal for creating events
 *    
 */

import React from 'react';

//Material Elements
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

//Import other Customized Material UI Components 
import TextField from 'material-ui/lib/text-field';

//Import Helper
import helper from '../../helpers/helpers'

const customContentStyle = {
  width: '50%',
  maxWidth: '450px',
  textAlign: 'center'

};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  color: '#db436c'
};

class CreateEventModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {eventName: null}
    };
  }
    
  //TODO: Add DATE To database
  //TODO: Add Date Handler here
  
  handleNameChange(e) {
    var newData = this.state.data;
    newData.eventName = e.target.value;
    this.setState({data: newData});
  }
  
  handleDescrChange(e) {
    var newData = this.state.data;
    newData.description = e.target.value;
    this.setState({data: newData});
  }
  
  handleNumPplChange(e) {
    var newData = this.state.data;
    newData.numOfPeopleJoined = e.target.value;
    this.setState({data: newData});
  }
  
  handleTotalPplChange(e) {
    var newData = this.state.data;
    newData.totalPeople = e.target.value;
    this.setState({data: newData});
  }
  
  handlePriceChange(e) {
    var newData = this.state.data;
    newData.pricePerPerson = e.target.value;
    this.setState({data: newData});
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }
  
  //Sends form data to the backend. Data should be an object that contains all the information
  sendHttpReq() {
    //make http request to server with data. 
    //then if successful, give a message. 
    //if not, Error out and do something
    helper.postEvent(this.state.data);
  }

  render() {
    const actions = [
      <FlatButton
        label="Create"
        primary={true}
        onClick={() => this.sendHttpReq()} />,
      <FlatButton
        label="Exit"
        secondary={true}
        onClick={() => this.handleClose()} />
    ];

    return (
      <div>
        <FlatButton
          label = "Create Event"
          onClick = {() => this.handleOpen()}
          style = {{color: '#53b3cb'}} />
        <Dialog
          title = "Eventify"
          actions = {actions}
          modal = {false}
          open = {this.state.open}
          contentStyle = {customContentStyle}
          titleStyle = {titleStyle}
          onRequestClose={this.handleClose}>
          <TextField
            hintText="Name of Event"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} 
            onChange={(e) => this.handleNameChange(e)} />
          <TextField
            hintText="Description"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} 
            onChange={(e) => this.handleDescrChange(e)} />
          <TextField
            hintText="Date"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} />
          <TextField
            hintText="# of People"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} 
            onChange={(e) => this.handleNumPplChange(e)} />
          <TextField
            hintText="Cost"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} 
            onChange={(e) => this.handlePriceChange(e)} />
        </Dialog>
      </div>
    );
  }
}

export default CreateEventModal;