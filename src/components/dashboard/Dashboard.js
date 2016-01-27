import React from 'react';
import Router from 'react-router';
import Helper from '../../helpers/helpers';

class Dashboard extends React.Component {
  /*static contextTypes = {
    router: React.PropTypes.object
  };*/
  /*constructor(props, context) {
    super(props);
    context.router
    console.log(context.router);
  }*/

  componentDidMount() {
    console.log('dashboard mounted');
    Helper.requireAuth().then((isLoggedIn) => {
      this.setState({ isLoggedIn: isLoggedIn });
      console.log(this.state.isLoggedIn);
      if (!this.state.isLoggedIn) {
        console.log('leaving!');
        this.props.history.push('/#/');
      }
    });
  }

  render() {
    return <div>If you can see this, you're logged in!</div>;
  }
}

export default Dashboard;