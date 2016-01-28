import React from 'react';
import {Link} from 'react-router';

// import SignupBtn from './SignupBtn';
import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import Helpers from '../../helpers/helpers';

// import CreateEventModal
import CreateEventModal from '../createModal/CreateEventModal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    Helpers.requireAuth().then((isLoggedIn) => {
      this.setState({ isLoggedIn: isLoggedIn });
      console.log('navbar', this.state.isLoggedIn);
    });
  }

  render() {
    return (
      <nav  role="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Eventify</a>
            { this.state.isLoggedIn ? (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <CreateEventModal renderMain={this.props.renderMain}/></li>
                <li> <LogoutBtn /> </li>
              </ul>
            ) : (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <SignupModal /></li>
                <li> <SigninModal /></li>
              </ul>
            )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
