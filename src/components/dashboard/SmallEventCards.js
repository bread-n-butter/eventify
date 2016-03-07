/**
 *    Small Event Cards for the Dashboard
 *
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOneEvent } from '../../actions';
import Moment from 'moment';

class SmallEventCards extends Component {

  static contextTypes = {
    router: PropTypes.object
  };


  handleEdit(event) {
    this.context.router.push('/edit/' + event.id);
  }

  render() {
    
    const event = this.props.event;
    
    return (
      
      <li className="collection-item avatar valign-wrapper">
      
        <img
          src={event.image_url || 'https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg'}
          alt={'thumbnail for ' + event.event_name}
          className="circle"
          onClick={(e) => { e.preventDefault(); this.props.onClick(); }} />
          
        <ul>
          <li
            className="title"
            onClick={(e) => { e.preventDefault(); this.props.onClick(); }}
            style={{cursor: 'pointer', display: 'block'}}>
            <b>{event.event_name}</b>
          </li>
          <li>{ Moment(event.event_date).format('MMMM Do YYYY') }</li>
        </ul>
        
        { this.props.createdList ?
          <a
            style={{cursor: 'pointer'}}
            onClick={(e) => {e.preventDefault(); this.handleEdit(event);}}
            className="secondary-content">
              <i className='material-icons'>settings</i>
          </a>
        : null }
        
      </li>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchOneEvent}, dispatch);
}

export default connect(null, mapDispatchToProps)(SmallEventCards);
