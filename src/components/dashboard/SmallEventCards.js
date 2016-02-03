/**
 *    Small Event Cards for the Dashboard
 *
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchOneEvent } from '../../actions';

class SmallEventCards extends Component {

  handleEdit(event) {
    this.props.fetchOneEvent(event.id);
  }

  render() {
    const event = this.props.event;
    return (
        <li className="collection-item avatar" onClick={(e) => { e.preventDefault(); this.props.onClick(); }}>
          <img src={event.image_url} alt="" className="circle" />
          <span className="title"><b>{event.eventName}</b></span>
          <p>{event.description}<br/>
          </p>
          <Link onClick={(e) => {e.preventDefault(); this.handleEdit(event).bind(this);}} to='/edit' className="secondary-content"><i className='material-icons'>settings</i></Link>
        </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchOneEvent}, dispatch);
}

export default connect(null, mapDispatchToProps)(SmallEventCards);
