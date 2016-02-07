/**
 *    Joined Events Component
 *
 */

import React, { Component, PropTypes } from 'react';

//Components
import LargeEventCards from './LargeEventCards';
import Slider from 'material-ui/lib/slider';
import Helpers from '../../helpers/helpers';

export default class FeaturedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { radius: 100 };
  }

  handleClick(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  updateRadius(value) {
    this.setState({radius: value});
  }

  render() {
    return (
      <div>
        <div>
          <Slider
            description="Filter events by distance"
            defaultValue={100}
            step={5}
            min={5}
            max={500}
            onChange={(e, value) => { this.updateRadius(value); }}
            style={{width: '75%', padding: '0 0.75rem'}} />
          <p>{this.state.radius} miles away</p>
        </div>
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
          //calculate distance of each event
          .filter((event) => {
            let dist = Helpers.distance(event.event_lat, event.event_long, this.props.user.loc.lat, this.props.user.loc.long);
            return dist < this.state.radius;
          })
          .map((event, index) => (
            <LargeEventCards key={index} event={event} onClick={this.handleClick.bind(this, event)}/>
          ))}
      </div>
    );
  }

}
