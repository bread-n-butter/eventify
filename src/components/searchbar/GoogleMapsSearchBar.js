/**
 *    
 *    Component for Searching Google Maps Locations
 *    
 */
import React from 'react';

// import Geosuggest from 'react-geosuggest';

//Import not from NPM but from actual files
import Geosuggest from './react-geosuggest/Geosuggest';

import GetLocationBtn from './GetLocationBtn';

class GoogleMapsSearchBar extends React.Component {
 
  onSuggestSelect(suggest) {
    console.log('suggest is', suggest);
  }

  render() {
    return (
      <div className='search-bar-wrapper'>
        <Geosuggest 
          placeholder={this.props.initialValue || 'Please Enter a Location'} 
          country='us' 
          onSuggestSelect={(s) => this.props.updateLocation(s)} />
      </div>
    );
  }
}

export default GoogleMapsSearchBar;
