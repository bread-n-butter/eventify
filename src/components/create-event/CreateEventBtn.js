/**
 *    
 *    Create Event Button
 *    
 *    Optional :
 *    
 *    @props {Boolean} this.props.menuItem 
 *    if the sign-up button is part of LeftNav,
 *    return a MenuItem instead of FlatButton.
 *    
 */

import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';


class CreateEventBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  goToCreate() {
    this.context.router.push('/create');
  }
  
  handleClickMenuBtn() {
    this.props.closeLeftNav(); 
    this.goToCreate();
  }
  
  handleClickFlatBtn() {
    this.goToCreate();
  }

  render() {
    
    if (this.props.menuItem) {
      return (
          <MenuItem 
            onTouchTap={() => {this.handleClickMenuBtn();}} 
            style={{color: '#53b3cb'}}>
              Create Event
          </MenuItem>
      );
    }
    
    return (
      <FlatButton
        label = "Create Event"
        style = {{color: '#53b3cb', border: '2px solid #53b3cb'}}
        onClick = {() => {this.handleClickFlatBtn();}}
      />
    );
  }
}

export default CreateEventBtn;