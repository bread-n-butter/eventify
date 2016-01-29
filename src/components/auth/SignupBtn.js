import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../../actions/index';

const style = {
  display: 'block',
  margin: '0px auto 15px',
  backgroundColor: '#53b3cb',
  fontSize: '1.4em',
  padding: '10px',
  color: '#fff'
};

class SignupBtn extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleSignup() {
    this.props.signup()
      .then(() => {
        this.context.router.push('/dashboard');
      });
  }

  render() {
    return (
      <FlatButton
        label = "Sign Up With Facebook"
        style = {style}
        linkButton = {true}
        onClick = {this.props.signup}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

export default connect(null, { signup })(SignupBtn);
