import { FETCH_EVENTS, FETCH_ONE_EVENT, CREATE_ONE_EVENT, UPLOAD_IMG, SET_DATE, SELECT_EVENT} from '../actions/index';

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

  case UPLOAD_IMG:
    return {...state, imageUrl: action.payload};

  case SET_DATE:
    return {...state, eventDate: action.payload};
    
  case FETCH_ONE_EVENT:
  case SELECT_EVENT:
    return {...state, selectedEvent: action.payload};

  default:
    return state;
  }
}

