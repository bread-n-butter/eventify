import React, { Component } from 'react';
import Divider from 'material-ui/lib/divider';
import ProgressBar from '../../helpers/progressBar';
import Map from '../../helpers/eventMap';
import Stripe from './payment';

const styles = {
  p: {
    marginTop: 0
  },
  map: {
    height: 280
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
      
        <div className="" style={ styles.map } className='center-align'>
          <Map lat={this.props.data.event_lat} long={this.props.data.event_long}/>
        </div>
      
        <div style={ styles.bar } className="center-align">
          { this.props.data.num_of_people_joined || 0 } Attendees / { this.props.data.total_number_of_people_req } Needed
        </div>
        
        
        <div className='row'>
          <div className='col s10 offset-s1'> 
            
            <div style={ styles.progress }>
              <ProgressBar data={ this.props.data } />
            </div>
          
            <div>
              <p style={ styles.p }>{ this.props.data.description } </p>
            </div>
            
            <div>
              Price: ${ this.props.data.price_per_person }
            </div>
          
          </div>
        </div>
        
      </div>
    );
  }
}
