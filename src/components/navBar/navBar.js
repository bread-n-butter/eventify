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

//Material UI 
import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';
import LogoutBtn from '../auth/LogoutBtn';
import CreateEventBtn from '../create-event/CreateEventBtn';
import FlatButton from 'material-ui/lib/flat-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

class NavBar extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  constructor(props) {
    super(props);
    this.state = {
      leftNav: false
    };
  }

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
    
    //               <a onClick={this.setState({leftNav: {open: !this.state.leftNav.open}})} class="button-collapse"><i class="material-icons">menu</i></a>

    return (
      <div>
        <div className='navbar-fixed'>
          <nav role="navigation" style={{position: 'fixed' , zIndex: '100'}}>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Eventify</a>
              
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <SignupModal /></li>
                <li> <SigninModal /></li>
              </ul>
              
              <ul id="nav-mobile" className="right hide-on-med-and-up">
                <li> 
                  <a onClick={() => this.setState({leftNav: !this.state.leftNav})}><i className="material-icons">menu</i></a>
                </li>
              </ul>
              
              
            </div>
          </nav>
        </div>
        <LeftNav open={this.state.leftNav}>
          <MenuItem>Menu Item</MenuItem>
        </LeftNav>
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
