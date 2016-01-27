/**
 *    This is the main entry for our React App. It sets up where the React app is going to live : in the index.html inside of a DIV that has the id 'app'.
 *
 *    And then it delegates to the routes.js file for routing.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router } from 'react-router';

import routes from './config/routes';
import reducers from './reducers';

const createStoreWithMiddlewaree = applyMiddleware()(createStore);

//render the DOM based on the routes.js file replacing the DIV element with 'id' in the index.html
ReactDOM.render(
  <Provider store={ createStoreWithMiddlewaree(reducers) }>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')
);
