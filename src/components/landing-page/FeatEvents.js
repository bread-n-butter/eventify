/**
 *    Component for featured events in the landing page
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOneEvent } from '../../actions/';

import Card from './EventCard';

import Helpers from '../../helpers/helpers';

class FeatEvents extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClkMoreInfo(event) {
    this.props.fetchOneEvent(event.id)
      .then(() => { this.context.router.push('/event/' + event.id); });
  }

  render() {
    return (
      <div className="row">
        {this.props.events.sort((a, b) => (
          (b.num_of_people_joined - a.num_of_people_joined)))
          .sort((a, b) => {
            const bdist = Helpers.distance(b.event_lat, b.event_long, this.props.location.lat, this.props.location.long);
            const adist =  Helpers.distance(a.event_lat, a.event_long, this.props.location.lat, this.props.location.long);
            if (adist > bdist) {
              return 1;
            }
            if (adist < bdist) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
          .map( (event, index) => (
            <Card key={index} event={event} onClick={this.handleClkMoreInfo.bind(this, event)}/>
        ))}
      </div>
    );
  }
}


//make sure this.props.events is an array
// FeatEvents.propTypes = {
//   events : React.PropTypes.array.isRequired
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOneEvent }, dispatch);
}

export default connect(null, mapDispatchToProps)(FeatEvents);
