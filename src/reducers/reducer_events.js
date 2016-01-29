
import { FETCH_EVENTS, AUTH, LOGOUT } from '../actions/index';
import { FETCH_EVENTS } from '../actions/index';
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
    return {...state, isLoggedin: action.payload.data.isLoggedin};
  case LOGOUT:
    return {...state, isLoggedin: false };
  case FETCH_ONE_EVENT:
    return {...state, eventEdit: action.payload};
   
  default:
    return state;
  
  }     
    
}
