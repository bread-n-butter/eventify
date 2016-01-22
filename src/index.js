import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { hashHistory } from 'react-router';
import {routes} from './config/routes';

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
