/**
 *    This file stores all the Axios calls to the backend and then is exports for use.
 *    
 */
import axios from 'axios'


const helper = {
  /**
   *    Grabs list of events
   */
  getEvents() {
    return axios.get('/api/events').then(function(data) { return data.data });
  },

  /**
   *    Grabs events by ID
   *    
   *    @param id
   */
  getEventById(id) {
    return axios.get('/api/events/' + id);
  }
  
}



export default helper; 