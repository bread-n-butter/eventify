import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import SignupBtn from '../navBar/SignupBtn';
import TextField from 'material-ui/lib/text-field';


const customContentStyle = {
  width: '50%',
  maxWidth: '450px'

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
    const actions = [
      <FlatButton
        label="Sign Up"
        primary={true}
        onClick={() => this.handleClose()} />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={() => this.handleClose()} />
    ];

    return (
      <div>
        <FlatButton label="Sign Up" onClick={() => this.handleOpen()} />
        <Dialog
          title = "Eventify"
          actions = {actions}
          modal = {false}
          open = {this.state.open}
          contentStyle = {customContentStyle}
          titleStyle = {titleStyle}
          onRequestClose={this.handleClose}>
          <SignupBtn />
          OR
          <TextField
            hintText="Email"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} />
          <TextField
            hintText="Password"
            hintStyle={{color: '#a0a6bf'}}
            fullWidth={true} />


        </Dialog>
      </div>
    );
  }
}

export default SignupModal;