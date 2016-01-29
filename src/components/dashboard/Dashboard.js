import React from 'react';
import Router from 'react-router';
// import Helper from '../../helpers/helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requireAuth } from '../../actions/index';

class Dashboard extends React.Component {
  /*static contextTypes = {
    router: React.PropTypes.object
  };*/
  constructor(props, context) {
    super(props);
    context.router;
    /*this.state = {
      isLoggedIn: false
    };*/
  }


  componentDidMount() {
    //check if user is logged in by looking at state

   /* Helper.requireAuth().then((isLoggedIn) => {
      this.setState({ isLoggedIn: isLoggedIn });
      if (!this.state.isLoggedIn) {
        console.log('leaving!');
        this.context.router.push('/#/');
      }
    });*/
  }

  render() {
    return <div>If you can see this, you're logged in!</div>;
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requireAuth }, dispatch);
}

export default connect(null, { requireAuth })(Dashboard);

