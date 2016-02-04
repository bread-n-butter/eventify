/**
 *    Joined Events Component
 *
 */

import React, { Component, PropTypes } from 'react';

//Components
import LargeEventCards from './LargeEventCards';

export default class FeaturedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClick(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  render() {
    return (
      <div>

        {
          this.props.data.map((event, index) => {
            return <LargeEventCards key={index} event={event} onClick={this.handleClick.bind(this, event)}/>;
          })
        }

      </div>
    );
  }

}
