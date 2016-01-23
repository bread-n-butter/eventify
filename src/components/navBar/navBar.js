import React from 'react';
import {Link} from 'react-router';


class NavBar extends React.Component {
  render() {
    return (
      <nav  role="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Eventify</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="signup">Sign Up</Link></li>
            <li><Link to="login">Log In</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
