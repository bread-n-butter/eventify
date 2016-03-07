/* This code is not currently in use but
*  is being kept here for future implementation
*  of local authentication.
*/

import React from 'react';
import TextField from 'material-ui/lib/text-field';

class SigninForm extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Email"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} />
        <TextField
          hintText="Password"
          hintStyle={{color: '#a0a6bf'}}
          fullWidth={true} />
      </div>
    );
  }
}

export default SigninForm;
