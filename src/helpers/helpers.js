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
      console.log('data straight from server is ', data);
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

  requireAuth() {
    return axios.get('/api/loggedin').then(function(result){
      return result.data.isLoggedIn;
    });
  },

  logout() {
    return axios.get('/api/auth/logout');
  }
};



export default Helpers;
