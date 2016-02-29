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
    console.log('Inside of handleToggle');
    this.setState({leftNav: !this.state.leftNav});
  }

  render() {
    if (this.props.isLoggedIn === true) {
      return (
        <div className='navbar-fixed'>
          <nav  role="navigation">
            <div className="nav-wrapper">
              <Link to="/dashboard" className="brand-logo">Eventify</Link>
              
                <ul id="nav-mobile">
                
                  <div className='right'>
                  
                    <li className='hide-on-med-and-down'>
                      <CreateEventBtn />
                    </li>
                    
                    <li className='hide-on-med-and-down'> 
                      <FlatButton
                           label = "Dashboard"
                           style = {{color: '#53b3cb'}}
                           onClick = {this.goToDash.bind(this)}/>
                    </li>
                    
                    <li className='hide-on-med-and-down'>
                      <LogoutBtn />
                    </li>
                  
                  </div>
                  
                  <li className='right hide-on-large-only'> 
                    <a onClick={() => this.handleToggle()}><i className="material-icons">menu</i></a>
                  </li>
                  
                </ul>
                
            </div>
          </nav>
          <LeftNav 
            docked={false}
            openRight={true}
            open={this.state.leftNav}
            onRequestChange={leftNav => this.setState({leftNav})}
          >
          
            <CreateEventBtn closeLeftNav={() => this.handleToggle()} menuItem={true} /> 
            <MenuItem onTouchTap={() => {this.handleToggle(); this.goToDash();}} style={{color: '#53b3cb'}}>
              Dashboard
            </MenuItem>
            <LogoutBtn closeLeftNav={() => this.handleToggle()} menuItem={true} /> 
            
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
                <li className='right hide-on-med-and-down'> <SignupModal /></li>
                <li className='right hide-on-med-and-down'> <SigninModal /></li>
                <li className='right hide-on-large-only'> 
                  <a onClick={() => this.handleToggle()}><i className="material-icons">menu</i></a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
        <LeftNav 
          docked={false}
          openRight={true}
          open={this.state.leftNav}
          onRequestChange={leftNav => this.setState({leftNav})}
        >
        
          <SignupModal closeLeftNav={() => this.setState({leftNav: false})} menuItem={true} /> 
          <SigninModal closeLeftNav={() => this.setState({leftNav: false})} menuItem={true} /> 
          
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
