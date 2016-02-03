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
