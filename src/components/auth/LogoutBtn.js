/**
 *    
 *    Logout Button
 *    
 *    Optional :
 *    
 *    @props {Boolean} this.props.menuItem 
 *    if the sign-up button is part of LeftNav,
 *    return a MenuItem instead of FlatButton.
 *    
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/actions/index';

//Material UI
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';

class LogoutBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleLogout() {
    this.props.logout()
      .then(() => {
        this.context.router.push('/');
      });
  }
  
  handleClickMenuBtn() {
    this.props.closeLeftNav(); 
    this.handleLogout();
  }
  
  handleClickFlatBtn() {
    this.handleLogout();
  }

  render() {
    
    if (this.props.menuItem) {
      return (
        <MenuItem onTouchTap={() => this.handleClickMenuBtn()} style={{color: '#53b3cb'}}> 
          Log Out
        </MenuItem>
      );
    }
    
    return (
      <FlatButton
        label="Log Out"
        style={{color: '#53b3cb'}}
        onClick={() => this.handleClickFlatBtn()}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(null, { logout })(LogoutBtn);
