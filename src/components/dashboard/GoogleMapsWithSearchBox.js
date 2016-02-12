/**
 *    
 *    Google Mini-Map on the right side of the Dashboard.
 *    
 *    Creates Map from react-google-maps library.
 *    
 */

import {default as React, Component, PropTypes} from 'react';

import {GoogleMapLoader, GoogleMap, Marker, InfoWindow, Circle} from 'react-google-maps';

export default class GoogleMapsWithSearchBox extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        center: {
          lat : nextProps.loc.lat,
          lng : nextProps.loc.long
        },

        centerPin: {
          lat : nextProps.loc.lat,
          lng : nextProps.loc.long
        }
      }
    );
  }

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
    'width': '50%'
  };
  
  //Set default state
  state = {
    bounds: null,
    center: {
      lat: this.props.loc.lat || 48,
      lng: this.props.loc.long || -122
    },

    centerPin: {
      lat: this.props.loc.lat || 48,
      lng: this.props.loc.long || -122
    },
    
    //Create events array with data structure that I can use for imported GoogleMap Component. Also filters out events that doesn't have a lat / long assigned to them. 
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
    //places will be an array of results from searchbox each query. I.E. 'hotels' will have multiple queries.
    const places = this.refs.searchBox.getPlaces();

    //Use the first of those results to set the center of the map.
    this.setState({
      center: {
        lat: places[0].geometry.location.lat(), 
        lng: places[0].geometry.location.lng()
      }
    });
  }

  handleMarkerClick(event) {
    event.marker.showInfo = true;
    this.setState(this.state);
  }

  handleMarkerClose(event) {
    event.marker.showInfo = false;
    this.setState(this.state);
  }

  onClick(event) {
    this.props.select(event.id)
      .then(() => { this.context.router.push('/event/' + event.id); });
  }

  //Pop up window when you click on the Pin in the mini-maps
  renderInfoWindow(ref, event) {
    return (
      <InfoWindow
        key={`${ref}_info_window`}
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
              defaultZoom={11}
              onBoundsChanged={() => this.handleBoundsChanged()}
              ref="map">
              
              {/*  Creates all the markers for all events  */}
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
              
              {/* Creates the Radius circle */}
              {
                <Circle key='circle' center={this.state.centerPin} radius={this.props.radius.miles*1609.344}
                  options={{
                    fillColor: 'red',
                    fillOpacity: 0.20,
                    strokeColor: 'red',
                    strokeOpacity: 1,
                    strokeWeight: 1
                  }} />
              }

            </GoogleMap>
          }
        />

      </section>

    );

  }

}