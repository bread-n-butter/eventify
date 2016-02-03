/**
 *    Joined Events Component
 *
 */

import React, { Component, PropTypes } from 'react';

//Components
import SmallEventCards from './SmallEventCards';

export default class JoinedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClick(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  render() {
    return (
      <ul className='collection'>

        {
          this.props.data.map((event, index) => {
            return <SmallEventCards key={index} event={event} onClick={this.handleClick.bind(this, event)}/>;
          })
        }

      </ul>
    );
  }

}

