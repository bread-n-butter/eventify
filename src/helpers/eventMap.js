import React, {Component} from 'react';
import  {InfoWindow, GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default class Map extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      infoWindowUp : false
    };
  }
  
  renderInfoWindow() {
    return (
      <InfoWindow
        onCloseclick={() => this.handleClose()}
      >
        
        <a target='_blank' href={`http://maps.google.com/maps?q=${this.props.lat},${this.props.long}`}> Direction on Google Maps </a>
        
      </InfoWindow>
    );
  }
  
  handleClose() {
    this.setState({
      infoWindowUp: false
    });
  }
  
  handleMkrClick() {
    this.setState({
      infoWindowUp: true
    });
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={ <div style={{height: '100%'}} /> }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: this.props.lat, lng: this.props.long}} >
            
            <Marker 
              position={{lat: this.props.lat, lng: this.props.long}}
              onClick={() => this.handleMkrClick()}
              >
              {this.state.infoWindowUp ? this.renderInfoWindow() : null}
            </Marker>
              
              
            
          </GoogleMap>
        }
      />
    );
  }
}

