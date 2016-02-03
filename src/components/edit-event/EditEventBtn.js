import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class EditEventBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  goToEdit() {
    this.context.router.push('/edit');
  }

  render() {
    return (
      <FlatButton
        label = "Edit Event"
        style = {{color: '#53b3cb'}}
        onClick = {this.goToEdit.bind(this)}
      />
    );
  }
}

export default EditEventBtn;