/**
 *    
 *    Helper function that gets the user's current location
 *    through Chrome's Navigator API,
 *    then calls the reducer function to update the current state.
 *    
 *    @param {Function} func [Redux action-dispatch that updates user's location]
 *       
 */
export default function getUserLocation(func) {
  let startPos;
  const geoSuccess = function(position) {
    startPos = position;
    func({
      lat : startPos.coords.latitude,
      long : startPos.coords.longitude,
      address: 'Your Location'
    });
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
}
