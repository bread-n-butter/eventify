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
// import Helpers from '../helpers/helpers';

const Hello = () => {
  return <div>Hey There</div>;
};

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Landing} />
     <Route path="hello" component={Hello} />
     <Route path="dashboard" component={Dashboard} />
     <Route path="*" component={Hello} />
  </Route>
);
