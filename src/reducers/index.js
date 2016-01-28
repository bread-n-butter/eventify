import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
  events: EventsReducer
});

export default rootReducer;
