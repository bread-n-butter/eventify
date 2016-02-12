/* This code is not currently in use but
*  is being kept here for future implementation
*  of local authentication.
*/


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

class SigninBtn extends React.Component {

  render() {
    return (
      <FlatButton
        label = "Sign In"
        style = {style}
      />
    );
  }
}

export default SigninBtn;