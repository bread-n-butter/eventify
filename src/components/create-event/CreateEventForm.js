/**
 *    Form  that goes inside of Create Event Page (index.js)
 *
 */

import React, { Component, PropTypes } from 'react';
import { createEvent } from '../../actions/';
import { reduxForm } from 'redux-form';
import UploadFile from './UploadFile';


class CreateEventForm extends React.Component {

  render() {

    const {fields: {
        eventName,
        description,
        totalPeople,
        pricePerPerson,
        imageUrl
      }, handleSubmit} = this.props;

    return (

      <div className="row">

        <div className="col s6" style={{float: 'none', margin: '20px auto'}}>

          <form onSubmit={handleSubmit}>

            <div>
              <label>Event Name</label>
              <input type="text" placeholder="Event Name" {...eventName}/>
            </div>

            <div>
              <label>Description</label>
              <input type="text" placeholder="Description" {...description}/>
            </div>

            <div>
              <label>Total Number of People Needed</label>
              <input type="text" placeholder="total needed" {...totalPeople}/>
            </div>

            <div>
              <label>Price Per Person</label>
              <input type="text" placeholder="Price per person" {...pricePerPerson}/>
            </div>

            <UploadFile />

            <button type="submit" className='btn waves-effect waves-light'>Submit</button>

          </form>

        </div>
      </div>

    );
  }

}

CreateEventForm = reduxForm({
  form: 'createEvent',
  fields: ['eventName', 'description', 'totalPeople', 'pricePerPerson', 'imageUrl']
})(CreateEventForm);

export default CreateEventForm;
