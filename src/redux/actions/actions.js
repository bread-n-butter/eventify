/**
 *    
 *    These are actions factories that will create actions. 
 *    
 *    Then the Reducer can understand and then Dispatch actions with the specific action. 
 *    
 */

var actions = {
  
  //When the Events are received from HTTP request
  receiveEvents: function(json) {
    return {
      type: 'RECEIVE_EVENTS',
      events: json.data
      receivedAt: Date.now()
    }
  }
  
  //for Creating events
  createEventInit: function() {
    return {
      type: 'CREATE_EVENTS_REQUEST'
    }
  },
  
  createEventSuccess: function() {
    return {
      type: 'CREATE_EVENTS_SUCCESS'
    }
  },
  
  createEventError: function() {
    return {
      type: 'CREATE_EVENTS_FAILURE'
    }
  },
  
  //for Fetching events
  fetchEventInit: function() {
    return {
      type: 'FETCH_EVENTS_REQUEST'
    };
  },

  fetchEventSuccess: function() {
    return {
      type: 'FETCH_EVENTS_SUCCESS'
    };
  },

  fetchEventError: function() {
    return {
      type: 'FETCH_EVENTS_FAILURE'
    };
  },

};

module.exports = actions;
