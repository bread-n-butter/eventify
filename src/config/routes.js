/**
 *    This is the main file for routing.
 *
 *    It will set up all the routing for this app here.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Dashboard from '../components/dashboard/Dashboard';
import Helpers from '../helpers/helpers';

export default (
  <Route path='/' component={Main}>
    <Route path='dashboard/' component={Dashboard} />
  </Route>
);

