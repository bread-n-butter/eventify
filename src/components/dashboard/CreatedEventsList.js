/**
 *    
 *    Created Events List by User
 *    
 *    This component builds many separate 'SmallEventCards' components
 *
 */
import React, { Component, PropTypes } from 'react';
import SmallEventCards from './SmallEventCards';

export default class CreatedEventsList extends Component {

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
                      createdList={true}/>;
          })
        }
      </ul>
    );
  }
}

