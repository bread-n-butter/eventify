import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import CreateEventBtn from '../create-event/CreateEventBtn';

import { bindActionCreators } from 'redux';

import { auth } from '../../actions/index';

import UploadFile from '../create-event/UploadFile';




class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
    });
  }

  render() {

    if (this.props.isLoggedIn) {
      console.log('navbar auth props check: ', this.props.isLoggedIn);
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
