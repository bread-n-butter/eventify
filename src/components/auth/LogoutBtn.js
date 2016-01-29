import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Helpers from '../../helpers/helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/index';

class LogoutBtn extends React.Component {

  render() {
    return (
      <FlatButton
        label = "Log Out"
        style = {{color: '#53b3cb'}}
        onClick ={this.props.logout}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(null, { logout })(LogoutBtn);
