/**
 *    This is the main file for routing. 
 *    
 *    It will set up all the routing for this app here. 
 */

import React from 'react';

import Main from '../components/Main';

import { Route, IndexRoute } from 'react-router';

export default (
  <Route path='/' component={Main}>
  </Route>  
);