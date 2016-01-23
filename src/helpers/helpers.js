/**
 *    This file stores all the Axios calls to the backend and then is exports for use.
 *    
 */
import axios from 'axios'


const helper = {
  /**
   *    Grabs list of events
   */
  function getEvents() {
    return axios.get('/api/events');
  },

  /**
   *    Grabs events by ID
   *    
   *    @param id
   */
  function getEventById(id) {
    return axios.get('/api/events/' + id);
  }
  
}



export default helper; 