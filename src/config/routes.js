/**
 *    This is the main file for routing.
 *
 *    It will set up all the routing for this app here.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app/index';
import Landing from '../components/landing-page/';
import Dashboard from '../components/dashboard/';
import CreateEvent from '../components/create-event/index';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Landing} />
     <Route path="dashboard" component={Dashboard} />
     <Route path='create' component={CreateEvent} />
  </Route>
);
