import {default as React, Component, PropTypes} from 'react';

import {GoogleMapLoader, GoogleMap, Marker, SearchBox, InfoWindow} from 'react-google-maps';

import EventCard from '../landing-page/EventCard';

export default class GoogleMapsWithSearchBox extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };

  static inputStyle = {
    'border': '1px solid transparent',
    'borderRadius': '1px',
    'boxShadow': '0 2px 6px rgba(0, 0, 0, 0.3)',
    'boxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'fontSize': '14px',
    'height': '32px',
    'marginTop': '27px',
    'outline': 'none',
    'padding': '0 12px',
    'textOverflow': 'ellipses',
    'width': '400px'
  };

  static mapCenter = {
    lat: 47.6205588,
    lng: -122.3212725
  };

  state = {
    bounds: null,
    center: GoogleMapsWithSearchBox.mapCenter,
    
    events: this.props.events.map((event) => {
      if (event.event_lat === null || event.event_long === null) {
        return null;
      }
      return {  
        ...event, 
        marker: {
          position: { 
            lat: event.event_lat, 
            lng: event.event_long 
          },
          showInfo: false 
        }
      }; 
    }).filter((event) => {return event !== null;})
  };

  handleBoundsChanged () {
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter()
    });
  }

  handlePlacesChanged () {
    const places = this.refs.searchBox.getPlaces();
    // console.log('places is equal to ', places);
    
    //get lat / long information from events and save in an array
    // const markers = this.props.events.map((event) => {
    //   if (event.event_lat === null || event.event_long === null) {
    //     return null;
    //   }
    //   return {  
    //     position: { 
    //       lat: event.event_lat, 
    //       lng: event.event_long 
    //     } 
    //   }; 
    // }).filter((marker) => {return marker !== null;});

    // Add a marker for each place returned from search bar
    // places.forEach(function (place) {
    //   markers.push({
    //     position: place.geometry.location
    //   });
    // });

    // Set markers; set map center to first search result
    // const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;
    // const mapCenter = {
    //   position: {
    //     lat: parseFloat(places[0].geometry.location.lat()),
    //     lng: parseFloat(places[0].geometry.location.lng())
    //   }
    // };
      
    // console.log('mapCenter is ', mapCenter);
    // console.log('mapCenter lat is typeof', typeof mapCenter.position.lat);

    this.setState({
      center: {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()}
      // markers: markers
    });

    return;
  }
  
  handleMarkerClick(event) {
    event.marker.showInfo = true;
    //rerender
    this.setState(this.state);
  }
  
  handleMarkerClose(event) {
    event.marker.showInfo = false;
    this.setState(this.state);
  }
  
  onClick(event) {
    console.log('inside of onClick');
    this.props.select(event.id)
      .then(() => { this.context.router.push('/event/' + event.id); });
  }
  
  // <InfoWindow 
  //   key={`${ref}_info_window`}
  //   content={'Awesome!!!'}
  //   onCloseclick={this.handleMarkerClose.bind(this, event)}
  // />
  
  infoWindowContCreator(event) {
    return (
      <div>
        <b>{event.event_name}</b> 
        <br/>  
        {event.event_date.slice(0, 10)}
        <br/>
        <a onClick={this.onClick}> More Info </a>
      </div>
    );
  }
  
  renderInfoWindow(ref, event) {
    console.log('event is ', event);
    return (
      <InfoWindow 
        key={`${ref}_info_window`}
        // content={this.infoWindowContCreator(event)}
        onCloseclick={this.handleMarkerClose.bind(this, event)} >
        
        <div> 
          
          <b> {event.event_name} </b>
          
          <br/>
          
          {event.event_date.slice(0,10)}
          
          <br/>
          
          <a onClick={this.onClick.bind(this, event)}> More Info </a>
        
        </div>
        
      </InfoWindow>
    );
  }

  render () {

    return (
      
      <section style={{height: '100%'}}>
      
        <GoogleMapLoader
          containerElement={
            <div 
              {...this.props}
              style={{
                height: '100%'
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              center={this.state.center}
              defaultZoom={15}
              onBoundsChanged={() => this.handleBoundsChanged()}
              ref="map">

              <SearchBox
                bounds={this.state.bounds}
                controlPosition={google.maps.ControlPosition.TOP_LEFT}
                onPlacesChanged={() => this.handlePlacesChanged()}
                ref="searchBox"
                placeholder="Search Nearby"
                style={GoogleMapsWithSearchBox.inputStyle} />

              {this.state.events.map((event, index) => {
                
                const ref = `marker_${index}`;
                
                return (
                  <Marker 
                    key={index} 
                    ref={ref}
                    position={event.marker.position} 
                    onClick={this.handleMarkerClick.bind(this, event)} >
                    {event.marker.showInfo ? this.renderInfoWindow(ref, event) : null}
                  </Marker> 
                );
              })}
              
            </GoogleMap>
          }
        />
        
      </section>

    );

  }

}