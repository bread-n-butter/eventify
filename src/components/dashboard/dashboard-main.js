/**
 *    
 *    Main Page when Logged in 
 *    
 *    
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class mainLoggedIn extends Component {
  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}

export default mainLoggedIn;