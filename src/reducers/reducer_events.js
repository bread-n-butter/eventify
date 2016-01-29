import { FETCH_EVENTS, AUTH, LOGOUT } from '../actions/index';

const INITIAL_STATE = {all: [], event: null, isLoggedin: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    
  case FETCH_EVENTS:
    return {...state, all: action.payload};
  case AUTH:
    return {...state, isLoggedin: action.payload.data.isLoggedin};
  case LOGOUT:
    return {...state, isLoggedin: false };
  default:
    return state;
    
  }
}
