/**
 *
 *    The Top(est) Level of our App
 *
 *    Renders the NavBar and Children Components
 *    which are the Dashboard, Create Event page, etc.
 *
 */
import React from 'react';
import { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from '../navBar/navBar.js';

export default class App extends Component {
  componentWillMount() {
    // Need to call this for datepicker to appear in Create and Edit Event forms
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
