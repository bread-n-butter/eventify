import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Picture from './pic';
import Title from './title';
import Author from './author';
import Details from './details';
import Buttons from './buttons';

class Event extends Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Title />
          </div>
          <div className="col s6">
            <Picture />
          </div>
          <div className="col s6">
            <Details />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <Author />
          </div>
          <div className="col s6">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    event: state.events.event
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
