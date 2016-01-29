import { FETCH_EVENTS } from '../actions/index';

const INITIAL_STATE = {all: [], event: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_EVENTS:
    console.log(action);
    return {...state, all: action.payload};
  default:
    return state;
  }
}
