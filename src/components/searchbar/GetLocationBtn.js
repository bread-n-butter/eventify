/**
 *    
 *    Component for My Location Button
 *    
 */
import React from 'react';

class GetLocationBtn extends React.Component {
 
  /**
   *    
   *    Save user lat / long onto the Redux State when user clicks on the icon
   *    
   */
  onClick() {
    let startPos;
    let that = this;
    const geoSuccess = function(position) {
      startPos = position;
      console.log('Lat/Long', startPos.coords.latitude, startPos.coords.longitude);
      that.props.updateLocation({
        lat : startPos.coords.latitude,
        long : startPos.coords.longitude,
        address: undefined
      });
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  }

  render() {
    return (
      <div className='location-btn-wrapper'>
        <a onClick={() => this.onClick()} className="btn-floating btn-large waves-effect waves-light">
          <i className="material-icons">my_location</i>
        </a>
      </div>
    );
  }
}

export default GetLocationBtn;
