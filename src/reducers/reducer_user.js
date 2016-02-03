import { AUTH, LOGOUT } from '../actions/index';

const INITIAL_STATE = {isLoggedin: false};

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

  default:
    return state;
  }
}







