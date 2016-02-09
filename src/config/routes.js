/**
 *    This is the main file for routing.
 *
 *    It will set up all the routing for this app here.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app/';
import Landing from '../components/landing-page/';
import Dashboard from '../components/dashboard/';
import CreateEvent from '../components/create-event/';
import Event from '../components/event-page/';
import EditEvent from '../components/edit-event/';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Landing} />
     <Route path="dashboard" component={Dashboard} />
     <Route path="create" component={CreateEvent} />
     <Route path="event/:id" component={Event} />
     <Route path="edit/:id" component={EditEvent} />
  </Route>
);
