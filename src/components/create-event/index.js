/**
 *    
 *    Main Page for Create Event
 *    
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';

import CreateEventForm from './CreateEventForm';

class CreateEventPage extends Component {
  
  handleSubmit(data) {
    console.log('Submission Received!', data);
    this.props.dispatch(initialize('createEvent', {}));
  }
  
  render() {
    return (
      <div>
        <h1> Create Event </h1>
        <CreateEventForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect()(CreateEventPage); //adds dispatch prop
