/**
 *    This file stores all the Axios calls to the backend and then is exports for use.
 *
 */
import axios from 'axios';

const Helpers = {


  /**
   *    Grabs list of events
   */
  getEvents() {
    return axios.get('/api/events/').then(function(data) {
      return data.data; });
  },

  /**
   *    Grabs events by ID
   *
   *    @param [String or Number] id
   */
  getEventById(id) {
    return axios.get('/api/events/' + id);
  },

  /**
   *    Posts a event
   *
   *    @param [Object] Object with properties for data fields. See CreateEventModal for example.
   */
  postEvent(data) {
    return axios.post('/api/events/', data);
  },

  /*
   *       calculate distance between 2 places using their
   *      longitudes and latitudes
   *      lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
   *      lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
   *      unit = the unit you desire for results                               :::
   *            where: 'M' is statute miles (default)                         :::
   *                    'K' is kilometers                                      :::
   *                    'N' is nautical miles  
*/

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=='K') { dist = dist * 1.609344; }
    if (unit=='N') { dist = dist * 0.8684; }
    return dist;
  }

};



export default Helpers;
