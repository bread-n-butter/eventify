import { UNJOIN_EVENT, FETCH_EVENTS, FETCH_ONE_EVENT, CREATE_ONE_EVENT, UPLOAD_IMG, SET_DATE, SELECT_EVENT, FETCH_JOINED_EVENTS, FETCH_CREATED_EVENTS, UPDATE_EVENT_LOCATION, EDIT_EVENT } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  selectedEvent: null,
  eventEdit: null
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

  case FETCH_EVENTS:
    return {...state, all: action.payload.data.data};

  case CREATE_ONE_EVENT:
    return {...state, createdEvent: action.payload};

  case FETCH_JOINED_EVENTS:
    return {...state, joinedEvents: action.payload.data.data.events};

  case FETCH_CREATED_EVENTS:
    return {...state, createdEvents: action.payload.data.data};

  case FETCH_ONE_EVENT:
    return {...state, event: action.payload.data.data};

  case UPLOAD_IMG:
    return {...state, imageUrl: action.payload};

  case SET_DATE:
    return {...state, eventDate: action.payload};

/*  case SELECT_EVENT:
    return {...state, selectedEvent: action.payload};*/

  case UPDATE_EVENT_LOCATION:
    return {...state, createEventLocation: action.payload};

  case EDIT_EVENT:
    return {...state, eventDetails: action.payload};
  case UNJOIN_EVENT:
    console.log(action);
    return state;
  default:
    return state;
  }
}

