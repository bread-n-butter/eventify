import { UPDATE_RADIUS, UPDATE_LOCATION, AUTH, LOGOUT  } from '../actions/index';

const INITIAL_STATE = {
  isLoggedin: false, 
  loc: {
    lat: 30.2672, 
    long: -97.7431
  },
  radius: {
    miles: 5
  }
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

  case AUTH:
    return {...state,
      isLoggedIn: action.payload.data.isLoggedIn,
      facebookId: action.payload.data.facebook_id,
      id: action.payload.data.id,
      firstName: action.payload.data.first_name,
      lastName: action.payload.data.last_name,
      email: action.payload.data.email_address
    };

  case LOGOUT:
    return {...state, isLoggedIn: false };

  case UPDATE_LOCATION:
    return {...state,
      loc: {
        lat: action.payload.lat,
        long: action.payload.long,
        address: action.payload.address
      }
    };
  
  case UPDATE_RADIUS:
    return {
      ...state,
      radius: {
        //TODO: fix later. payload.payload
        miles: action.payload.payload
      }
    };
  

  default:
    return state;
  }
}

