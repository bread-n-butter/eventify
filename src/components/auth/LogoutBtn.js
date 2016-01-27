import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Helpers from '../../helpers/helpers';

class LogoutBtn extends React.Component {

  render() {
    return (
      <FlatButton
        label = "Log Out"
        style = {{color: '#53b3cb'}}
        onClick ={Helpers.logout}
      />
    );
  }
}

export default LogoutBtn;