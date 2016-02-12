import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';


class CreateEventBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  goToCreate() {
    this.context.router.push('/create');
  }

  render() {
    return (
      <FlatButton
        label = "Create Event"
        style = {{color: '#53b3cb', border: '2px solid #53b3cb'}}
        onClick = {this.goToCreate.bind(this)}
      />
    );
  }
}

export default CreateEventBtn;