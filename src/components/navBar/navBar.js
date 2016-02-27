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
  
  handleToggle() {
    this.setState({leftNav: !this.state.leftNav});
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className='navbar-fixed'>
          <nav  role="navigation">
            <div className="nav-wrapper">
              <Link to="/dashboard" className="brand-logo">Eventify</Link>
              
                <ul id="nav-mobile">
                  <li className='right hide-on-small-only'>
                    <CreateEventBtn />
                  </li>
                  <li className='right hide-on-small-only'> 
                    <FlatButton
                         label = "Dashboard"
                         style = {{color: '#53b3cb'}}
                         onClick = {this.goToDash.bind(this)}/>
                  </li>
                  <li className='right hide-on-small-only'><LogoutBtn />
                  </li>
                  <li className='left hide-on-med-and-up'> 
                    <a onClick={() => this.handleToggle()}><i className="material-icons">menu</i></a>
                  </li>
                  
                </ul>
                
            </div>
          </nav>
          <LeftNav 
            docked={false}
            open={this.state.leftNav}
            onRequestChange={leftNav => this.setState({leftNav})}
          >
          
            <CreateEventBtn menuItem={true} /> 
            <MenuItem onTouchTap={this.goToDash.bind(this)} style={{color: '#53b3cb'}}>
              Dashboard
            </MenuItem>
            <LogoutBtn menuItem={true} /> 
            
          </LeftNav>
        </div>
        
      );
    }

    return (
      <div>
        <div className='navbar-fixed'>
          <nav role="navigation" style={{position: 'fixed' , zIndex: '100'}}>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Eventify</a>
              
              <ul id="nav-mobile">
                <li className='right hide-on-small-only'> <SignupModal /></li>
                <li className='right hide-on-small-only'> <SigninModal /></li>
                <li className='left hide-on-med-and-up'> 
                  <a onClick={() => this.handleToggle()}><i className="material-icons">menu</i></a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
        <LeftNav 
          docked={false}
          open={this.state.leftNav}
          onRequestChange={leftNav => this.setState({leftNav})}
        >
        
          <SignupModal menuItem={true} /> 
          <SigninModal menuItem={true} /> 
          
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
