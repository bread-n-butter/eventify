/**
 *    
 *    Top - Level Nav-Bar Component
 *    
 */

//React - Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../redux/actions/index';
import { Link } from 'react-router';

//Material UI component imports
import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import CreateEventBtn from '../create-event/CreateEventBtn';
import FlatButton from 'material-ui/lib/flat-button';


class NavBar extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.auth();
  }

  goToDash() {
    this.context.router.push('/dashboard');
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className='navbar-fixed'>
          <nav  role="navigation">
            <div className="nav-wrapper">
              <Link to="/dashboard" className="brand-logo">Eventify</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <CreateEventBtn />
                  </li>
                  <li> <FlatButton
                         label = "Dashboard"
                         style = {{color: '#53b3cb'}}
                         onClick = {this.goToDash.bind(this)}/></li>
                  <li><LogoutBtn /></li>
                </ul>
            </div>
          </nav>
        </div>
      );
    }

    return (
      <div className='navbar-fixed'>
        <nav role="navigation" style={{position: 'fixed' , zIndex: '100'}}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Eventify</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <SignupModal /></li>
                <li> <SigninModal /></li>
              </ul>
          </div>
        </nav>
      </div>
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
