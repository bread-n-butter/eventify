/**
 *    
 *    ALL Reducer functions : Main File 
 *    
 */

import { combineReducers } from 'redux';

//Import event related Reducers
import EventsReducer from './reducer_events';

//Import Redux-Form Reducer (node module)
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  events: EventsReducer,
  form: formReducer
});

export default rootReducer;
