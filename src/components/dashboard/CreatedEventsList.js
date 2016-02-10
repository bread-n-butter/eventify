/**
 *    Created Events by User Component
 *
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEvent } from '../../actions/';
import SmallEventCards from './SmallEventCards';

class CreatedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClick(event) {
    this.props.select(event.id);
    this.context.router.push('/event/' + event.id);
  }

  render() {
    return (
      <ul className='collection'>
        {
          this.props.data.map((event, index) => {
            return <SmallEventCards
                      key={index}
                      event={event}
                      onClick={this.handleClick.bind(this, event)}
                      editEvent={this.props.selectEvent.bind(this, event)}
                      createdList={true}/>;
          })
        }
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectEvent}, dispatch);
}

export default connect(null, mapDispatchToProps)(CreatedEventsList);
