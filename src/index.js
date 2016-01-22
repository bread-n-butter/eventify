import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Router } from 'react-router';
import {routes} from './config/routes';

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
