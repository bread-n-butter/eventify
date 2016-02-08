import React, {Component} from 'react';
import  {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default class Map extends Component {

  render() {
    return (
      <GoogleMapLoader
        containerElement={ <div style={{height: '100%'}} /> }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: this.props.lat, lng: this.props.long}} >
            <Marker position={{lat: this.props.lat, lng: this.props.long}} />
          </GoogleMap>
        }
      />
    );
  }
}

