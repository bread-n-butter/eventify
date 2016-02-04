/**
 *    
 *    Component for Searching Google Maps Locations
 *    
 */
import React from 'react';

import Geosuggest from 'react-geosuggest';

import GetLocationBtn from './GetLocationBtn';

class GoogleMapsSearchBar extends React.Component {
 
  onSuggestSelect(suggest) {
    console.log('suggest is', suggest);
  }

  render() {
    return (
      <div className='search-bar-wrapper'>
        <Geosuggest country='us' onSuggestSelect={(s) => this.props.updateLocation(s)} />
      </div>
    );
  }
}

export default GoogleMapsSearchBar;
