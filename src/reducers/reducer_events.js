import { FETCH_EVENTS, AUTH, LOGOUT, FETCH_ONE_EVENT, CREATE_ONE_EVENT, UPLOAD_IMG } from '../actions/index';

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
    return {...state, isLoggedIn: action.payload.data.isLoggedIn, facebookId: action.payload.data.facebook_id, userId: action.payload.data.id, firstName: action.payload.data.first_name, lastName: action.payload.data.last_name, email: action.payload.data.email_address};
  case LOGOUT:
    return {...state, isLoggedIn: false };
  case FETCH_ONE_EVENT:
    return {...state, fetchedEvent: action.payload};
  case CREATE_ONE_EVENT:
    return {...state, createdEvent: action.payload};
  case UPLOAD_IMG:
    return {...state, imageUrl: action.payload};
  default:
    return state;
  }
}




//initial State:






