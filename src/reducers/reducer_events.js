import { FETCH_EVENTS, AUTH, LOGOUT, FETCH_ONE_EVENT, CREATE_ONE_EVENT } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  event: null,
  isLoggedIn: false,
  eventEdit: null
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
  case FETCH_EVENTS:
    return {...state, all: action.payload.data.data};
  case AUTH:
    return {...state, isLoggedIn: action.payload.data.isLoggedIn};
  case LOGOUT:
    return {...state, isLoggedIn: false };
  case FETCH_ONE_EVENT:
    return {...state, eventEdit: action.payload};
  case CREATE_ONE_EVENT:
    return {...state, createdEvent: action.payload};
  default:
    return state;
  }
}
