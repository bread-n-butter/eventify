import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class CreateEventBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleLogout() {
    this.context.router.push('/create');
  }

  render() {
    return (
      <FlatButton
        label = "Create Event"
        style = {{color: '#53b3cb'}}
        onClick = {this.handleLogout.bind(this)}
      />
    );
  }
}

export default CreateEventBtn;