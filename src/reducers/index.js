/**
 *    
 *    ALL Reducer functions : Main File 
 *    
 */

import { combineReducers } from 'redux';

//Import Reducers
import EventsReducer from './reducer_events';
import UserReducer from './reducer_user';

//Import Redux-Form Reducer (node module)
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  events: EventsReducer,
  form: formReducer,
  user: UserReducer
});

export default rootReducer;
