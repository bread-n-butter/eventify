import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CircularProgress from 'material-ui/lib/circular-progress';

import NavBar from '../navBar/navBar.js';
import {fetchEvents, auth} from '../../actions/';

import Featured from './featured';
import Joined from './joined';

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.auth().then(() => {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/');
      }
    });
    this.props.fetchEvents();
  }

  render() {
    const events = this.props.events;
    if (events.length === 0) {
      return (
        <div>
          <div className='center-align'>
            <CircularProgress size={2} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className='row'>
          <div className="col s7">Featured
            <Featured data={events} />
          </div>
          <div className="col s5 ">
            <div className="">Joined
              <Joined data={events} />
            </div>
            <div className="">Created
              <Joined data={events} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEvents, auth}, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

