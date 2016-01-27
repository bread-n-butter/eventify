/**
 *    This is the main entry for our React App. It sets up where the React app is going to live : in the index.html inside of a DIV that has the id 'app'.
 *
 *    And then it delegates to the routes.js file for routing.
 *
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Router, Route, Link } from 'react-router';
import routes from './config/routes';

//render the DOM based on the routes.js file replacing the DIV element with 'id' in the index.html
ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
