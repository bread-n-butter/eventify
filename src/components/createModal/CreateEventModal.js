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
import helper from '../../helpers/helpers';

//Import Redux-form Node Module
import {reduxForm} from 'redux-form';

// const customContentStyle = {
//   width: '50%',
//   maxWidth: '450px',
//   textAlign: 'center'
// };

// const titleStyle = {
//   textAlign: 'center',
//   fontFamily: 'Open Sans',
//   fontWeight: 'bold',
//   color: '#db436c'
// };

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

  // //TODO: Add DATE To database
  // //TODO: Add Date Handler here

  // handleNameChange(e) {
  //   var newData = this.state.data;
  //   newData.eventName = e.target.value;
  //   this.setState({data: newData});
  // }

  // handleDescrChange(e) {
  //   var newData = this.state.data;
  //   newData.description = e.target.value;
  //   this.setState({data: newData});
  // }

  // handleNumPplChange(e) {
  //   var newData = this.state.data;
  //   newData.numOfPeopleJoined = e.target.value;
  //   this.setState({data: newData});
  // }

  // handleTotalPplChange(e) {
  //   var newData = this.state.data;
  //   newData.totalPeople = e.target.value;
  //   this.setState({data: newData});
  // }

  // handlePriceChange(e) {
  //   var newData = this.state.data;
  //   newData.pricePerPerson = e.target.value;
  //   this.setState({data: newData});
  // }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  // //Sends form data to the backend. Data should be an object that contains all the information
  // sendHttpReq() {
  //   //make http request to server with data.
  //   //then if successful, give a message.
  //   //if not, Error out and do something
  //   helper.postEvent(this.state.data)
  //   .then((response) => {
  //     //rerender the Main page
  //     this.props.renderMain();
  //     console.log("POSTed successfully!");
  //     this.handleClose();
  //   })
  //   .catch((response) => {
  //     console.log(response);
  //   });
  // }

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