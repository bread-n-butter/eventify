import React, { Component } from 'react';
import Divider from 'material-ui/lib/divider';
import ProgressBar from '../../helpers/progressBar';
import Map from '../../helpers/eventMap';
import Stripe from './payment';

const styles = {
  general: {
    'fontFamily': 'GillSans, Calibri, Trebuchet, sans-serif'
  },
  p: {
    marginTop: 0
  },
  map: {
    height: 280,
    width: 530
  },
  bar: {
    marginTop: 10
  },
  progress: {
    marginBottom: 20
  },
  price: {
    marginTop: 10,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold'
  }

};
const marks = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: "Taiwan",
      defaultAnimation: 2,
    }],
  };

export default class Details extends Component {
  render() {
    return (
      <div className="flow-text" style={styles.general}>
        <div>
          <p style={ styles.p }>{ this.props.data.description } </p>
        </div>
        <div className="" style={ styles.map }>
          <Map lat={this.props.data.event_lat} long={this.props.data.event_long}/>
        </div>
        <div style={ styles.bar } className="center-align">
          { this.props.data.num_of_people_joined || 0 } Attendees / { this.props.data.total_number_of_people_req } Needed
        </div>
        <div style={ styles.progress }>
          <ProgressBar data={ this.props.data } />
        </div>
        <Divider inset={ true } />
        <div style={ styles.price } className="right-align">
          Price ${ this.props.data.price_per_person }
        </div>
      </div>
    );
  }
}
