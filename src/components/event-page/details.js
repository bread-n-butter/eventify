import React, { Component } from 'react';
import Divider from 'material-ui/lib/divider';
import ProgressBar from '../../helpers/progressBar';
import Map from '../../helpers/eventMap';

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
    style: 'bold'
  }

};

export default class Details extends Component {
  render() {
    console.log(this);
    return (
     <div className="flow-text" style={styles.general}>
     <div>
       <p style={styles.p}>{ this.props.data.description } </p>
     </div>
     <div className="" style={styles.map}>
       <Map />
     </div>
     <div style={styles.bar} className="center-align">
       { this.props.data.num_of_people_joined } Joined /{this.props.data.total_number_of_people_req } people needed
     </div>
     <div style={styles.progress}>
       <ProgressBar data={this.props.data} />
     </div>
    <Divider inset={ true } />
     <div style={styles.price} className="right-align">
       Price ${ this.props.data.price_per_person }
     </div>
     </div>
    );
  }
}
