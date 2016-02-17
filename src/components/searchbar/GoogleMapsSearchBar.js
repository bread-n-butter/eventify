/**
 *
 *    Search Box Component for Searching Google Maps Locations
 *    
 *    Required:
 *    
 *    @props {Function} 'updateLocation' [data handler function when user selects a location from suggestions]
 *    
 *    @props {String} 'initialValue' [value that shows up as a placeholder in the searchbox]
 *    
 */
import React from 'react';

//Components
import Geosuggest from './react-geosuggest/Geosuggest';


class GoogleMapsSearchBar extends React.Component {
  
  inputStyles() {
    return {
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
  }

  render() {
    return (
      <div className='search-bar-wrapper'>
        <Geosuggest
          style={this.inputStyles()}
          placeholder={this.props.initialValue || 'Please Enter a Location'}
          country='us'
          onSuggestSelect={(s) => this.props.updateLocation(s)} />
      </div>
    );
  }
}

GoogleMapsSearchBar.propTypes = { 
  updateLocation: React.PropTypes.func.isRequired, 
  initialValue: React.PropTypes.string.isRequired 
};

export default GoogleMapsSearchBar;
