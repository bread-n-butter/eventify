import React from 'react';
import {Link} from 'react-router';
// import SignupBtn from './SignupBtn';
import SignupModal from '../auth/SignupModal';

class NavBar extends React.Component {


  render() {
    return (
      <nav  role="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Eventify</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><SignupModal /></li>
            <li><Link to="login">Log In</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
