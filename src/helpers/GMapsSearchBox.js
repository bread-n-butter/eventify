/**
 *    
 *    Search Box Component for Searching Google Maps API
 *    
 */
import React, {Component} from 'react';
import {GoogleMap, GoogleMapLoader, SearchBox} from 'react-google-maps';

class GMapsSearchBox extends Component {
  
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
  
  handlePlacesChanged(event) {
    console.log('event is ', event);
  }
  
  render() {
    return (
      
    <section style={{height: '200px'}}>
    
          <SearchBox
            onPlacesChanged={() => this.handlePlacesChanged()}
            ref="searchBox"
            placeholder="Search Nearby"
            style={GMapsSearchBox.inputStyle} 
          />
      
    </section>
    
    );
  }
  
}

export default GMapsSearchBox;