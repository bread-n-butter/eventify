import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../actions/index';

const style = {
  display: 'block',
  margin: '0px auto 15px',
  backgroundColor: '#53b3cb',
  fontSize: '1.4em',
  padding: '10px',
  color: '#fff'
};

class SignupBtn extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log('signup button auth check', this.props.auth());
  }

  render() {
    return (
      <FlatButton
        label = "Sign Up With Facebook"
        style = {style}
        linkButton = {true}
        href = 'api/auth/facebook'
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ auth }, dispatch);
}

export default connect(null, { auth })(SignupBtn);
