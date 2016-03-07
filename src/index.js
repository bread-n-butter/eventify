/**
 *    This is the main entry for our React App. It sets up where the React app is going to live : in the index.html inside of a DIV that has the id 'app'.
 *
 *    It delegates to the routes.js file for routing.
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import routes from './config/routes';
import reducers from './redux/reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  promise,
  logger
)(createStore);

// Need to call this for date and timepickers to work in create/edit event pages
injectTapEventPlugin();

// render the DOM based on the routes.js file replacing the DIV element with 'id' in the index.html
ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ hashHistory } routes={routes}></Router>
  </Provider>
  ,document.getElementById('app')
);
