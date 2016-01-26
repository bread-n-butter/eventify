import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import SigninBtn from './SigninBtn';
import SigninForm from './SigninForm';


const customContentStyle = {
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
    const actions = [
      <FlatButton
        label="Log In"
        primary={true}
        onClick={() => this.handleClose()} />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={() => this.handleClose()} />
    ];

    return (
      <div>
        <FlatButton
          label = "Log In"
          onClick = {() => this.handleOpen()}
          style = {{color: '#53b3cb'}} />
        <Dialog
          title = "Eventify"
          actions = {actions}
          modal = {false}
          open = {this.state.open}
          contentStyle = {customContentStyle}
          titleStyle = {titleStyle}
          onRequestClose={this.handleClose}>
          <SigninBtn />
          OR
          <SigninForm />
        </Dialog>
      </div>
    );
  }
}

export default SignupModal;