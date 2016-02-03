import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../actions/index';
import { Link } from 'react-router';

import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import CreateEventBtn from '../create-event/CreateEventBtn';
import EditEventBtn from '../edit-event/EditEventBtn';
import FlatButton from 'material-ui/lib/flat-button';




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

  goToDash() {
    this.context.router.push('/dashboard');
  }

  render() {

    if (this.props.isLoggedIn) {
      console.log('navbar auth props check: ', this.props.isLoggedIn);
      return (
        <nav  role="navigation">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Eventify</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <FlatButton
                    label = "Dashboard"
                    style = {{color: '#53b3cb'}}
                    onClick = {this.goToDash.bind(this)}/>
                </li>
                <li> <EditEventBtn /> </li>
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
    isLoggedIn: state.user.isLoggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
