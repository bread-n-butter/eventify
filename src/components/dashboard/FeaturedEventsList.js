/**
 *    Joined Events Component
 *
 */

import React, { Component, PropTypes } from 'react';

//Components
import LargeEventCards from './LargeEventCards';

import Helpers from '../../helpers/helpers';

export default class FeaturedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClick(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  render() {
    console.log(this.props.user);
    console.log(event);
    return (
      <div>

        {this.props.data.sort((a, b) => {
          const bdist = Helpers.distance(b.event_lat, b.event_long, this.props.user.loc.lat, this.props.user.loc.long);
          const adist =  Helpers.distance(a.event_lat, a.event_long, this.props.user.loc.lat, this.props.user.loc.long);
          if (adist > bdist) {
            return 1;
          }
          if (adist < bdist) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
          .map((event, index) => (
            <LargeEventCards key={index} event={event} onClick={this.handleClick.bind(this, event)}/>
          ))}

      </div>
    );
  }

}
