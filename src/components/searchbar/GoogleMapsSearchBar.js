/**
 *    
 *    Component for Searching Google Maps Locations
 *    
 */
import React from 'react';

import Geosuggest from 'react-geosuggest';

class GoogleMapsSearchBar extends React.Component {
 
 onSuggestSelect(suggest) {
   console.log('suggest is', suggest);
 }

 render() {
   return (
      <Geosuggest country='us' onSuggestSelect={(s) => this.onSuggestSelect(s)}/>
   );
 }
}

export default GoogleMapsSearchBar;
