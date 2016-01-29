import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  events: EventsReducer,
  auth: AuthReducer
});

export default rootReducer;
