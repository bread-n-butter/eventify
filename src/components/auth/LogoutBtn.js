import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/index';

class LogoutBtn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleLogout() {
    this.props.logout()
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    return (
      <FlatButton
        label="Log Out"
        style={{color: '#53b3cb'}}
        onClick={this.handleLogout.bind(this)}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(null, { logout })(LogoutBtn);
