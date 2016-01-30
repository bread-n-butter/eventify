import React from 'react';
import { connect } from 'react-redux';

import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import CreateEventBtn from '../create-event/CreateEventBtn';

import { bindActionCreators } from 'redux';

import { auth } from '../../actions/index';


class NavBar extends React.Component {

  componentDidMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
    });
  }

  render() {

    if (this.props.isLoggedIn) {
      return (
        <nav  role="navigation">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Eventify</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <CreateEventBtn /> </li>
                <li> <LogoutBtn /> </li>
              </ul>
          </div>
        </nav>
      );
    }

    return (
      <nav  role="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Eventify</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li> <SignupModal /></li>
              <li> <SigninModal /></li>
            </ul>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({auth}, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.events.isLoggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
