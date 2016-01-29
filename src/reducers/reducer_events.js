
import { FETCH_EVENTS, AUTH, LOGOUT } from '../actions/index';
import { FETCH_ONE_EVENT } from '../actions/index';

const INITIAL_STATE = {
  all: [], 
  event: null, 
  isLoggedIn: false,
  eventEdit: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  
  case FETCH_EVENTS:
    return {...state, all: action.payload};
  case AUTH:
    return {...state, isLoggedIn: action.payload.data.isLoggedin};
  case LOGOUT:
    return {...state, isLoggedIn: false };
  case FETCH_ONE_EVENT:
    return {...state, eventEdit: action.payload};
   
  default:
    return state;
  
  }     
    
}
