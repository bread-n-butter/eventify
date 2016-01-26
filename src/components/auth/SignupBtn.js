import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const style = {
  display: 'block',
  margin: '0px auto 15px',
  backgroundColor: '#53b3cb',
  fontSize: '1.4em',
  padding: '10px',
  color: '#fff'
};

class SignupBtn extends React.Component {

  render() {
    return (
      <FlatButton
        label = "Sign Up With Facebook"
        style = {style}
        linkButton = {true}
        href = "/api/auth/facebook"
      />
    );
  }
}

export default SignupBtn;