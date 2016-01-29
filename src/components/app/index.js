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

import NavBar from '../navBar/navBar.js';

export default class App extends Component {
  render() {
    return (
      <div> 
        <NavBar />
        {this.props.children} 
      </div>
    );
  }
}
