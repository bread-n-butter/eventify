/*
*  Top-level component for signing up
*/

import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import LoginFBBtn from './LoginFBBtn';


const contentStyle = {
  width: '50%',
  maxWidth: '450px',
  textAlign: 'center'

};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  color: '#db436c'
};

class SignupModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {

    return (
      <div>
        <FlatButton
          label="Sign Up"
          onClick={() => this.handleOpen()}
          style={{color: '#53b3cb'}} />
        <Dialog
          title="Eventify"
          modal={false}
          open={this.state.open}
          contentStyle={contentStyle}
          titleStyle={titleStyle}
          onRequestClose={this.handleClose}>
          <LoginFBBtn />
          {/* keep this code here for future local authentication implementation
          OR
          <SignupForm />*/}
        </Dialog>
      </div>
    );
  }
}

export default SignupModal;
