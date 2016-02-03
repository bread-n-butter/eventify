/**
 *    Small Event Cards for the Dashboard
 *
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { fetchOneEvent } from '../../actions';

class SmallEventCards extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleEdit(event) {
    this.props.editEvent(event);
    // this.props.fetchOneEvent(event.id)
    //   .then(() => {});
    this.context.router.push('/edit');
  }

  render() {
    const event = this.props.event;
    return (
      <li className="collection-item avatar">
        <img src={event.image_url || 'https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg'} alt="" className="circle" onClick={(e) => { e.preventDefault(); this.props.onClick(); }}/>
        <span
          className="title"
          onClick={(e) => { e.preventDefault(); this.props.onClick(); }}>
          <b>{event.eventName}</b>
        </span>
        <p onClick={(e) => { e.preventDefault(); this.props.onClick(); }}>{event.description}<br/>
        </p>
        <a
          onClick={(e) => {e.preventDefault(); this.handleEdit(event);}}
          className="secondary-content">
            <i className='material-icons'>settings</i>
        </a>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchOneEvent}, dispatch);
}

export default connect(null, mapDispatchToProps)(SmallEventCards);
