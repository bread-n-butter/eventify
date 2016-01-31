/**
 *    This is the main entry for our React App. It sets up where the React app is going to live : in the index.html inside of a DIV that has the id 'app'.
 *
 *    And then it delegates to the routes.js file for routing.
 *
 */

//To be able to use 'fetch' from isomorphic fetch
import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router, hashHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

//Middleware for dispatching functions for delayed execution 
import thunkMiddleware from 'redux-thunk';

import routes from './config/routes';
import reducers from './reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promise,
  logger
)(createStore);

// render the DOM based on the routes.js file replacing the DIV element with 'id' in the index.html
ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ hashHistory } routes={routes}></Router>
  </Provider>
  ,document.getElementById('app')
);
